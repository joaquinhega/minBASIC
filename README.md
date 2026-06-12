# Intérprete de MiniBASIC — Proyecto Final (Teoría de la Computación II)

## Descripción General

Este proyecto consiste en el desarrollo de un intérprete completo para **MiniBASIC**, un lenguaje inspirado en las primeras versiones de BASIC. El objetivo principal es implementar un entorno capaz de ejecutar programas mediante una **ejecución no secuencial basada en números de línea y saltos dinámicos (`GOTO`)**, manteniendo además un sistema de variables con soporte para ámbitos de ejecución (*scopes*).

A diferencia de los lenguajes modernos, donde las instrucciones suelen ejecutarse de forma secuencial, MiniBASIC permite alterar el flujo de ejecución durante el tiempo de ejecución mediante saltos hacia cualquier línea válida del programa.

---

## Objetivos

- Implementar un intérprete funcional para MiniBASIC.
- Procesar programas utilizando ANTLR4 para el análisis léxico y sintáctico.
- Ejecutar instrucciones mediante un contador de programa (Program Counter).
- Permitir saltos dinámicos mediante la instrucción `GOTO`.
- Gestionar variables globales y locales utilizando scopes.
- Soportar expresiones aritméticas, lógicas y relacionales.
- Proporcionar manejo de errores y validaciones de ejecución.

---

## Arquitectura del Intérprete

El funcionamiento del sistema se divide en distintas etapas.

### 1. Análisis Léxico y Sintáctico

Utilizando **ANTLR4**, el código fuente es procesado en dos pasos:

- **Lexer:** transforma los caracteres de entrada en tokens.
- **Parser:** construye un Árbol de Sintaxis Abstracta (AST) a partir de dichos tokens.

Esta fase garantiza que el programa cumpla con la gramática definida en `MiniBASIC.g4`.

### 2. Carga de Instrucciones

Implementada en `VisitorImpl.js`.

Durante esta etapa se recorre el AST y se almacenan las instrucciones en una estructura de datos denominada `tablaLineas`, donde cada número de línea queda asociado con su instrucción correspondiente.

En esta fase no se ejecuta ninguna instrucción.

### 3. Ejecución Dinámica

Implementada en `Interpreter.js`.

El intérprete utiliza un ciclo de ejecución basado en un **Program Counter (PC)**:

1. Obtiene la línea actual.
2. Ejecuta la instrucción asociada.
3. Avanza a la siguiente línea o modifica el PC si encuentra un `GOTO`.
4. Finaliza cuando encuentra `END`.

Características principales:

- Ejecución basada en líneas numeradas.
- Saltos dinámicos mediante `GOTO`.
- Validación de líneas destino.
- Protección contra ciclos infinitos mediante límite de iteraciones (10000).

### 4. Gestión de Variables y Scopes

Implementada en `SymbolTable.js`.

La tabla de símbolos utiliza una pila de ámbitos (*stack of scopes*) para almacenar variables.

Funciones soportadas:

- Declaración y actualización de variables.
- Variables globales y locales.
- Creación de ámbitos mediante `BEGIN`.
- Eliminación de ámbitos mediante `ENDSCOPE`.
- Coerción automática de tipos.
- Operadores relacionales y lógicos.
- Validación de variables no inicializadas.

---

## Estructura del Proyecto

```text
MiniTraductor/
├── node_modules/         # Dependencias del proyecto
├── tools/                # antlr-4.13.2-complete.jar
├── test/                 # Programas de prueba y documentación de tests
├── index.js              # Punto de entrada
├── Interpreter.js        # Motor de ejecución
├── VisitorImpl.js        # Evaluación semántica
├── SymbolTable.js        # Tabla de símbolos y scopes
├── MiniBASIC.g4           # Gramática del lenguaje
├── input.txt             # Programa de prueba
├── package.json          # Configuración y scripts
└── README.md             # Documentación
```

---

## Instalación

### Requisitos

- Node.js v16 o superior
- Java JDK v11 o superior

### Instalación de dependencias

```bash
npm install
```

### Compilar la gramática

Ejecutar únicamente cuando se realicen modificaciones sobre `MiniBASIC.g4`.

```bash
npm run build
```

### Ejecutar el intérprete

```bash
npm start
```

---

## Componentes Principales

