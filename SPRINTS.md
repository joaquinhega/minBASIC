# 📋 MiniBASIC: Roadmap de Sprints

## 🎯 Visión General del Proyecto

**Objetivo:** Diseñar e implementar un intérprete funcional del lenguaje **MiniBASIC**, un subconjunto simplificado de BASIC clásico, mediante una arquitectura modular basada en ANTLR4 que respeta la jerarquía de Chomsky y establece fases de análisis (léxica, sintáctica, semántica) claramente diferenciadas.

**Stack Técnico:** 
- Grammar: ANTLR4 (v4.13.2)
- Runtime: Node.js (ES Modules)
- Fases: Lexer → Parser → AST → Visitor (Interpretación)

---

## 📅 Sprints Planificados

### ✅ **Sprint 1: Especificación Formal de Gramática y Pipeline** 
**Estado:** 🟢 **COMPLETADO**

#### 🎯 Objetivo
Diseñar e implementar la infraestructura formal del lenguaje MiniBASIC mediante una gramática independiente del contexto (G2), libre de ambigüedades algebraicas, cumpliendo convenciones estrictas de parsing y configurando el pipeline automatizado de generación de artefactos en JavaScript con ANTLR4.

#### 📋 Requisitos
| ID | Requisito | Criterio de Aceptación | Estado |
|---|---|---|---|
| REQ-1.1 | Lexer Estricto de Terminales | Todos los tokens definidos en MAYÚSCULAS; sin literales en reglas del parser | ✅ |
| REQ-1.2 | Sintaxis Jerárquica No Ambigua | Reglas en minúsculas; estructura jerárquica para precedencia algebraica | ✅ |
| REQ-1.3 | Automatización del Build Tool | Script en package.json invocando ANTLR4 v4.13.2 con flags correctos | ✅ |
| REQ-1.4 | Validación y Generación de Clases | Compilación limpia; generación de Lexer, Parser, Visitor sin warnings | ✅ |

#### 🔧 Artefactos Generados
- ✅ `MiniBASICLexer.js` (2.89 KB)
- ✅ `MiniBASICParser.js` (14.18 KB)
- ✅ `MiniBASICVisitor.js` (0.91 KB)
- ✅ `.gitignore` configurado
- ✅ Repositorio en GitHub: https://github.com/joaquinhega/minBASIC.git

---

### ⏳ **Sprint 2: Núcleo del Intérprete - Implementación del Visitor**
**Estado:** 🟡 **PENDIENTE**

#### 🎯 Objetivo
Implementar la infraestructura semántica del intérprete mediante un Visitor funcional que transforme el AST (Abstract Syntax Tree) generado por ANTLR4 en un modelo de ejecución secuencial. Establecer las dos fases críticas: *Inicialización del Contexto* e *Interpretación Dinámica*.

#### 📋 Requisitos
| ID | Requisito | Criterio de Aceptación | Estado |
|---|---|---|---|
| REQ-2.1 | Estructura Base del Visitor | Clase `MiniBASICVisitor` extendida con métodos para cada regla del parser | ⏳ |
| REQ-2.2 | Contexto de Ejecución Global | Almacén centralizado (object) para variables, scope y estado de flujo | ⏳ |
| REQ-2.3 | Evaluación de Expresiones | Evaluador recursivo para expresiones aritméticas con operadores +, - | ⏳ |
| REQ-2.4 | Fase 1: Inicialización | Pre-procesamiento de líneas numeradas; tabla de saltos para GOTO | ⏳ |
| REQ-2.5 | Fase 2: Interpretación | Ejecución secuencial con manejo de END y validación de instrucciones | ⏳ |

#### 🔧 Entregables
- [ ] `VisitorImpl.js` - Implementación funcional del Visitor
- [ ] `Interpreter.js` - Motor de ejecución con contexto global
- [ ] Test básico: `test/sprint2.test.js`
- [ ] Documentación: `docs/SPRINT-2.md`

#### ✅ Criterio de Éxito
- Intérprete ejecuta correctamente programas MiniBASIC simples (PRINT, asignaciones)
- Sin errores de evaluación en expresiones básicas
- Contexto de ejecución persiste entre líneas

---

### ⏳ **Sprint 3: Sistema de Variables y Scope**
**Estado:** 🔵 **DISEÑO**

#### 🎯 Objetivo
Establecer un sistema completo de gestión de variables con soporte para tipos de datos primitivos (números, strings, booleanos) y mecanismo de scope local/global que permita la reutilización de identificadores en diferentes contextos.

