// Generated from MiniBASIC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniBASICVisitor from './MiniBASICVisitor.js';

const serializedATN = [4,1,19,72,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,0,1,0,1,1,1,1,1,1,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,35,8,2,1,3,1,3,1,3,1,3,1,3,1,3,5,3,43,
8,3,10,3,12,3,46,9,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,54,8,4,10,4,12,4,57,9,4,
1,5,1,5,1,5,1,5,1,5,1,5,5,5,65,8,5,10,5,12,5,68,9,5,1,6,1,6,1,6,0,3,6,8,
10,7,0,2,4,6,8,10,12,0,4,1,0,9,11,1,0,12,13,1,0,14,15,2,0,6,7,16,18,73,0,
15,1,0,0,0,2,21,1,0,0,0,4,34,1,0,0,0,6,36,1,0,0,0,8,47,1,0,0,0,10,58,1,0,
0,0,12,69,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,
0,17,18,1,0,0,0,18,19,1,0,0,0,19,20,5,0,0,1,20,1,1,0,0,0,21,22,5,17,0,0,
22,23,3,4,2,0,23,3,1,0,0,0,24,25,5,1,0,0,25,35,3,6,3,0,26,27,5,16,0,0,27,
28,5,8,0,0,28,35,3,6,3,0,29,30,5,2,0,0,30,35,5,17,0,0,31,35,5,4,0,0,32,35,
5,5,0,0,33,35,5,3,0,0,34,24,1,0,0,0,34,26,1,0,0,0,34,29,1,0,0,0,34,31,1,
0,0,0,34,32,1,0,0,0,34,33,1,0,0,0,35,5,1,0,0,0,36,37,6,3,-1,0,37,38,3,8,
4,0,38,44,1,0,0,0,39,40,10,2,0,0,40,41,7,0,0,0,41,43,3,8,4,0,42,39,1,0,0,
0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,7,1,0,0,0,46,44,1,0,0,0,47,
48,6,4,-1,0,48,49,3,10,5,0,49,55,1,0,0,0,50,51,10,2,0,0,51,52,7,1,0,0,52,
54,3,10,5,0,53,50,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,9,
1,0,0,0,57,55,1,0,0,0,58,59,6,5,-1,0,59,60,3,12,6,0,60,66,1,0,0,0,61,62,
10,2,0,0,62,63,7,2,0,0,63,65,3,12,6,0,64,61,1,0,0,0,65,68,1,0,0,0,66,64,
1,0,0,0,66,67,1,0,0,0,67,11,1,0,0,0,68,66,1,0,0,0,69,70,7,3,0,0,70,13,1,
0,0,0,5,17,34,44,55,66];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniBASICParser extends antlr4.Parser {

    static grammarFileName = "MiniBASIC.g4";
    static literalNames = [ null, "'PRINT'", "'GOTO'", "'END'", "'BEGIN'", 
                            "'ENDSCOPE'", "'TRUE'", "'FALSE'", "'='", "'=='", 
                            "'>'", "'<'", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, "PRINT", "GOTO", "END", "BEGIN", "ENDSCOPE", 
                             "TRUE", "FALSE", "IGUAL", "IGUAL_LOGICO", "MAYOR", 
                             "MENOR", "SUMA", "RESTA", "MULT", "DIV", "ID", 
                             "NUMERO", "CADENA", "WS" ];
    static ruleNames = [ "programa", "linea", "instruccion", "expresion", 
                         "aritmetica", "factor", "termino" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniBASICParser.ruleNames;
        this.literalNames = MiniBASICParser.literalNames;
        this.symbolicNames = MiniBASICParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.expresion_sempred(localctx, predIndex);
    	case 4:
    	    		return this.aritmetica_sempred(localctx, predIndex);
    	case 5:
    	    		return this.factor_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    aritmetica_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    factor_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniBASICParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.linea();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===17);
	        this.state = 19;
	        this.match(MiniBASICParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	linea() {
	    let localctx = new LineaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniBASICParser.RULE_linea);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(MiniBASICParser.NUMERO);
	        this.state = 22;
	        this.instruccion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniBASICParser.RULE_instruccion);
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.match(MiniBASICParser.PRINT);
	            this.state = 25;
	            this.expresion(0);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.match(MiniBASICParser.ID);
	            this.state = 27;
	            this.match(MiniBASICParser.IGUAL);
	            this.state = 28;
	            this.expresion(0);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 29;
	            this.match(MiniBASICParser.GOTO);
	            this.state = 30;
	            this.match(MiniBASICParser.NUMERO);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 31;
	            this.match(MiniBASICParser.BEGIN);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 32;
	            this.match(MiniBASICParser.ENDSCOPE);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 33;
	            this.match(MiniBASICParser.END);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, MiniBASICParser.RULE_expresion, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.aritmetica(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpresionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MiniBASICParser.RULE_expresion);
	                this.state = 39;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 40;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 41;
	                this.aritmetica(0); 
	            }
	            this.state = 46;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	aritmetica(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AritmeticaContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, MiniBASICParser.RULE_aritmetica, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.factor(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new AritmeticaContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MiniBASICParser.RULE_aritmetica);
	                this.state = 50;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 51;
	                _la = this._input.LA(1);
	                if(!(_la===12 || _la===13)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 52;
	                this.factor(0); 
	            }
	            this.state = 57;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	factor(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new FactorContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, MiniBASICParser.RULE_factor, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.termino();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new FactorContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MiniBASICParser.RULE_factor);
	                this.state = 61;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 62;
	                _la = this._input.LA(1);
	                if(!(_la===14 || _la===15)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 63;
	                this.termino(); 
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniBASICParser.RULE_termino);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458944) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniBASICParser.EOF = antlr4.Token.EOF;
MiniBASICParser.PRINT = 1;
MiniBASICParser.GOTO = 2;
MiniBASICParser.END = 3;
MiniBASICParser.BEGIN = 4;
MiniBASICParser.ENDSCOPE = 5;
MiniBASICParser.TRUE = 6;
MiniBASICParser.FALSE = 7;
MiniBASICParser.IGUAL = 8;
MiniBASICParser.IGUAL_LOGICO = 9;
MiniBASICParser.MAYOR = 10;
MiniBASICParser.MENOR = 11;
MiniBASICParser.SUMA = 12;
MiniBASICParser.RESTA = 13;
MiniBASICParser.MULT = 14;
MiniBASICParser.DIV = 15;
MiniBASICParser.ID = 16;
MiniBASICParser.NUMERO = 17;
MiniBASICParser.CADENA = 18;
MiniBASICParser.WS = 19;

