import { ISymbolClusterizer } from './Abstract/ISymbolsClusterizer';
import { ISymbolsGenerator } from "./Abstract/ISymbolsGenerator";
import { MarkedSymbol } from './MarkedSymbol';
import { Event } from '../../Utils/Event';
import { IEvent } from '../../Utils/Abstract/IEvent';
import { IGameModel } from './Abstract/IGameModel';
import { ComputedData } from './ComputedData';

export class GameModel implements IGameModel {

    private _onComputeCompleted : Event<ComputedData>;

    private generator : ISymbolsGenerator;
    private clusterizer : ISymbolClusterizer;

    public get OnComputeCompleted() : IEvent<ComputedData>{
        return this._onComputeCompleted;
    }

    public constructor(generator : ISymbolsGenerator, clusterizer : ISymbolClusterizer) {
        this.generator = generator;
        this.clusterizer = clusterizer;

        this._onComputeCompleted = new Event<ComputedData>();
    }

    public compute(){
        const symbols = this.generator.generateBlocks();
        const clusterizedSymbols = this.clusterizer.findClusters(symbols);

        const computedData = new ComputedData(symbols, clusterizedSymbols);

        this._onComputeCompleted.invoke(computedData);
    }
}


