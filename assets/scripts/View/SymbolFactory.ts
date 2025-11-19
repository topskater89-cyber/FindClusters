import { Prefab, Node} from 'cc';
import { ISymbol } from './Abstract/ISymbol';
import { ISymbolFactory } from './Abstract/ISymbolFactory';


export class SymbolFactory implements ISymbolFactory {
    private symbols : Prefab[];
    private container : Node;

    public constructor(symbols : Prefab[], sceneContainer : Node){

    }

    create(type : string): ISymbol {
        return undefined;
    }
}

