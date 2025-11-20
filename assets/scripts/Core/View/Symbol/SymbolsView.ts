import { _decorator, Vec2 } from 'cc';
import { IEvent } from '../../../Utils/Abstract/IEvent';
import { Event } from '../../../Utils/Event';
import { ISymbolsView } from '.././Abstract/ISymbolsView';
import { ISymbolFactory } from '.././Abstract/ISymbolFactory';
import { ISymbol } from '.././Abstract/ISymbol';
import { Cluster } from '../../Model/Structure/Cluster';
import { SymbolsDataMatrix } from '../../Model/Structure/SymbolsDataMatrix';


export class SymbolsView implements ISymbolsView {
    private _onFieldFilled : Event<void>;

    private symbolsFactory : ISymbolFactory;
    private symbolsTable : ISymbol[][] = [[]];


    public get OnFieldFilled() : IEvent<void> {
        return this._onFieldFilled;
    }
    
    public constructor(symbolsFactory : ISymbolFactory){
        this._onFieldFilled = new Event<void>();
        this.symbolsFactory = symbolsFactory;
    }


    public async showSymbols(dataMatrix: SymbolsDataMatrix) {
        this.clearSymbols();
        this.fillMatrix(dataMatrix);

        this._onFieldFilled.invoke();
    }

 
    public async highlightCluster(cluster : Cluster) {
        let highlightedSymbols = 0;

        await new Promise<void>((resolve) => cluster.Symbols.forEach(symbol => {
            this.symbolsTable[symbol.Row][symbol.Column].highlight(() => {
                highlightedSymbols++;
                
                if(highlightedSymbols === cluster.Symbols.length)
                    resolve();
            });
        }));
    }


    private clearSymbols() : void {
        const rows = this.symbolsTable.length;
        const columns = this.symbolsTable[0].length;

        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) 
                this.symbolsTable[row][column].remove();
        }

        this.symbolsTable = [[]];
    }


    private fillMatrix(dataMatrix: SymbolsDataMatrix) : void{
        for (let row = 0; row < dataMatrix.Rows; row++) {
            this.symbolsTable[row] = [];

            for (let column = 0; column < dataMatrix.Columns; column++) {
                const symbolData = dataMatrix.getSymbolData(row, column);
                const symbolView = this.symbolsFactory.create(symbolData.type);

                this.symbolsTable[row][column] = symbolView;

                this.placeSymbol(symbolView, row, column, dataMatrix.Rows, dataMatrix.Columns);
            }
        }
    }
    

    private placeSymbol(symbol: ISymbol, row: number, column: number, rows: number, columns: number) : void {
        const xShift = columns % 2 == 0 ? columns / 2 - 0.5 :  Math.trunc(columns / 2);
        const yShift = rows % 2 == 0 ? rows / 2 - 0.5 : Math.trunc(rows / 2);
        const xPos = ((column - xShift) * symbol.Width);
        const yPos = ((row - yShift) * symbol.Height);

        symbol.Position = new Vec2(xPos, yPos);
    } 
}




