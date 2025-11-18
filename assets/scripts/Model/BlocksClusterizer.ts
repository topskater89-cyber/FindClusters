import { Event } from '../Utils/Event';
import { IClusterizatorData } from '../Data/IClusterizatorData';
import { _decorator } from 'cc';
import { Block } from './Block';
import { IEvent } from '../Utils/Abstract/IEvent';
import { MarkedBlock } from './MarkedBlock';
import { IBlocksClusterizer } from './Abstract/IBlocksClusterizer';

export class BlocksClusterizer implements IBlocksClusterizer {
    private data : IClusterizatorData;

    private _onClustersFinded : Event<void>;


    public get OnClustersFinded() : IEvent<void> {
        return this._onClustersFinded;
    }

    
    constructor(data : IClusterizatorData){
        this._onClustersFinded = new Event<void>();

        this.data = data;
    }


    public findClusters(blocks : Block[][]) : MarkedBlock[]{            
        const markedBlocks = this.getMarkedBlocks(blocks);
        const clusterizedBlocks = this.runGlobalClusterization(markedBlocks);

        this._onClustersFinded.invoke();

        return clusterizedBlocks;
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

                    if(cluster.length >= this.data.ClusterSize){
                        clusterizedBlocks = clusterizedBlocks.concat(cluster);
                    }
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
