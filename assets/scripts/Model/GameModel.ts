import { IBlocksClusterizer } from './Abstract/IBlocksClusterizer';
import { IBlocksGenerator } from "./Abstract/IBlocksGenerator";
import { SymbolData } from './SymbolData';
import { MarkedBlock } from './MarkedBlock';
import { Event } from '../Utils/Event';
import { IEvent } from '../Utils/Abstract/IEvent';
import { IGameModel } from './Abstract/IGameModel';

export class GameModel implements IGameModel {

    private _onComputeCompleted : Event<[SymbolData[][], MarkedBlock[]]>;

    private generator : IBlocksGenerator;
    private clusterizer : IBlocksClusterizer;

    public get OnComputeCompleted() : IEvent<[SymbolData[][], MarkedBlock[]]>{
        return this._onComputeCompleted;
    }

    public constructor(generator : IBlocksGenerator, clusterizer : IBlocksClusterizer) {
        this.generator = generator;
        this.clusterizer = clusterizer;

        this._onComputeCompleted = new Event<[SymbolData[][], MarkedBlock[]]>();
    }

    public compute(){
        const blocks = this.generator.generateBlocks();
        const clusterizedBlocks = this.clusterizer.findClusters(blocks);

        this._onComputeCompleted.invoke([blocks, clusterizedBlocks]);
    }
}


