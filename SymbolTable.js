// 2. SymbolTable.js
/**
 * SymbolTable.js
 * Gestor centralizado de variables, scopes y tipos de datos para MiniBASIC.
 * Implementa los requerimientos del Sprint 3: Stack de scopes, coerción automática,
 * validación de identificadores y operaciones de tipado.
 */

export const DataType = {
  INTEGER: 'INTEGER',
  STRING: 'STRING',
  BOOLEAN: 'BOOLEAN',
  UNKNOWN: 'UNKNOWN'
};

export default class SymbolTable {
  constructor() {
    // REQ-3.4: Stack de scopes. El índice 0 es el contexto Global.
    // Usamos Map para preservar el orden y manejar mejor las claves.
    this.scopes = [new Map()];
  }

  /**
   * REQ-3.4: Abre un nuevo contexto local (aislamiento de bloque).
   */
  pushScope() {
    this.scopes.push(new Map());
  }

  /**
   * REQ-3.4: Cierra el contexto local actual y destruye sus variables.
   */
  popScope() {
    if (this.scopes.length > 1) {
      this.scopes.pop();
    } else {
      throw new Error("❌ Error de Scope: Intento de cerrar el scope global (ENDSCOPE sin BEGIN previo).");
    }
  }

  /**
   * REQ-3.1 & REQ-3.2: Asigna un valor a una variable infiriendo su tipo.
   * Si la variable existe en un scope superior, la actualiza. 
   * Si no, la crea en el scope local actual.
   * @param {string} name - Nombre del identificador.
   * @param {any} rawValue - Valor a almacenar.
   */
  set(name, rawValue) {
    const type = this._inferType(rawValue);
    const variableRecord = { type: type, value: rawValue };

    // Buscar si ya está definida en algún scope existente (de local a global)
    for (let i = this.scopes.length - 1; i >= 0; i--) {
      if (this.scopes[i].has(name)) {
        this.scopes[i].set(name, variableRecord);
        return;
      }
    }

    // Si no existe, se define en el scope actual (top del stack)
    this.scopes[this.scopes.length - 1].set(name, variableRecord);
  }

  /**
   * REQ-3.3: Recupera el valor de una variable, buscando desde el scope local al global.
   * @param {string} name - Nombre de la variable.
   * @returns {any} - El valor almacenado.
   */
  get(name) {
    for (let i = this.scopes.length - 1; i >= 0; i--) {
      if (this.scopes[i].has(name)) {
        return this.scopes[i].get(name).value;
      }
    }
    throw new Error(`❌ Error de Referencia: La variable '${name}' no ha sido inicializada.`);
  }

  /**
   * Obtiene el tipo de dato registrado para una variable.
   */
  getType(name) {
    for (let i = this.scopes.length - 1; i >= 0; i--) {
      if (this.scopes[i].has(name)) {
        return this.scopes[i].get(name).type;
      }
    }
    throw new Error(`❌ Error de Referencia: La variable '${name}' no existe.`);
  }

  /**
   * REQ-3.5: Realiza una suma segura con coerción automática (Aritmética o Concatenación).
   */
  addWithCoercion(left, right) {
    const typeL = this._inferType(left);
    const typeR = this._inferType(right);

    // Si ambos son números, suma aritmética
    if (typeL === DataType.INTEGER && typeR === DataType.INTEGER) {
      return left + right;
    }
    
    // Si alguno es string, coerción automática a concatenación de strings
    return String(left) + String(right);
  }

  /**
   * REQ-3.5: Realiza comparaciones con coerción de tipos.
   */
  compare(left, right, operator) {
    let valL = left;
    let valR = right;

    // Coerción a números si los tipos difieren pero son convertibles
    if (this._inferType(left) !== this._inferType(right)) {
      if (!isNaN(left) && !isNaN(right)) {
        valL = Number(left);
        valR = Number(right);
      } else {
        valL = String(left);
        valR = String(right);
      }
    }

    switch (operator) {
      case '==': return valL === valR;
      case '>': return valL > valR;
      case '<': return valL < valR;
      default: throw new Error(`Operador relacional desconocido: ${operator}`);
    }
  }

  /**
   * Infiere el tipo de dato primitivo de MiniBASIC.
   * @private
   */
  _inferType(value) {
    if (typeof value === 'number' && Number.isInteger(value)) {
      return DataType.INTEGER;
    }
    if (typeof value === 'string') {
      return DataType.STRING;
    }
    if (typeof value === 'boolean') {
      return DataType.BOOLEAN;
    }
    return DataType.UNKNOWN;
  }

  /**
   * Exporta el estado del scope global (para testing o final del programa).
   */
  obtenerEstadoGlobal() {
    const estado = {};
    const globalScope = this.scopes[0];
    for (let [key, record] of globalScope.entries()) {
      estado[key] = record.value;
    }
    return estado;
  }

  /**
   * Reinicia por completo la tabla de símbolos.
   */
  limpiar() {
    this.scopes = [new Map()];
  }
}