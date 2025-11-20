import { ISymbolClusterizer } from './Abstract/ISymbolsClusterizer';
import { ISymbolsGenerator } from "./Abstract/ISymbolsGenerator";
import { Event } from '../../Utils/Event';
import { IEvent } from '../../Utils/Abstract/IEvent';
import { IGameModel } from './Abstract/IGameModel';
import { ComputedData } from './Structure/ComputedData';
import { SymbolsDataMatrix } from './Structure/SymbolsDataMatrix';

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
        const symbolsData = this.generator.generateSymbols();
        const clusterizedSymbols = this.clusterizer.findClusters(symbolsData);

        const symbolsDataMatrix = new SymbolsDataMatrix(symbolsData);
        const computedData = new ComputedData(symbolsDataMatrix, clusterizedSymbols);

        this._onComputeCompleted.invoke(computedData);
    }
}


