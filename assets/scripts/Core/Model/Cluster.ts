import { ILocatedSymbol } from "./Abstract/ILocatedSymbol";

export class Cluster {
    private symbols : ILocatedSymbol[];


    public get Symbols() : ILocatedSymbol[] {
        return this.symbols;
    }

    public constructor(symbols : ILocatedSymbol[]){
        this.symbols = symbols;
    }
}


