import { ILocatedSymbol } from "./Abstract/ILocatedSymbol";
import { Cluster } from "./Cluster";
import { SymbolData } from "./SymbolData";

export class ComputedData {
    private symbolsMatrix : SymbolData[][];
    private clusters : Cluster[];


    public get Rows() : number {
        return this.symbolsMatrix.length;
    }

    public get Columns() : number {
        return this.symbolsMatrix[0].length;
    }

    public getSymbolData(row : number, column : number) : SymbolData {
        return this.symbolsMatrix[row][column];
    }

    public getClusters() : Cluster[] {
        return this.clusters;
    }

    public constructor(symbolsMatrix : SymbolData[][], clusters : Cluster[]){
        this.symbolsMatrix = symbolsMatrix;
        this.clusters = clusters;
    }
}