MiniBASICParser.RULE_programa = 0;
MiniBASICParser.RULE_linea = 1;
MiniBASICParser.RULE_instruccion = 2;
MiniBASICParser.RULE_expresion = 3;
MiniBASICParser.RULE_aritmetica = 4;
MiniBASICParser.RULE_factor = 5;
MiniBASICParser.RULE_termino = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniBASICParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(MiniBASICParser.EOF, 0);
	};

	linea = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineaContext);
	    } else {
	        return this.getTypedRuleContext(LineaContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiniBASICVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniBASICParser.RULE_linea;
    }

	NUMERO() {
	    return this.getToken(MiniBASICParser.NUMERO, 0);
	};

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniBASICVisitor ) {
	        return visitor.visitLinea(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniBASICParser.RULE_instruccion;
    }

	PRINT() {
	    return this.getToken(MiniBASICParser.PRINT, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	ID() {
	    return this.getToken(MiniBASICParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(MiniBASICParser.IGUAL, 0);
	};

	GOTO() {
	    return this.getToken(MiniBASICParser.GOTO, 0);
	};

	NUMERO() {
	    return this.getToken(MiniBASICParser.NUMERO, 0);
	};

	BEGIN() {
	    return this.getToken(MiniBASICParser.BEGIN, 0);
	};

	ENDSCOPE() {
	    return this.getToken(MiniBASICParser.ENDSCOPE, 0);
	};

	END() {
	    return this.getToken(MiniBASICParser.END, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniBASICVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniBASICParser.RULE_expresion;
    }

	aritmetica() {
	    return this.getTypedRuleContext(AritmeticaContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	MAYOR() {
	    return this.getToken(MiniBASICParser.MAYOR, 0);
	};

	MENOR() {
	    return this.getToken(MiniBASICParser.MENOR, 0);
	};

	IGUAL_LOGICO() {
	    return this.getToken(MiniBASICParser.IGUAL_LOGICO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniBASICVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AritmeticaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniBASICParser.RULE_aritmetica;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	aritmetica() {
	    return this.getTypedRuleContext(AritmeticaContext,0);
	};

	SUMA() {
	    return this.getToken(MiniBASICParser.SUMA, 0);
	};

	RESTA() {
	    return this.getToken(MiniBASICParser.RESTA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniBASICVisitor ) {
	        return visitor.visitAritmetica(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniBASICParser.RULE_factor;
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	MULT() {
	    return this.getToken(MiniBASICParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(MiniBASICParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniBASICVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniBASICParser.RULE_termino;
    }

	ID() {
	    return this.getToken(MiniBASICParser.ID, 0);
	};

	NUMERO() {
	    return this.getToken(MiniBASICParser.NUMERO, 0);
	};

	CADENA() {
	    return this.getToken(MiniBASICParser.CADENA, 0);
	};

	TRUE() {
	    return this.getToken(MiniBASICParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(MiniBASICParser.FALSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniBASICVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniBASICParser.ProgramaContext = ProgramaContext; 
MiniBASICParser.LineaContext = LineaContext; 
MiniBASICParser.InstruccionContext = InstruccionContext; 
MiniBASICParser.ExpresionContext = ExpresionContext; 
MiniBASICParser.AritmeticaContext = AritmeticaContext; 
MiniBASICParser.FactorContext = FactorContext; 
MiniBASICParser.TerminoContext = TerminoContext; 
