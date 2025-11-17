import { _decorator } from 'cc';
import { Event } from '../Utils/Event';
import { IEvent } from '../Utils/Abstract/IEvent';
import { IBlocksGenerator } from './Abstract/IBlocksGenerator';
import { Block } from './Block';
import { IBlocksGeneratorData } from '../Data/IBlocksGeneratorData';


export class BlocksGenerator implements IBlocksGenerator {
    private data : IBlocksGeneratorData;
    private _onBlocksGenerated: Event<Block[][]>;


    get OnBlocksGenerated() : IEvent<Block[][]> {
        return this._onBlocksGenerated;
    }
    

    public constructor(data : IBlocksGeneratorData){
        this._onBlocksGenerated = new Event();

        this.data = data;
    }

    
    public generateBlocks(){
        const blocks: Block[][] = [];

        for (let row = 0; row < this.data.BlockRowsCount; row++) {
            blocks[row] = [];

            for (let column = 0; column < this.data.BlockColumnsCount; column++) {
                const randomType = Math.floor(Math.random() * this.data.BlockTypesCount);
                const id = row * this.data.BlockColumnsCount + column;

                blocks[row][column] = new Block(randomType, id);
            }
        }

        this._onBlocksGenerated.invoke(blocks);
        console.log("Blocks Generated");
    }
}


