import { IBlocksGenerator } from './Abstract/IBlocksGenerator';
import { _decorator } from 'cc';
import { Event } from '../Utils/Event';
import { IEvent } from '../Utils/Abstract/IEvent';
import { SymbolData } from './SymbolData';
import { IBlocksGeneratorData } from '../Data/IBlocksGeneratorData';


export class BlocksGenerator implements IBlocksGenerator {
    private data : IBlocksGeneratorData;
    private _onBlocksGenerated: Event<void>;


    get OnBlocksGenerated() : IEvent<void> {
        return this._onBlocksGenerated;
    }
    

    public constructor(data : IBlocksGeneratorData){
        this._onBlocksGenerated = new Event();

        this.data = data;
    }

    
    public generateBlocks() : SymbolData[][] {
        let blocks: SymbolData[][] = [];

        for (let row = 0; row < this.data.SymbolRowsCount; row++) {
            blocks[row] = [];

            for (let column = 0; column < this.data.SymbolColumnsCount; column++) {
                let randomType = Math.floor(Math.random() * this.data.SymbolTypesCount);
                let id = row * this.data.SymbolColumnsCount + column;

                blocks[row][column] = new SymbolData(randomType, id);
            }
        }

        this._onBlocksGenerated.invoke();
        
        return blocks;
    }
}


