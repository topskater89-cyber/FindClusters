import { Prefab, Node, instantiate } from 'cc';
import { ISymbol } from './Abstract/ISymbol';
import { ISymbolFactory } from './Abstract/ISymbolFactory';
import { Symbol } from './Symbol';


export class SymbolFactory implements ISymbolFactory {
    private symbols : Map<string, Prefab> = new Map<string, Prefab>;
    private container : Node;

    public constructor(symbols : Prefab[], container : Node){
        this.container = container;

        for(let i = 0; i < symbols.length; i++){
            const symbol = symbols[i].data.getComponent(Symbol);
            
            this.symbols.set(symbol.type, symbols[i]);
        }
    }

    create(type : string): ISymbol {
        const node = instantiate(this.symbols.get(type));
        const symbol = node.getComponent(Symbol);

        this.container.addChild(node);
        node.setPosition(0,0);

        return symbol;
    }
}

