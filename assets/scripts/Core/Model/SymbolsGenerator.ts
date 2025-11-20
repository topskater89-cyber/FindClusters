import { ISymbolsGenerator } from './Abstract/ISymbolsGenerator';
import { _decorator } from 'cc';
import { Event } from '../../Utils/Event';
import { IEvent } from '../../Utils/Abstract/IEvent';
import { SymbolData } from './Structure/SymbolData';
import { ISymbolGeneratorData } from '../Data/Abstract/ISymbolGeneratorData';


export class SymbolsGenerator implements ISymbolsGenerator {
    private data : ISymbolGeneratorData;
    private _onBlocksGenerated: Event<void>;


    get OnBlocksGenerated() : IEvent<void> {
        return this._onBlocksGenerated;
    }
    

    public constructor(data : ISymbolGeneratorData){
        this._onBlocksGenerated = new Event();

        this.data = data;
    }

    
    public generateSymbols() : SymbolData[][] {
        let blocks: SymbolData[][] = [];

        for (let row = 0; row < this.data.RowsCount; row++) {
            blocks[row] = [];

            for (let column = 0; column < this.data.ColumnsCount; column++) {
                let randomType = Math.floor(Math.random() * this.data.Types.length);
                let id = row * this.data.ColumnsCount + column;

                blocks[row][column] = new SymbolData(this.data.Types[randomType], id);
            }
        }

        this._onBlocksGenerated.invoke();
        
        return blocks;
    }
}


