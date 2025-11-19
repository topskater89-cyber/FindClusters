import { IBlocksClusterizer } from './Abstract/IBlocksClusterizer';
import { IBlocksGenerator } from "./Abstract/IBlocksGenerator";
import { SymbolData } from './SymbolData';
import { MarkedBlock } from './MarkedBlock';
import { Event } from '../Utils/Event';
import { IEvent } from '../Utils/Abstract/IEvent';
import { IGameModel } from './Abstract/IGameModel';
import { SymbolsData } from './SymbolsData';

export class GameModel implements IGameModel {

    private _onComputeCompleted : Event<[SymbolsData, MarkedBlock[]]>;

    private generator : IBlocksGenerator;
    private clusterizer : IBlocksClusterizer;

    public get OnComputeCompleted() : IEvent<[SymbolsData, MarkedBlock[]]>{
        return this._onComputeCompleted;
    }

    public constructor(generator : IBlocksGenerator, clusterizer : IBlocksClusterizer) {
        this.generator = generator;
        this.clusterizer = clusterizer;

        this._onComputeCompleted = new Event<[SymbolsData, MarkedBlock[]]>();
    }

    public compute(){
        const symbols = this.generator.generateBlocks();
        const clusterizedBlocks = this.clusterizer.findClusters(symbols);

        const symbolsdata = new SymbolsData(symbols);

        this._onComputeCompleted.invoke([symbolsdata, clusterizedBlocks]);
    }
}


