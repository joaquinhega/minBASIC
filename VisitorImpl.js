import MiniBASICVisitor from './MiniBASICVisitor.js';

export default class VisitorImpl extends MiniBASICVisitor {
  constructor() {
    super();
    this.tablaLineas = {}; // Diccionario { numero_linea: nodo_instruccion }
    this.memoria = {};     // Almacenamiento de variables { X: 10 }
  }

  // Aquí irán los métodos visit correspondientes a la gramática
}