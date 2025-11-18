import { SymbolData } from "./SymbolData";

export class MarkedBlock {
    private block : SymbolData;
    private row : number;
    private column : number;
    private isMarked : boolean;


    public get Type() : number {
        return this.block.type;
    }

    public get Id() : number {  
        return this.block.id;
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
        this.block = block;
        this.row = row;
        this.column = column;

        this.isMarked = false;
    }

    public mark(){
        this.isMarked = true;
    }
}


