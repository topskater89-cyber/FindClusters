import { _decorator, Component, Node } from 'cc';
import { IBlockGenerator } from './Abstract/IBlockGenerator';
import { Event } from '../Utils/Event';
import { IEvent } from '../Utils/Abstract/IEvent';

export const BlockGeneratorToken = Symbol('BlockGenerator');

export class BlockGenerator implements IBlockGenerator {
    private _rowsCount : number;
    private _columnsCount : number;
    private _blockTypeCount : number;

    private _onBlocksGenerated: Event<void>;


    get OnBlocksGenerated() : IEvent<void> {
        return this._onBlocksGenerated;
    }
    

    public constructor(rowsCount, columnsCount, blockTypeCount){
        this._onBlocksGenerated = new Event();

        this._rowsCount = rowsCount;
        this._columnsCount = columnsCount;
        this._blockTypeCount = blockTypeCount;
    }

    
    public generateBlocks(){
        console.log("Blocks Generated");
        this._onBlocksGenerated.invoke();
    }
}


