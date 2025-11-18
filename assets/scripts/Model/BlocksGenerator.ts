import { IBlocksGenerator } from './Abstract/IBlocksGenerator';
import { _decorator } from 'cc';
import { Event } from '../Utils/Event';
import { IEvent } from '../Utils/Abstract/IEvent';
import { Block } from './Block';
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

    
    public generateBlocks() : Block[][] {
        let blocks: Block[][] = [];

        for (let row = 0; row < this.data.BlockRowsCount; row++) {
            blocks[row] = [];

            for (let column = 0; column < this.data.BlockColumnsCount; column++) {
                let randomType = Math.floor(Math.random() * this.data.BlockTypesCount);
                let id = row * this.data.BlockColumnsCount + column;

                blocks[row][column] = new Block(randomType, id);
            }
        }

        this._onBlocksGenerated.invoke();
        
        return blocks;
    }
}


