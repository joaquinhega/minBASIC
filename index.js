import fs from 'fs';
import antlr4 from 'antlr4';
import MiniBASICLexer from './MiniBASICLexer.js';
import MiniBASICParser from './MiniBASICParser.js';
import VisitorImpl from './VisitorImpl.js';

try {
  const codigoFuente = fs.readFileSync('input.txt', 'utf8');

  const chars = new antlr4.InputStream(codigoFuente);
  const lexer = new MiniBASICLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new MiniBASICParser(tokens);
  parser.buildParseTrees = true;

  const arbol = parser.programa();
  const interprete = new VisitorImpl();

  console.log("🟢 Estructura del proyecto lista. Esperando lógica del Sprint 1...");

} catch (error) {
  console.error(`\n❌ ERROR: ${error.message}`);
  process.exit(1);
}