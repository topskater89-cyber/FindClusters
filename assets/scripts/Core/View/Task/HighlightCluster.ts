import { Cluster } from '../../Model/Structure/Cluster';
import { ISymbolsView } from '../Abstract/ISymbolsView';
import { ITask } from '../Abstract/ITask';

export class HighlightCluster implements ITask {

    private cluster : Cluster;
    private symbolsView : ISymbolsView;


    public constructor(cluster : Cluster, symbolsView : ISymbolsView) {
        this.cluster = cluster;
        this.symbolsView = symbolsView;
    }
 
    public async run() {
        await this.symbolsView.highlightCluster(this.cluster);
    }
}


