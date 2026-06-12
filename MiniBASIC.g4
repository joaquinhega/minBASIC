// 1. MiniBASIC.g4
grammar MiniBASIC;

// ============ REGLAS DEL PARSER ============
programa
    : linea+ EOF
    ;

linea
    : NUMERO instruccion
    ;

instruccion
    : PRINT expresion
    | ID IGUAL expresion
    | GOTO NUMERO
    | BEGIN
    | ENDSCOPE
    | END
    ;

// Expresiones relacionales (mayor precedencia para la aritmética)
expresion
    : expresion (MAYOR | MENOR | IGUAL_LOGICO) aritmetica
    | aritmetica
    ;

// Aritmética básica
aritmetica
    : aritmetica (SUMA | RESTA) termino
    | termino
    ;

termino
    : ID
    | NUMERO
    | CADENA
    | TRUE
    | FALSE
    ;

// ============ REGLAS DEL LEXER ============
PRINT       : 'PRINT';
GOTO        : 'GOTO';
END         : 'END';
BEGIN       : 'BEGIN';
ENDSCOPE    : 'ENDSCOPE';

TRUE        : 'TRUE';
FALSE       : 'FALSE';

IGUAL       : '=';
IGUAL_LOGICO: '==';
MAYOR       : '>';
MENOR       : '<';
SUMA        : '+';
RESTA       : '-';

// Identificadores y literales
ID          : [A-Z][A-Z0-9]*;
NUMERO      : [0-9]+;
CADENA      : '"' (~["\r\n])* '"';

WS          : [ \t\r\n]+ -> skip;