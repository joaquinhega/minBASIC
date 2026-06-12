// 3. VisitorImpl.js
/**
 * VisitorImpl.js
 * Implementación del Visitor pattern para MiniBASIC
 * Realiza las fases de Carga estática e Interpretación Semántica Dinámica
 */

import MiniBASICVisitor from './MiniBASICVisitor.js';
import SymbolTable from './SymbolTable.js';

export default class VisitorImpl extends MiniBASICVisitor {
  constructor() {
    super();
    this.tablaLineas = {};
    this.symbolTable = new SymbolTable();
  }

  /**
   * FASE 1: Carga en Diccionario
   */
  visitPrograma(ctx) {
    const lineas = ctx.linea();
    lineas.forEach((linea) => {
      const numeroLinea = parseInt(linea.NUMERO().getText());
      this.tablaLineas[numeroLinea] = linea.instruccion();
    });
    return this.tablaLineas;
  }

  /**
   * FASE 2: Enrutador de ejecución
   */
  ejecutarInstruccion(nodoInstruccion, numeroLinea) {
    if (nodoInstruccion.PRINT()) this.ejecutarPrint(nodoInstruccion);
    else if (nodoInstruccion.GOTO()) this.ejecutarGoto(nodoInstruccion);
    else if (nodoInstruccion.END()) throw new Error("END");
    else if (nodoInstruccion.BEGIN()) this.symbolTable.pushScope();
    else if (nodoInstruccion.ENDSCOPE()) this.symbolTable.popScope();
    else if (nodoInstruccion.ID()) this.ejecutarAsignacion(nodoInstruccion);
  }

  ejecutarPrint(ctx) {
    let valor = this.evaluarExpresion(ctx.expresion());
    console.log(`> ${valor}`);
  }

  ejecutarAsignacion(ctx) {
    const nombreVariable = ctx.ID().getText();
    const valor = this.evaluarExpresion(ctx.expresion());
    this.symbolTable.set(nombreVariable, valor);
  }

  ejecutarGoto(ctx) {
    const numeroLinea = parseInt(ctx.NUMERO().getText());
    throw new Error(`GOTO:${numeroLinea}`);
  }

  /**
   * EVALUACIÓN SEMÁNTICA JERÁRQUICA
   */
  
  // 1. Nivel Lógico / Relacional
  evaluarExpresion(ctx) {
    // Si no hay operaciones relacionales, pasamos al nivel aritmético
    if (!ctx.expresion()) {
      return this.evaluarAritmetica(ctx.aritmetica());
    }

    const izquierda = this.evaluarExpresion(ctx.expresion());
    const derecha = this.evaluarAritmetica(ctx.aritmetica());

    if (ctx.MAYOR()) return this.symbolTable.compare(izquierda, derecha, '>');
    if (ctx.MENOR()) return this.symbolTable.compare(izquierda, derecha, '<');
    if (ctx.IGUAL_LOGICO()) return this.symbolTable.compare(izquierda, derecha, '==');
    
    return izquierda;
  }

  // 2. Nivel Aritmético / Concatenación
  evaluarAritmetica(ctx) {
    if (!ctx.aritmetica()) {
      return this.evaluarTermino(ctx.termino());
    }

    const izquierda = this.evaluarAritmetica(ctx.aritmetica());
    const derecha = this.evaluarTermino(ctx.termino());

    if (ctx.SUMA()) {
      // Delegamos a la tabla de símbolos para soportar coerción (suma vs concatenación)
      return this.symbolTable.addWithCoercion(izquierda, derecha);
    }
    
    if (ctx.RESTA()) {
      return izquierda - derecha;
    }

    return izquierda;
  }

  // 3. Nivel Atómico (Terminales)
  evaluarTermino(ctx) {
    if (ctx.ID()) {
      return this.symbolTable.get(ctx.ID().getText());
    } 
    if (ctx.NUMERO()) {
      return parseInt(ctx.NUMERO().getText());
    } 
    if (ctx.TRUE()) {
      return true;
    }
    if (ctx.FALSE()) {
      return false;
    }
    if (ctx.CADENA()) {
      let cadena = ctx.CADENA().getText();
      return cadena.substring(1, cadena.length - 1);
    }
    
    throw new Error("❌ Término atómico inválido o no soportado.");
  }

  obtenerMemoria() {
    return this.symbolTable.obtenerEstadoGlobal();
  }

  limpiar() {
    this.tablaLineas = {};
    this.symbolTable.limpiar();
  }
}