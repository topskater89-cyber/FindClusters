import { SymbolData } from "./SymbolData";

export class SymbolsData {
    private dataMatrix : SymbolData[][];


    public get Rows() : number {
        return this.dataMatrix.length;
    }

    public get Columns() : number {
        return this.dataMatrix[0].length;
    }

    public getSymbolData(row : number, column : number) : SymbolData{
        return this.dataMatrix[row][column];
    }

    public constructor(dataMatrix : SymbolData[][]){
        this.dataMatrix =dataMatrix;
    }
}


