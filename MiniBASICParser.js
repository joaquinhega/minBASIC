// Generated from MiniBASIC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniBASICVisitor from './MiniBASICVisitor.js';

const serializedATN = [4,1,10,44,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,3,2,29,8,2,1,3,1,3,1,3,1,3,1,3,1,3,5,3,37,8,3,10,3,12,3,40,9,3,1,
4,1,4,1,4,0,1,6,5,0,2,4,6,8,0,2,1,0,5,6,1,0,7,9,43,0,11,1,0,0,0,2,17,1,0,
0,0,4,28,1,0,0,0,6,30,1,0,0,0,8,41,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,
13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,15,1,0,0,0,15,16,5,0,0,1,16,1,
1,0,0,0,17,18,5,8,0,0,18,19,3,4,2,0,19,3,1,0,0,0,20,21,5,1,0,0,21,29,3,6,
3,0,22,23,5,7,0,0,23,24,5,4,0,0,24,29,3,6,3,0,25,26,5,2,0,0,26,29,5,8,0,
0,27,29,5,3,0,0,28,20,1,0,0,0,28,22,1,0,0,0,28,25,1,0,0,0,28,27,1,0,0,0,
29,5,1,0,0,0,30,31,6,3,-1,0,31,32,3,8,4,0,32,38,1,0,0,0,33,34,10,2,0,0,34,
35,7,0,0,0,35,37,3,8,4,0,36,33,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,
1,0,0,0,39,7,1,0,0,0,40,38,1,0,0,0,41,42,7,1,0,0,42,9,1,0,0,0,3,13,28,38];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniBASICParser extends antlr4.Parser {

    static grammarFileName = "MiniBASIC.g4";
    static literalNames = [ null, "'PRINT'", "'GOTO'", "'END'", "'='", "'+'", 
                            "'-'" ];
    static symbolicNames = [ null, "PRINT", "GOTO", "END", "IGUAL", "SUMA", 
                             "RESTA", "ID", "NUMERO", "CADENA", "WS" ];
    static ruleNames = [ "programa", "linea", "instruccion", "expresion", 
                         "termino" ];

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




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniBASICParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.linea();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===8);
	        this.state = 15;
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
	        this.state = 17;
	        this.match(MiniBASICParser.NUMERO);
	        this.state = 18;
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
	        this.state = 28;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.match(MiniBASICParser.PRINT);
	            this.state = 21;
	            this.expresion(0);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.match(MiniBASICParser.ID);
	            this.state = 23;
	            this.match(MiniBASICParser.IGUAL);
	            this.state = 24;
	            this.expresion(0);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            this.match(MiniBASICParser.GOTO);
	            this.state = 26;
	            this.match(MiniBASICParser.NUMERO);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 27;
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
	        this.state = 31;
	        this.termino();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 38;
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
	                this.state = 33;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 34;
	                _la = this._input.LA(1);
	                if(!(_la===5 || _la===6)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 35;
	                this.termino(); 
	            }
	            this.state = 40;
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



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniBASICParser.RULE_termino);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 896) !== 0))) {
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
MiniBASICParser.IGUAL = 4;
MiniBASICParser.SUMA = 5;
MiniBASICParser.RESTA = 6;
MiniBASICParser.ID = 7;
MiniBASICParser.NUMERO = 8;
MiniBASICParser.CADENA = 9;
MiniBASICParser.WS = 10;

MiniBASICParser.RULE_programa = 0;
MiniBASICParser.RULE_linea = 1;
MiniBASICParser.RULE_instruccion = 2;
MiniBASICParser.RULE_expresion = 3;
MiniBASICParser.RULE_termino = 4;

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

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	SUMA() {
	    return this.getToken(MiniBASICParser.SUMA, 0);
	};

	RESTA() {
	    return this.getToken(MiniBASICParser.RESTA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniBASICVisitor ) {
	        return visitor.visitExpresion(this);
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
MiniBASICParser.TerminoContext = TerminoContext; 
