import { Constructor } from '../Utils/Abstract/Factory';
import { ISymbol } from './Abstract/ISymbol';
import { ISymbolFactory } from './Abstract/ISymbolFactory';


export class SymbolFactory implements ISymbolFactory {

    public constructor(){

    }

    create(type : string): ISymbol {
        return undefined;
    }
}

