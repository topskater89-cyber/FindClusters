import { Event } from './../Utils/Event';
import { IClusterizatorData } from './../Data/IClusterizatorData';
import { _decorator } from 'cc';
import { Block } from './Block';
import { IEvent } from '../Utils/Abstract/IEvent';
import { MarkedBlock } from './MarkedBlock';

export class Clusterizer {
    private data : IClusterizatorData;

    private _onClustersFinded : Event<MarkedBlock[]>;


    public get OnClustersFinded() : IEvent<MarkedBlock[]> {
        return this._onClustersFinded;
    }

    
    constructor(data : IClusterizatorData){
        this._onClustersFinded = new Event<MarkedBlock[]>();

        this.data = data;
    }


    public findClusters(blocks : Block[][]){            
        const markedBlocks = this.getMarkedBlocks(blocks);
        const clusterizedBlocks = this.runGlobalClusterization(markedBlocks);

        this._onClustersFinded.invoke(clusterizedBlocks);
    }  


    private getMarkedBlocks(blocks : Block[][]) : MarkedBlock[][] {
        const rows = blocks.length;
        const columns = blocks[0].length;

        const markedBlocks : MarkedBlock[][] = [[]];

        for(let row = 0; row < rows; row++){
            markedBlocks[row] = [];
            
            for(let column = 0; column < columns; column++) {
                const block = blocks[row][column];

                markedBlocks[row].push(new MarkedBlock(block, row, column));
            }
        }

        return markedBlocks;
    }


    private runGlobalClusterization(blocks : MarkedBlock[][]) : MarkedBlock[] {
        const rows = blocks.length;
        const columns = blocks[0].length;

        let clusterizedBlocks : MarkedBlock[] = [];

        for(let row = 0; row < rows; row++){
            for(let column = 0; column < columns; column++){
                let block = blocks[row][column];

                if(!block.IsMarked){
                    let cluster = this.runLocalClusterization(blocks, block);

                    if(cluster.length >= this.data.ClusterSize)
                        clusterizedBlocks = clusterizedBlocks.concat(cluster);
                }
            }
        }
        return clusterizedBlocks;
    }


    private runLocalClusterization(blocks : MarkedBlock[][], block : MarkedBlock) : MarkedBlock[] {
        const rows = blocks.length;
        const columns = blocks[0].length;

        let relatedBlocks = [block];
        let cluster : MarkedBlock[] = [];
        
        while(relatedBlocks.length !== 0) {
            let currentBlock = relatedBlocks[0];
            currentBlock.mark();

            let downBlock = currentBlock.Row + 1 < rows ? blocks[currentBlock.Row + 1][currentBlock.Column] : undefined
            let leftBlock = currentBlock.Column - 1 >= 0 ? blocks[currentBlock.Row][currentBlock.Column - 1] : undefined;
            let rightBlock = currentBlock.Column + 1 < columns ? blocks[currentBlock.Row][currentBlock.Column + 1] : undefined;
        
            
            if(downBlock !== undefined && downBlock.Type === currentBlock.Type && !downBlock.IsMarked) {
                relatedBlocks.push(downBlock);
            }

            if(leftBlock !== undefined && leftBlock.Type === currentBlock.Type && !leftBlock.IsMarked) {
                relatedBlocks.push(leftBlock);
            }

            if(rightBlock !== undefined && rightBlock.Type === currentBlock.Type && !rightBlock.IsMarked) {
                relatedBlocks.push(rightBlock);
            }

            cluster.push(currentBlock);
            relatedBlocks.shift();
        }

        return cluster;
    }
}
