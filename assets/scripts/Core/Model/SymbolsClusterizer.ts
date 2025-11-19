import { Event } from '../../Utils/Event';
import { ISymbolClusterizatorData } from '../Data/Abstract/ISymbolClusterizatorData';
import { _decorator } from 'cc';
import { SymbolData } from './SymbolData';
import { IEvent } from '../../Utils/Abstract/IEvent';
import { MarkedSymbol } from './MarkedSymbol';
import { ISymbolClusterizer } from './Abstract/ISymbolsClusterizer';
import { Cluster } from './Cluster';

export class SymbolsClusterizer implements ISymbolClusterizer {
    private data : ISymbolClusterizatorData;

    private _onClustersFinded : Event<void>;


    public get OnClustersFinded() : IEvent<void> {
        return this._onClustersFinded;
    }

    
    constructor(data : ISymbolClusterizatorData){
        this._onClustersFinded = new Event<void>();

        this.data = data;
    }


    public findClusters(blocks : SymbolData[][]) : Cluster[]{            
        const markedBlocks = this.getMarkedSymbols(blocks);
        const clusters = this.runGlobalClusterization(markedBlocks);

        this._onClustersFinded.invoke();

        return clusters;
    }  


    private getMarkedSymbols(symbols : SymbolData[][]) : MarkedSymbol[][] {
        const rows = symbols.length;
        const columns = symbols[0].length;

        const markedSymbols : MarkedSymbol[][] = [[]];

        for(let row = 0; row < rows; row++){
            markedSymbols[row] = [];
            
            for(let column = 0; column < columns; column++) {
                const symbol = symbols[row][column];

                markedSymbols[row].push(new MarkedSymbol(symbol, row, column));
            }
        }

        return markedSymbols;
    }


    private runGlobalClusterization(blocks : MarkedSymbol[][]) : Cluster[] {
        const rows = blocks.length;
        const columns = blocks[0].length;

        let clusters : Cluster[] = [];

        for(let row = 0; row < rows; row++){
            for(let column = 0; column < columns; column++){
                let block = blocks[row][column];

                if(!block.IsMarked){
                    let clusterizedSymbols = this.runLocalClusterization(blocks, block);

                    if(clusterizedSymbols.length >= this.data.ClusterSize){
                        clusters.push(new Cluster(clusterizedSymbols));
                    }
                }
            }
        }
        return clusters;
    }


    private runLocalClusterization(blocks : MarkedSymbol[][], block : MarkedSymbol) : MarkedSymbol[] {
        const rows = blocks.length;
        const columns = blocks[0].length;

        let relatedBlocks = [block];
        let cluster : MarkedSymbol[] = [];

        block.mark();

        while(relatedBlocks.length !== 0) {
            let currentBlock = relatedBlocks[0];

            let upBlock = currentBlock.Row - 1 >= 0 ? blocks[currentBlock.Row - 1][currentBlock.Column] : undefined
            let downBlock = currentBlock.Row + 1 < rows ? blocks[currentBlock.Row + 1][currentBlock.Column] : undefined
            let leftBlock = currentBlock.Column - 1 >= 0 ? blocks[currentBlock.Row][currentBlock.Column - 1] : undefined;
            let rightBlock = currentBlock.Column + 1 < columns ? blocks[currentBlock.Row][currentBlock.Column + 1] : undefined;
        
            [upBlock, downBlock, leftBlock, rightBlock].forEach((block)=> {
                 if(block !== undefined && block.Type === currentBlock.Type && !block.IsMarked) {
                    relatedBlocks.push(block);
                    block.mark();
                }
            });

            cluster.push(currentBlock);
            relatedBlocks.shift();
        }

        return cluster;
    }
}
