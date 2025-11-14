import { _decorator, Component, Node } from 'cc';
import { Event } from '../Utils/Event';
import { IEvent } from '../Utils/Abstract/IEvent';
import { IBlocksGenerator } from './Abstract/IBlocksGenerator';
import { Block } from './Block';


export class BlocksGenerator implements IBlocksGenerator {
    private rowsCount : number;
    private columnsCount : number;
    private blockTypeCount : number;

    private _onBlocksGenerated: Event<Block[][]>;


    get OnBlocksGenerated() : IEvent<Block[][]> {
        return this._onBlocksGenerated;
    }
    

    public constructor(rowsCount, columnsCount, blockTypeCount){
        this._onBlocksGenerated = new Event();

        this.rowsCount = rowsCount;
        this.columnsCount = columnsCount;
        this.blockTypeCount = blockTypeCount;
    }

    
    public generateBlocks(){
        const blocks: Block[][] = [];

        for (let row = 0; row < this.rowsCount; row++) {
            blocks[row] = [];

            for (let column = 0; column < this.columnsCount; column++) {
                const randomType = Math.floor(Math.random() * this.blockTypeCount);
                const id = row * this.columnsCount + column;

                blocks[row][column] = new Block(randomType, id);
            }
        }

        this._onBlocksGenerated.invoke(blocks);
        console.log("Blocks Generated");
    }
}


