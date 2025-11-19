import { _decorator, Vec2 } from 'cc';
import { IEvent } from '../Utils/Abstract/IEvent';
import { Event } from '../Utils/Event';
import { ISymbolsView } from './Abstract/ISymbolsView';
import { MarkedBlock } from '../Model/MarkedBlock';
import { ISymbolFactory } from './Abstract/ISymbolFactory';
import { SymbolsData } from '../Model/SymbolsData';
import { ISymbol } from './Abstract/ISymbol';


export class SymbolsView implements ISymbolsView {
    private _onFieldFilled : Event<void>;

    private symbolsFactory : ISymbolFactory;
    private field : ISymbol[][] = [[]];


    public get OnFieldFilled() : IEvent<void> {
        return this._onFieldFilled;
    }
    
    public constructor(symbolsFactory : ISymbolFactory){
        this._onFieldFilled = new Event<void>();
        this.symbolsFactory = symbolsFactory;
    }


    public redraw(data: [SymbolsData, MarkedBlock[]]): void {
        this.clearField();

        this.fillField(data[0]);

        this._onFieldFilled.invoke();
    }

 
    private highlightSymbols(clusterizedSymbols : MarkedBlock[]){
         for(let i = 0; i < clusterizedSymbols.length; i++){
            const symbol = clusterizedSymbols[i];
        }
    }


    private clearField() : void {
        const rows = this.field.length;
        const columns = this.field[0].length;

        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) 
                this.field[row][column].remove();
        }

        this.field = [[]];
    }


    private fillField(symbolsData: SymbolsData) : void{
        for (let row = 0; row < symbolsData.Rows; row++) {
            this.field[row] = [];

            for (let column = 0; column < symbolsData.Columns; column++) {
                const symbolData = symbolsData.getSymbolData(row, column);
                const symbolView = this.symbolsFactory.create(symbolData.type);

                this.field[row][column] = symbolView;

                this.placeSymbol(symbolView, row, column, symbolsData.Rows, symbolsData.Columns);
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




