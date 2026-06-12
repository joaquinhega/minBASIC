/**
 * VisitorImpl.js
 * Implementación del Visitor pattern para MiniBASIC
 * Realiza dos fases: Carga (visitPrograma) e Interpretación (ejecutarInstruccion)
 */

import MiniBASICVisitor from './MiniBASICVisitor.js';

export default class VisitorImpl extends MiniBASICVisitor {
  constructor() {
    super();
    this.tablaLineas = {};  // Fase 1: Diccionario { numero_linea: nodoInstruccion }
    this.memoria = {};      // Variables { nombre: valor }
  }

  /**
   * FASE 1: Carga del Diccionario
   * Visita el programa completo y puebla tablaLineas con índices de líneas
   * No ejecuta ninguna instrucción en esta fase
   */
  visitPrograma(ctx) {
    // ctx.linea() retorna un array de todas las líneas del programa
    const lineas = ctx.linea();

    lineas.forEach((linea) => {
      const numeroLinea = parseInt(linea.NUMERO().getText());
      const instruccion = linea.instruccion();

      // Guardar referencia del nodo de instrucción indexado por número de línea
      this.tablaLineas[numeroLinea] = instruccion;
    });

    console.log(`✅ Fase 1 completada: ${Object.keys(this.tablaLineas).length} líneas cargadas`);
    return this.tablaLineas;
  }

  /**
   * FASE 2: Ejecuta una instrucción específica
   * Llamado repetidamente durante el bucle de ejecución del Interpreter
   */
  ejecutarInstruccion(nodoInstruccion, numeroLinea) {
    // Determinar tipo de instrucción y ejecutar
    if (nodoInstruccion.PRINT()) {
      this.ejecutarPrint(nodoInstruccion);
    } else if (nodoInstruccion.GOTO()) {
      this.ejecutarGoto(nodoInstruccion);
    } else if (nodoInstruccion.END()) {
      throw new Error("END");
    } else if (nodoInstruccion.ID()) {
      // Asignación: ID IGUAL expresion
      this.ejecutarAsignacion(nodoInstruccion);
    }
  }

  /**
   * Ejecuta PRINT expresion
   * Evalúa la expresión y la imprime en consola
   */
  ejecutarPrint(ctx) {
    const valor = this.evaluarExpresion(ctx.expresion());
    console.log(valor);
  }

  /**
   * Ejecuta ID IGUAL expresion
   * Asigna el valor de la expresión a la variable
   */
  ejecutarAsignacion(ctx) {
    const nombreVariable = ctx.ID().getText();
    const valor = this.evaluarExpresion(ctx.expresion());
    this.memoria[nombreVariable] = valor;
  }

  /**
   * Ejecuta GOTO numero_linea
   * Lanza excepción para que el Interpreter maneje el salto
   */
  ejecutarGoto(ctx) {
    const numeroLinea = parseInt(ctx.NUMERO().getText());
    throw new Error(`GOTO:${numeroLinea}`);
  }

  /**
   * Evalúa una expresión aritmética recursivamente
   * Respeta jerarquía: expresion -> (expresion OP termino) | termino
   */
  evaluarExpresion(ctx) {
    // Base case: si solo hay un término sin operadores
    if (!ctx.expresion()) {
      return this.evaluarTermino(ctx.termino());
    }

    // Caso recursivo: expresion (SUMA | RESTA) termino
    const izquierda = this.evaluarExpresion(ctx.expresion());
    const derecha = this.evaluarTermino(ctx.termino());

    if (ctx.SUMA()) {
      return izquierda + derecha;
    } else if (ctx.RESTA()) {
      return izquierda - derecha;
    }

    return izquierda;
  }

  /**
   * Evalúa un término atómico: ID, NUMERO o CADENA
   */
  evaluarTermino(ctx) {
    if (ctx.ID()) {
      const nombreVariable = ctx.ID().getText();
      if (!(nombreVariable in this.memoria)) {
        throw new Error(`❌ Variable no inicializada: ${nombreVariable}`);
      }
      return this.memoria[nombreVariable];
    } else if (ctx.NUMERO()) {
      return parseInt(ctx.NUMERO().getText());
    } else if (ctx.CADENA()) {
      // Remover comillas y retornar string
      let cadena = ctx.CADENA().getText();
      return cadena.substring(1, cadena.length - 1);
    }
    throw new Error("❌ Término inválido");
  }

  /**
   * Obtiene estado actual de la memoria
   */
  obtenerMemoria() {
    return { ...this.memoria };
  }

  /**
   * Limpia la memoria (útil para tests)
   */
  limpiar() {
    this.tablaLineas = {};
    this.memoria = {};
  }
}