import fs from 'fs';
import antlr4 from 'antlr4';
import MiniBASICLexer from './MiniBASICLexer.js';
import MiniBASICParser from './MiniBASICParser.js';
import VisitorImpl from './VisitorImpl.js';
import Interpreter from './Interpreter.js';

try {
  const codigoFuente = fs.readFileSync('input.txt', 'utf8');

  // Fase léxica y sintáctica (ANTLR4)
  const chars = new antlr4.InputStream(codigoFuente);
  const lexer = new MiniBASICLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new MiniBASICParser(tokens);
  parser.buildParseTrees = true;

  const arbol = parser.programa();
  
  // Crear visitor e invocar Fase 1 (Carga del Diccionario)
  const visitor = new VisitorImpl();
  visitor.visitPrograma(arbol);  // REQ-2.1

  // Crear intérprete e invocar Fase 2 (Bucle de Ejecución)
  const interprete = new Interpreter(visitor);
  interprete.ejecutar();  // REQ-2.2

} catch (error) {
  console.error(`\n❌ ERROR: ${error.message}`);
  process.exit(1);
}