// 4. Interpreter.js
/**
 * Interpreter.js
 * Motor de ejecución secuencial y dinámico del intérprete MiniBASIC.
 * Gestiona el Program Counter (PC), el ciclo Fetch-Execute y las excepciones de control.
 */

export default class Interpreter {
  constructor(visitor, maxIteraciones = 10000) {
    this.visitor = visitor;
    this.tablaLineas = visitor.tablaLineas;
    this.lineasOrdenadas = [];
    this.pc = 0;
    this.ejecutando = true;
    this.ultimoError = null;
    this.iteraciones = 0;
    this.maxIteraciones = maxIteraciones;
  }

  ejecutar() {
    try {
      this.lineasOrdenadas = Object.keys(this.tablaLineas)
        .map(Number)
        .sort((a, b) => a - b);

      if (this.lineasOrdenadas.length === 0) {
        console.log("⚠️ Programa vacío. Nada que ejecutar.");
        return;
      }

      while (this.pc < this.lineasOrdenadas.length && this.ejecutando) {
        this.iteraciones++;
        if (this.iteraciones > this.maxIteraciones) {
          throw new Error(`Ciclo infinito detectado (Excedidas las ${this.maxIteraciones} iteraciones).`);
        }

        const numeroLinea = this.lineasOrdenadas[this.pc];
        const nodoInstruccion = this.tablaLineas[numeroLinea];

        try {
          this.visitor.ejecutarInstruccion(nodoInstruccion, numeroLinea);
        } catch (error) {
          if (error.message === "END") {
            this.ejecutando = false;
            break;
          } else if (error.message.startsWith("GOTO:")) {
            const destino = parseInt(error.message.substring(5));
            this.pc = this.lineasOrdenadas.indexOf(destino);
            if (this.pc === -1) {
              throw new Error(`Error de Salto Dinámico: La línea de destino GOTO ${destino} no existe.`);
            }
            continue; 
          } else {
            throw error; 
          }
        }

        this.pc++;
      }

      console.log("\n✅ Ejecución finalizada correctamente.");
    } catch (error) {
      this.ultimoError = error;
      console.error(`\n❌ ERROR FATAL EN EJECUCIÓN (Línea ${this.lineasOrdenadas[this.pc] || 'Desconocida'}): ${error.message}`);
      process.exit(1);
    }
  }

  obtenerEstado() {
    return this.visitor.obtenerMemoria();
  }

  detener() {
    this.ejecutando = false;
  }
}