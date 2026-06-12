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
    | END
    ;

expresion
    : expresion (SUMA | RESTA) termino
    | termino
    ;

termino
    : ID
    | NUMERO
    | CADENA
    ;

// ============ REGLAS DEL LEXER ============
PRINT       : 'PRINT';
GOTO        : 'GOTO';
END         : 'END';
IGUAL       : '=';
SUMA        : '+';
RESTA       : '-';

ID          : [A-Z][A-Z0-9]*;
NUMERO      : [0-9]+;
CADENA      : '"' (~["\r\n])* '"';

WS          : [ \t\r\n]+ -> skip;