#### 📋 Requisitos
| ID | Requisito | Criterio de Aceptación | Estado |
|---|---|---|---|
| REQ-3.1 | Tabla de Símbolos | Diccionario centralizado de variables con tipos y valores | ⏳ |
| REQ-3.2 | Tipos de Datos | Soporte para INTEGER, STRING, BOOLEAN con coerción automática | ⏳ |
| REQ-3.3 | Validación de Identificadores | Detección de variables no inicializadas; error explícito | ⏳ |
| REQ-3.4 | Scope Local vs Global | Stack de scopes; aislamiento en bloques (preparación para funciones) | ⏳ |
| REQ-3.5 | Operaciones sobre Variables | Asignación, lectura, comparación, concatenación de strings | ⏳ |

#### 🔧 Entregables
- [ ] `SymbolTable.js` - Gestor de variables y tipos
- [ ] Sistema de coerción de tipos
- [ ] Validación de inicialización
- [ ] Test: `test/sprint3.test.js`

#### ✅ Criterio de Éxito
- Variables persisten correctamente entre instrucciones
- Errores de variables no inicializadas capturados
- Operaciones aritméticas y string correctas

---

### ⏳ **Sprint 4: Control de Flujo Avanzado**
**Estado:** 🔵 **DISEÑO**

#### 🎯 Objetivo
Implementar mecanismos de control de flujo no secuencial: GOTO incondicional, condicionales IF/THEN/ELSE, y bucles WHILE/FOR para permitir programas con lógica de ramificación compleja.

#### 📋 Requisitos
| ID | Requisito | Criterio de Aceptación | Estado |
|---|---|---|---|
| REQ-4.1 | GOTO Incondicional | Tabla de líneas numeradas; saltos válidos con detección de destinos inválidos | ⏳ |
| REQ-4.2 | IF/THEN/ELSE | Evaluación condicional de expresiones booleanas; ramificación correcta | ⏳ |
| REQ-4.3 | WHILE Loops | Bucles con condición inicial; break en destinos dinámicos | ⏳ |
| REQ-4.4 | FOR Loops | Iteradores implícitos con rango (opcional para Sprint 2) | ⏳ |
| REQ-4.5 | Detección de Ciclos Infinitos | Límite configurable de iteraciones; warning en consola | ⏳ |

#### 🔧 Entregables
- [ ] Extensión de gramática `.g4` con condicionales/bucles
- [ ] Lógica de salto condicional en Visitor
- [ ] Validación de destinos GOTO
- [ ] Contador de iteraciones
- [ ] Test: `test/sprint4.test.js`

#### ✅ Criterio de Éxito
- GOTO funciona en ambas direcciones
- IF/THEN ejecuta rama correcta según condición
- Ciclos infinitos detectados y notificados
- Sin deadlocks o stack overflow

---

### ⏳ **Sprint 5: Funciones y Subrutinas**
**Estado:** 🔵 **DISEÑO**

#### 🎯 Objetivo
Extender MiniBASIC con capacidad de modularización mediante definición de subrutinas (GOSUB/RETURN) que permitan reutilización de código y encapsulación de lógica.

#### 📋 Requisitos
| ID | Requisito | Criterio de Aceptación | Estado |
|---|---|---|---|
| REQ-5.1 | GOSUB/RETURN | Stack de retorno; restauración de IP (Instruction Pointer) correcta | ⏳ |
| REQ-5.2 | Parámetros por Valor | Mecanismo de paso de argumentos (arrays o registros) | ⏳ |
| REQ-5.3 | Scope Local en Subrutinas | Variables locales aisladas del scope global (stack de símbolos) | ⏳ |
| REQ-5.4 | Recursión | Detección y limitación de profundidad de llamadas | ⏳ |

#### 🔧 Entregables
- [ ] Extensión gramática para GOSUB/RETURN
- [ ] Stack de retorno en contexto de ejecución
- [ ] Scope local para subrutinas
- [ ] Detector de recursión infinita
- [ ] Test: `test/sprint5.test.js`

---

### ⏳ **Sprint 6: E/S Avanzada y Manejo de Strings**
**Estado:** 🔵 **DISEÑO**

#### 🎯 Objetivo
Ampliar capacidades de entrada/salida (INPUT, READ/DATA) y proporcionar funciones de manipulación de strings (LEN, MID, LEFT, RIGHT, UPPER, LOWER) para aplicaciones interactivas.

#### 📋 Requisitos
| ID | Requisito | Criterio de Aceptación | Estado |
|---|---|---|---|
| REQ-6.1 | INPUT Dinámico | Lectura de stdin con prompt; validación de tipo | ⏳ |
| REQ-6.2 | READ/DATA Declarativo | Data embebida; puntero interno de lectura | ⏳ |
| REQ-6.3 | Funciones String | LEN(), MID(), LEFT(), RIGHT(), UPPER(), LOWER() | ⏳ |
| REQ-6.4 | Concatenación String | Operador + para strings; conversión automática de tipos | ⏳ |
| REQ-6.5 | PRINT Formateado | Separadores (coma, punto y coma); tabulación | ⏳ |