### `index.js`

Coordina todo el flujo de ejecución:

- Lectura del archivo fuente.
- Inicialización del lexer y parser.
- Construcción del AST.
- Creación de la tabla de líneas.
- Inicio del intérprete.

### `Interpreter.js`

Implementa el ciclo principal de ejecución.

Responsabilidades:

- Mantener el Program Counter.
- Ejecutar instrucciones.
- Resolver saltos `GOTO`.
- Detectar ciclos infinitos.
- Finalizar la ejecución.

### `VisitorImpl.js`

Implementa la lógica semántica de las instrucciones.

Responsabilidades:

- Evaluar expresiones (relacionales, aritméticas y factores).
- Ejecutar asignaciones.
- Procesar sentencias `PRINT`.
- Gestionar scopes.
- Resolver operaciones lógicas y relacionales.
- Validar división por cero.

### `SymbolTable.js`

Gestiona las variables del programa.

Responsabilidades:

- Almacenamiento de variables.
- Búsqueda de identificadores.
- Gestión de scopes.
- Conversión de tipos.
- Actualización de valores.

---

## Estado del Proyecto

### Funcionalidades Implementadas

#### Sprint 1 — Gramática y Pipeline

- Lexer funcional.
- Parser funcional.
- Gramática libre de ambigüedades.
- Integración con ANTLR4.

#### Sprint 2 — Núcleo del Intérprete

- Program Counter.
- Ejecución dinámica.
- Instrucciones:
  - `PRINT`
  - Asignación (`=`)
  - `GOTO`
  - `END`
- Protección contra loops infinitos.

#### Sprint 3 — Variables y Scopes

- Variables globales.
- Variables locales.
- `BEGIN`
- `ENDSCOPE`
- Operadores relacionales.
- Coerción automática de tipos.

#### Sprint 4 — Entrega Final

**Extensión de la gramática**
- Multiplicación (`*`) y división (`/`) agregadas como nuevo nivel de precedencia (`factor`), por encima de `+`/`-`.

**Manejo de errores**
- Validación de división por cero (`Error Aritmético: Division por cero.`).
- Validación de variables no inicializadas (`Error de Referencia: La variable '...' no ha sido inicializada.`).
- Detección y aborto seguro de ciclos infinitos (límite de 10000 iteraciones).

**Casos de prueba**

Se desarrollaron 4 programas de prueba en `test/`, documentados en `test/README_pruebas.md`:

1. `programa1_basico.txt` — PRINT, asignaciones, aritmética y `END`.
2. `programa2_comparaciones_scopes.txt` — operadores relacionales, `BEGIN`/`ENDSCOPE` y `GOTO` hacia adelante.
3. `programa3_concat_loop.txt` — concatenación de strings, `GOTO` hacia atrás y detección de ciclo infinito.
4. `programa4_mult_div_error.txt` — multiplicación, división y validación de división por cero.

**Documentación y revisión**
- Verificación de cumplimiento de la rúbrica de la Práctica 10.
- Revisión del informe de entrega.

---

## Características del Lenguaje

Actualmente MiniBASIC soporta:

### Control de flujo

- `GOTO`
- `END`

### Variables

- Variables enteras
- Variables booleanas
- Variables de texto

### Ámbitos

- `BEGIN`
- `ENDSCOPE`

### Operadores aritméticos

- `+` (suma / concatenación)
- `-` (resta)
- `*` (multiplicación)
- `/` (división, con validación de división por cero)

### Operadores relacionales

- `>`
- `<`
- `==`

### Conversión automática de tipos

El intérprete puede:

- Realizar operaciones numéricas (suma, resta, multiplicación, división).
- Concatenar cadenas de texto.
- Resolver comparaciones lógicas.

---

## Tecnologías Utilizadas

- JavaScript (Node.js)
- ANTLR4
- Java JDK
- MiniBASIC (lenguaje interpretado)

---

## Conclusión

El proyecto implementa un intérprete completo para MiniBASIC basado en una arquitectura modular compuesta por análisis sintáctico, almacenamiento de instrucciones, ejecución dinámica y gestión de memoria mediante scopes. Todos los sprints (1 a 4) se encuentran completados, incluyendo operadores aritméticos completos, manejo de errores, casos de prueba documentados y verificación de la rúbrica de entrega.