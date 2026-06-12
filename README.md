# Intérprete de MiniBASIC

## ¿Qué es este proyecto?
MiniBASIC es un intérprete para un lenguaje tipo BASIC, inspirado en la programación retro basada en números de línea y saltos dinámicos. El objetivo del proyecto es analizar un archivo de entrada, construir su árbol sintáctico con ANTLR4 y ejecutar las instrucciones mediante lógica escrita en Node.js.

La idea central del lenguaje es que el flujo del programa no depende únicamente del orden físico de las líneas, sino también de instrucciones como `GOTO`, que permiten modificar el punto de ejecución en tiempo real.

## Objetivo general
El proyecto busca implementar un intérprete capaz de:

- Leer código fuente desde `input.txt`.
- Analizar la sintaxis del programa con ANTLR4.
- Reconocer líneas numeradas e instrucciones válidas.
- Preparar la base semántica para ejecutar asignaciones, `PRINT`, `GOTO` y `END`.

## Gramática del lenguaje
La gramática del proyecto está definida en [MiniBASIC.g4](MiniBASIC.g4) y actualmente reconoce las siguientes estructuras:

- `PRINT expresion`
- `ID = expresion`
- `GOTO NUMERO`
- `END`

### Componentes léxicos
- `PRINT`, `GOTO`, `END`
- `ID`
- `NUMERO`
- `CADENA`
- `+`, `-`, `=`

### Estructura de una línea
Cada línea del programa debe comenzar con un número de línea:

```text
10 PRINT "HOLA"
20 X = 5
30 GOTO 10
40 END
```

## Arquitectura del intérprete
El flujo general del proyecto se organiza en dos etapas:

1. **Análisis sintáctico**
   - `index.js` lee el contenido de `input.txt`.
   - Se crean los tokens y el parser de ANTLR4.
   - Se genera el árbol sintáctico del programa.

2. **Interpretación semántica**
   - `VisitorImpl.js` contiene la base del visitante que recorrerá el árbol.
   - Allí se mantiene la tabla de líneas y la memoria de variables.
   - En una etapa posterior se usará esa información para ejecutar el programa con saltos y asignaciones.

## Estructura del proyecto

```text
MiniTraductor/
├── index.js
├── input.txt
├── MiniBASIC.g4
├── VisitorImpl.js
├── package.json
└── tools/
```

## Requisitos
Antes de ejecutar el proyecto, necesitas tener instalado:

- Node.js 16 o superior
- Java JDK 11 o superior

## Instalación

```bash
git clone <URL_DE_TU_REPOSITORIO_DE_GITHUB>
cd MiniTraductor
npm install
```

## Comandos disponibles

### Compilar la gramática
Cada vez que se modifique [MiniBASIC.g4](MiniBASIC.g4), recompila los archivos generados con:

```bash
npm run build
```

Este comando usa ANTLR4 desde la carpeta `tools/` para generar los archivos auxiliares del lexer, parser y visitor.

### Ejecutar el intérprete
Para correr el proyecto con el contenido de [input.txt](input.txt):

```bash
npm start
```

## Desarrollo por etapas
El proyecto puede organizarse por sprints o hitos de implementación:

- [x] Configuración inicial del repositorio y entorno NPM.
- [ ] Sprint 1: diseño y ajuste de la gramática.
- [ ] Sprint 2: implementación del núcleo semántico del visitante.
- [ ] Sprint 3: validación, manejo de errores y pruebas finales.

## Estado actual
En el estado actual del repositorio, la estructura del analizador está preparada y el visitante semántico está listo para ser completado. La base del proyecto ya permite trabajar sobre el parser y extender la ejecución del lenguaje en las siguientes iteraciones.

## Notas
- El archivo de entrada por defecto es [input.txt](input.txt).
- Los archivos generados por ANTLR4 no deben editarse manualmente.
- Si cambias la gramática, vuelve a ejecutar `npm run build` antes de `npm start`.
