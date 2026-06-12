/**
 * test/sprint2.test.js
 * Suite de pruebas para Sprint 2: Núcleo del Intérprete
 * Valida REQ-2.1, REQ-2.2, REQ-2.3, REQ-2.4
 */

import fs from 'fs';
import antlr4 from 'antlr4';
import MiniBASICLexer from '../MiniBASICLexer.js';
import MiniBASICParser from '../MiniBASICParser.js';
import VisitorImpl from '../VisitorImpl.js';
import Interpreter from '../Interpreter.js';

let testsPasados = 0;

function assert(condicion, mensaje) {
  if (!condicion) {
    throw new Error(mensaje);
  }
}

function compilarPrograma(codigo) {
  const chars = new antlr4.InputStream(codigo);
  const lexer = new MiniBASICLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new MiniBASICParser(tokens);
  parser.buildParseTrees = true;
  return parser.programa();
}

// Suprimir logs durante tests
const originalLog = console.log;
const originalError = console.error;
function suprimirLogs() {
  console.log = () => {};
  console.error = () => {};
}
function restaurarLogs() {
  console.log = originalLog;
  console.error = originalError;
}

// ============ REQ-2.1: Fase 1 - Carga en Diccionario ============
console.log("✅ REQ-2.1: Fase 1 - Carga en Diccionario");
try {
  suprimirLogs();
  const codigo = `10 X = 5\n20 Y = 10\n30 END`;
  
  const arbol = compilarPrograma(codigo);
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);
  
  restaurarLogs();
  
  const tablaLineas = Object.keys(visitor.tablaLineas).map(Number).sort((a, b) => a - b);
  assert(tablaLineas.length === 3, "Debe haber 3 líneas");
  assert(tablaLineas[0] === 10 && tablaLineas[1] === 20 && tablaLineas[2] === 30, 
    "Líneas deben estar ordenadas");
  console.log("   ✅ Diccionario de líneas cargado correctamente (3 líneas indexadas)");
  testsPasados++;
} catch (error) {
  restaurarLogs();
  console.error("   ❌", error.message);
  process.exit(1);
}

// ============ REQ-2.2: Fase 2 - Bucle de Ejecución Dinámico ============
console.log("\n✅ REQ-2.2: Fase 2 - Bucle de Ejecución Dinámico");
try {
  suprimirLogs();
  const codigo = `10 X = 5\n20 END`;
  
  const arbol = compilarPrograma(codigo);
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);
  
  const interprete = new Interpreter(visitor, 10000);
  interprete.ejecutar();
  
  restaurarLogs();
  
  assert(visitor.memoria.X === 5, "Variable X debe tener valor 5");
  console.log("   ✅ Bucle secuencial ejecutado (PC avanza en orden)");
  testsPasados++;
} catch (error) {
  restaurarLogs();
  console.error("   ❌", error.message);
  process.exit(1);
}

// ============ REQ-2.3: Evaluación de Expresiones ============
console.log("\n✅ REQ-2.3: Evaluación de Expresiones Jerárquicas");

// Suma
try {
  suprimirLogs();
  const codigo = `10 X = 5\n20 Y = 3\n30 Z = X + Y\n40 END`;
  
  const arbol = compilarPrograma(codigo);
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);
  
  const interprete = new Interpreter(visitor, 10000);
  interprete.ejecutar();
  
  restaurarLogs();
  
  assert(visitor.memoria.Z === 8, "5 + 3 debe ser 8");
  console.log("   ✅ Suma: 5 + 3 = 8");
  testsPasados++;
} catch (error) {
  restaurarLogs();
  console.error("   ❌", error.message);
  process.exit(1);
}

// Resta
try {
  suprimirLogs();
  const codigo = `10 A = 10\n20 B = 3\n30 C = A - B\n40 END`;
  
  const arbol = compilarPrograma(codigo);
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);
  
  const interprete = new Interpreter(visitor, 10000);
  interprete.ejecutar();
  
  restaurarLogs();
  
  assert(visitor.memoria.C === 7, "10 - 3 debe ser 7");
  console.log("   ✅ Resta: 10 - 3 = 7");
  testsPasados++;
} catch (error) {
  restaurarLogs();
  console.error("   ❌", error.message);
  process.exit(1);
}

