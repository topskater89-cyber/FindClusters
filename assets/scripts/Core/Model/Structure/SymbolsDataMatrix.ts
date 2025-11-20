import { SymbolData } from "./SymbolData";

export class SymbolsDataMatrix {
    private symbolsData : SymbolData[][];


    public get Rows() : number {
        return this.symbolsData.length;
    }

    public get Columns() : number {
        return this.symbolsData[0].length;
    }

    public getSymbolData(row : number, column : number) : SymbolData {
        return this.symbolsData[row][column];
    }
    

    public constructor(symbolsData : SymbolData[][]) {
        this.symbolsData = symbolsData;
    }
}


