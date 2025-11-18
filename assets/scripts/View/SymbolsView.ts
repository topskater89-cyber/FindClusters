import { _decorator, Color, Component, instantiate, Node, Prefab, CCInteger, Camera, Vec3, Vec2 } from 'cc';
import { Symbol } from './Symbol';
import { SymbolData } from '../Model/SymbolData';
import { IEvent } from '../Utils/Abstract/IEvent';
import { Event } from '../Utils/Event';
import { ISymbolsView } from './Abstract/ISymbolsView';
import { MarkedBlock } from '../Model/MarkedBlock';
import { ISymbolFactory } from './Abstract/ISymbolFactory';


export class SymbolsView implements ISymbolsView {
    private _onDrawingEnded : Event<void>;

    private symbolsFactory : ISymbolFactory;
    private symbols : Symbol[][] = [[]];


    public get OnDrawingEnded() : IEvent<void> {
        return this._onDrawingEnded;
    }
    
    public constructor(symbolsFactory : ISymbolFactory){
        this._onDrawingEnded = new Event<void>();
        this.symbolsFactory = symbolsFactory;
    }


    public redraw(data: [SymbolData[][], MarkedBlock[]]): void {
        this.removeSymbols();

        this.drawSymbols(data[0]);
        this.highlightSymbols(data[1]);

        this._onDrawingEnded.invoke();
    }

 
    private highlightSymbols(clusterizedBlocks : MarkedBlock[]){
         for(let i = 0; i < clusterizedBlocks.length; i++){
            const block = clusterizedBlocks[i];

            this.symbols[block.Row][block.Column].highlight();
        }
    }


    private removeSymbols() : void {
        const rows = this.symbols.length;
        const columns = this.symbols[0].length;

        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) 
                this.symbols[row][column].remove();
        }

        this.symbols = [[]];
    }


    private drawSymbols(blocks: SymbolData[][]) : void{
        const rows = blocks.length;
        const columns = blocks[0].length;

        for (let row = 0; row < rows; row++) {
            this.symbols[row] = [];

            for (let column = 0; column < columns; column++) {
                const block = blocks[row][column];
                const symbolView = this.symbolsFactory.create("");

            }
        }
    }
    

    private placeSymbol(symbol: Symbol, row: number, column: number, rows: number, columns: number) : void {
        const xShift = columns % 2 == 0 ? columns / 2 - 0.5 :  Math.trunc(columns / 2);
        const yShift = rows % 2 == 0 ? rows / 2 - 0.5 : Math.trunc(rows / 2);;
        const xPos = ((column - xShift) * symbol.Width) / 100;
        const yPos = ((row - yShift) * symbol.Height) / 100;

        symbol.Position = new Vec2(xPos, yPos);
    } 
}




