import { ILocatedSymbol } from "./Abstract/ILocatedSymbol";
import { SymbolData } from "./SymbolData";

export class MarkedSymbol implements ILocatedSymbol {
    private symbol : SymbolData;
    private row : number;
    private column : number;
    private isMarked : boolean;


    public get Type() : string {
        return this.symbol.type;
    }

    public get Id() : number {  
        return this.symbol.id;
    }

    public get Row() : number {  
        return this.row;
    }

    public get Column() : number {  
        return this.column;
    }

    public get IsMarked(): boolean{
        return this.isMarked;
    }


    public constructor(block : SymbolData, row : number, column : number){
        this.symbol = block;
        this.row = row;
        this.column = column;

        this.isMarked = false;
    }

    public mark(){
        this.isMarked = true;
    }
}


