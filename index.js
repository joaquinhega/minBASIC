import fs from 'fs';
import antlr4 from 'antlr4';
import MiniBASICLexer from './MiniBASICLexer.js';
import MiniBASICParser from './MiniBASICParser.js';
import VisitorImpl from './VisitorImpl.js';
import Interpreter from './Interpreter.js';

try {
  // 1. Leer el código fuente
  const codigoFuente = fs.readFileSync('input.txt', 'utf8');

  // 2. Pipeline de ANTLR
  const chars = new antlr4.InputStream(codigoFuente);
  const lexer = new MiniBASICLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new MiniBASICParser(tokens);
  parser.buildParseTrees = true;

  // 3. Generar AST
  const arbol = parser.programa();

  // 4. FASE 1: Carga en el Visitor
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);

  // 5. FASE 2: Ejecución Dinámica
  const interpreter = new Interpreter(visitor);
  interpreter.ejecutar();

  // 6. Mostrar el estado global que sobrevivió
  console.log("\n--- Estado Final de la Memoria Global ---");
  console.log(interpreter.obtenerEstado());

} catch (error) {
  console.error(`\n❌ ERROR FATAL: ${error.message}`);
  process.exit(1);
}