// Expresiones complejas
try {
  suprimirLogs();
  const codigo = `10 X = 10 + 5 - 3\n20 END`;
  
  const arbol = compilarPrograma(codigo);
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);
  
  const interprete = new Interpreter(visitor, 10000);
  interprete.ejecutar();
  
  restaurarLogs();
  
  assert(visitor.memoria.X === 12, "10 + 5 - 3 debe ser 12");
  console.log("   ✅ Expresión compleja: 10 + 5 - 3 = 12");
  testsPasados++;
} catch (error) {
  restaurarLogs();
  console.error("   ❌", error.message);
  process.exit(1);
}

// ============ REQ-2.4: Instrucciones Obligatorias ============
console.log("\n✅ REQ-2.4: Instrucciones Obligatorias");

// Asignación
try {
  suprimirLogs();
  const codigo = `10 CONTADOR = 1\n20 CONTADOR = CONTADOR + 1\n30 END`;
  
  const arbol = compilarPrograma(codigo);
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);
  
  const interprete = new Interpreter(visitor, 10000);
  interprete.ejecutar();
  
  restaurarLogs();
  
  assert(visitor.memoria.CONTADOR === 2, "Asignación: CONTADOR debe ser 2");
  console.log("   ✅ Asignación: CONTADOR = 1 → 2");
  testsPasados++;
} catch (error) {
  restaurarLogs();
  console.error("   ❌", error.message);
  process.exit(1);
}

// GOTO
try {
  suprimirLogs();
  const codigo = `10 X = 0\n20 GOTO 40\n30 Y = 999\n40 END`;
  
  const arbol = compilarPrograma(codigo);
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);
  
  const interprete = new Interpreter(visitor, 10000);
  interprete.ejecutar();
  
  restaurarLogs();
  
  assert(visitor.memoria.X === 0, "X debe ser 0");
  assert(!("Y" in visitor.memoria), "Y no debe estar en memoria (GOTO saltó la línea 30)");
  console.log("   ✅ GOTO: Salta correctamente de línea 20 a 40");
  testsPasados++;
} catch (error) {
  restaurarLogs();
  console.error("   ❌", error.message);
  process.exit(1);
}

// END
try {
  suprimirLogs();
  const codigo = `10 PRINT "Línea 1"\n20 END\n30 X = 999\n40 END`;
  
  const arbol = compilarPrograma(codigo);
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);
  
  const interprete = new Interpreter(visitor, 10000);
  interprete.ejecutar();
  
  restaurarLogs();
  
  assert(!("X" in visitor.memoria), "X no debe estar en memoria (END detuvo en línea 20)");
  console.log("   ✅ END: Detiene correctamente la ejecución");
  testsPasados++;
} catch (error) {
  restaurarLogs();
  console.error("   ❌", error.message);
  process.exit(1);
}

// ============ VALIDACIONES DE ERROR ============
console.log("\n✅ Validaciones de Error");

// Variable no inicializada
try {
  suprimirLogs();
  const codigo = `10 PRINT X\n20 END`;
  
  const arbol = compilarPrograma(codigo);
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);
  
  const interprete = new Interpreter(visitor, 10000);
  let errorCapturado = false;
  try {
    interprete.ejecutar();
  } catch (e) {
    errorCapturado = true;
  }
  
  restaurarLogs();
  
  assert(errorCapturado, "Debe lanzar error por variable no inicializada");
  console.log("   ✅ Variable no inicializada detectada");
  testsPasados++;
} catch (error) {
  restaurarLogs();
  console.error("   ❌", error.message);
  process.exit(1);
}

// GOTO a línea inexistente
try {
  suprimirLogs();
  const codigo = `10 GOTO 999\n20 END`;
  
  const arbol = compilarPrograma(codigo);
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);
  
  const interprete = new Interpreter(visitor, 10000);
  let errorCapturado = false;
  try {
    interprete.ejecutar();
  } catch (e) {
    errorCapturado = true;
  }
  
  restaurarLogs();
  
  assert(errorCapturado, "Debe lanzar error por GOTO inválido");
  console.log("   ✅ GOTO a línea inexistente detectado");
  testsPasados++;
} catch (error) {
  restaurarLogs();
  console.error("   ❌", error.message);
  process.exit(1);
}

console.log(`\n✅ ✅ ✅ SPRINT 2 COMPLETADO ✅ ✅ ✅`);
console.log(`📊 Tests pasados: ${testsPasados}\n`);
