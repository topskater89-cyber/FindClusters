import { ILocatedSymbol } from "../Abstract/ILocatedSymbol";
import { Cluster } from "./Cluster";
import { SymbolData } from "./SymbolData";
import { SymbolsDataMatrix } from "./SymbolsDataMatrix";

export class ComputedData {
    private symbolsDataMatrix : SymbolsDataMatrix;
    private clusters : Cluster[];

    public getSymbolsDataMatrix() : SymbolsDataMatrix {
        return this.symbolsDataMatrix;
    }

    public getClusters() : Cluster[] {
        return this.clusters;
    }

    public constructor(symbolsMatrix : SymbolsDataMatrix, clusters : Cluster[]){
        this.symbolsDataMatrix = symbolsMatrix;
        this.clusters = clusters;
    }
}


