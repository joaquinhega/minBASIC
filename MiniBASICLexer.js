// Generated from MiniBASIC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,70,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,0,1,
1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,5,6,45,
8,6,10,6,12,6,48,9,6,1,7,4,7,51,8,7,11,7,12,7,52,1,8,1,8,5,8,57,8,8,10,8,
12,8,60,9,8,1,8,1,8,1,9,4,9,65,8,9,11,9,12,9,66,1,9,1,9,0,0,10,1,1,3,2,5,
3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,1,0,5,1,0,65,90,2,0,48,57,65,90,1,0,
48,57,3,0,10,10,13,13,34,34,3,0,9,10,13,13,32,32,73,0,1,1,0,0,0,0,3,1,0,
0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,1,21,1,0,0,0,3,27,1,0,0,0,5,32,1,0,0,0,7,
36,1,0,0,0,9,38,1,0,0,0,11,40,1,0,0,0,13,42,1,0,0,0,15,50,1,0,0,0,17,54,
1,0,0,0,19,64,1,0,0,0,21,22,5,80,0,0,22,23,5,82,0,0,23,24,5,73,0,0,24,25,
5,78,0,0,25,26,5,84,0,0,26,2,1,0,0,0,27,28,5,71,0,0,28,29,5,79,0,0,29,30,
5,84,0,0,30,31,5,79,0,0,31,4,1,0,0,0,32,33,5,69,0,0,33,34,5,78,0,0,34,35,
5,68,0,0,35,6,1,0,0,0,36,37,5,61,0,0,37,8,1,0,0,0,38,39,5,43,0,0,39,10,1,
0,0,0,40,41,5,45,0,0,41,12,1,0,0,0,42,46,7,0,0,0,43,45,7,1,0,0,44,43,1,0,
0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,14,1,0,0,0,48,46,1,0,0,
0,49,51,7,2,0,0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,
53,16,1,0,0,0,54,58,5,34,0,0,55,57,8,3,0,0,56,55,1,0,0,0,57,60,1,0,0,0,58,
56,1,0,0,0,58,59,1,0,0,0,59,61,1,0,0,0,60,58,1,0,0,0,61,62,5,34,0,0,62,18,
1,0,0,0,63,65,7,4,0,0,64,63,1,0,0,0,65,66,1,0,0,0,66,64,1,0,0,0,66,67,1,
0,0,0,67,68,1,0,0,0,68,69,6,9,0,0,69,20,1,0,0,0,5,0,46,52,58,66,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MiniBASICLexer extends antlr4.Lexer {

    static grammarFileName = "MiniBASIC.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'PRINT'", "'GOTO'", "'END'", "'='", "'+'", 
                         "'-'" ];
	static symbolicNames = [ null, "PRINT", "GOTO", "END", "IGUAL", "SUMA", 
                          "RESTA", "ID", "NUMERO", "CADENA", "WS" ];
	static ruleNames = [ "PRINT", "GOTO", "END", "IGUAL", "SUMA", "RESTA", 
                      "ID", "NUMERO", "CADENA", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MiniBASICLexer.EOF = antlr4.Token.EOF;
MiniBASICLexer.PRINT = 1;
MiniBASICLexer.GOTO = 2;
MiniBASICLexer.END = 3;
MiniBASICLexer.IGUAL = 4;
MiniBASICLexer.SUMA = 5;
MiniBASICLexer.RESTA = 6;
MiniBASICLexer.ID = 7;
MiniBASICLexer.NUMERO = 8;
MiniBASICLexer.CADENA = 9;
MiniBASICLexer.WS = 10;



