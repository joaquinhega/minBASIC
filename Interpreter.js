/**
 * Interpreter.js
 * Motor de ejecución secuencial del intérprete MiniBASIC
 * Gestiona el Program Counter (PC), contexto global y bucle de ejecución
 */

export default class Interpreter {
  /**
   * Constructor del intérprete
   * @param {VisitorImpl} visitor - Instancia del visitor que contiene tablaLineas y memoria
   */
  constructor(visitor, maxIteraciones = 10000) {
    this.visitor = visitor;
    this.tablaLineas = visitor.tablaLineas;      // { numero_linea: nodoInstruccion }
    this.memoria = visitor.memoria;               // { variable: valor }
    this.lineasOrdenadas = [];                     // Array ordenado de números de línea
    this.pc = 0;                                   // Program Counter (índice en lineasOrdenadas)
    this.ejecutando = true;
    this.ultimoError = null;
    this.iteraciones = 0;                          // Contador de iteraciones
    this.maxIteraciones = maxIteraciones;          // Límite para detectar ciclos infinitos
  }

  /**
   * Inicia la ejecución del programa
   * Pre-requisito: visitPrograma ya fue invocado para cargar tablaLineas
   */
  ejecutar() {
    try {
      // Obtener líneas ordenadas ascendentemente
      this.lineasOrdenadas = Object.keys(this.tablaLineas)
        .map(Number)
        .sort((a, b) => a - b);

      if (this.lineasOrdenadas.length === 0) {
        console.log("⚠️  Programa vacío");
        return;
      }

      // Bucle principal de ejecución
      while (this.pc < this.lineasOrdenadas.length && this.ejecutando) {
        this.iteraciones++;
        if (this.iteraciones > this.maxIteraciones) {
          throw new Error(`Ciclo infinito detectado (>  ${this.maxIteraciones} iteraciones)`);
        }

        const numeroLinea = this.lineasOrdenadas[this.pc];
        const nodoInstruccion = this.tablaLineas[numeroLinea];

        try {
          this.visitor.ejecutarInstruccion(nodoInstruccion, numeroLinea);
        } catch (error) {
          if (error.message === "END") {
            // Instrucción END encontrada: termina el programa normalmente
            this.ejecutando = false;
            break;
          } else if (error.message.startsWith("GOTO:")) {
            // Instrucción GOTO: cambiar el PC
            const destino = parseInt(error.message.substring(5));
            this.pc = this.lineasOrdenadas.indexOf(destino);
            if (this.pc === -1) {
              throw new Error(`❌ GOTO: Número de línea ${destino} no existe`);
            }
            continue;
          } else {
            // Error en la ejecución
            throw error;
          }
        }

        // Avanzar al siguiente comando (si no fue un GOTO)
        this.pc++;
      }

      console.log("✅ Programa finalizado correctamente");
    } catch (error) {
      this.ultimoError = error;
      console.error(`\n❌ ERROR EN EJECUCIÓN (línea ${this.lineasOrdenadas[this.pc] || '?'}): ${error.message}`);
      process.exit(1);
    }
  }

  /**
   * Obtiene el estado actual de la memoria
   * @returns {Object} Diccionario de variables y sus valores
   */
  obtenerEstado() {
    return { ...this.memoria };
  }

  /**
   * Detiene la ejecución del programa
   */
  detener() {
    this.ejecutando = false;
  }
}