#### 🔧 Entregables
- [ ] Función INPUT y buffer de lectura
- [ ] Tabla de strings internos (READ/DATA)
- [ ] Librería de funciones string
- [ ] Formateador de output
- [ ] Test: `test/sprint6.test.js`

---

### ⏳ **Sprint 7: Arrays y Estructuras de Datos**
**Estado:** 🔵 **DISEÑO**

#### 🎯 Objetivo
Implementar soporte para arrays (DIMENSION statement) con indexación numérica y matrices bidimensionales, extendiendo el poder expresivo del lenguaje para algoritmos que manipulan colecciones de datos.

#### 📋 Requisitos
| ID | Requisito | Criterio de Aceptación | Estado |
|---|---|---|---|
| REQ-7.1 | DIM Statement | Declaración de arrays; validación de límites | ⏳ |
| REQ-7.2 | Indexación de Arrays | Acceso A(I), A(I,J) con validación de rango | ⏳ |
| REQ-7.3 | Inicialización | DIM A(10) asigna espacio; valores por defecto 0/empty | ⏳ |
| REQ-7.4 | Matrices 2D | Soporte para arrays bidimensionales | ⏳ |

#### 🔧 Entregables
- [ ] Extensión gramática para DIM
- [ ] Tabla de arrays en Symbol Table
- [ ] Validador de índices
- [ ] Test: `test/sprint7.test.js`

---

### ⏳ **Sprint 8: Optimización y Testing Integral**
**Estado:** 🔵 **DISEÑO**

#### 🎯 Objetivo
Realizar suite de testing exhaustiva cubriendo caminos críticos, optimizar rendimiento del intérprete, y preparar documentación final para distribución.

#### 📋 Requisitos
| ID | Requisito | Criterio de Aceptación | Estado |
|---|---|---|---|
| REQ-8.1 | Test Suite Completa | >80% cobertura; test para todos los requisitos previos | ⏳ |
| REQ-8.2 | Benchmarking | Tiempo de ejecución para programas estándar documentado | ⏳ |
| REQ-8.3 | Profiling y Optimización | Identificación y eliminación de cuellos de botella | ⏳ |
| REQ-8.4 | Documentación | README, CONTRIBUTING, ejemplos de programas MiniBASIC | ⏳ |
| REQ-8.5 | CI/CD Pipeline | GitHub Actions para test automático en push | ⏳ |

#### 🔧 Entregables
- [ ] Test suite integrado (`npm test`)
- [ ] Benchmark results
- [ ] Documentación técnica completa
- [ ] Ejemplos de programas (Fibonacci, búsqueda, ordenamiento)
- [ ] GitHub Actions workflow

---

## 📊 Matriz de Dependencias

```
Sprint 1 (Gramática)
    ↓
Sprint 2 (Visitor Base)
    ↓
Sprint 3 (Variables)  ←→  Sprint 4 (Control de Flujo)
    ↓                           ↓
Sprint 5 (Subrutinas)      Sprint 6 (E/S y Strings)
    ↓                           ↓
Sprint 7 (Arrays) ←────────────┘
    ↓
Sprint 8 (Testing & Docs)
```

---

## 🎓 Convenciones y Estándares

### Nomenclatura
- **Tokens ANTLR4:** MAYÚSCULAS (PRINT, GOTO, IGUAL)
- **Reglas Parser:** minúsculas (programa, instruccion, expresion)
- **Clases JavaScript:** PascalCase (MiniBASICVisitor, SymbolTable)
- **Métodos/Funciones:** camelCase (visitPrograma, evaluateExpression)

### Calidad de Código
- ESLint configurado en `package.json`
- Todos los archivos deben tener docstrings JSDoc
- Tests en `test/` con nombre `sprintN.test.js`
- Commits con formato: `Sprint N: descripción breve`

### Commits y Versioning
- Versionado semántico: `MAJOR.MINOR.PATCH`
- Tag en GitHub por cada sprint completado
- Release notes en `RELEASES.md`

---

## 📈 Métricas de Éxito por Fase

| Fase | Métrica | Target |
|------|---------|--------|
| Después de Sprint 2 | Programas simples ejecutables | 100% |
| Después de Sprint 4 | Programas con flujo no lineal | 100% |
| Después de Sprint 6 | Programas interactivos | 95% |
| Después de Sprint 8 | Cobertura de test | >80% |

---

## 🔗 Referencias

- [ANTLR4 Documentation](https://antlr.org)
- [Chomsky Hierarchy](https://en.wikipedia.org/wiki/Chomsky_hierarchy)
- [BASIC Language Reference](https://www.ibm.com/support/knowledgecenter/SSB27U_6.11.0/com.ibm.zvm.v611.asms0/basalph.htm)
- [Visitor Pattern](https://en.wikipedia.org/wiki/Visitor_pattern)

---

**Última Actualización:** 2026-06-12  
**Responsable:** Equipo de Desarrollo MiniBASIC
