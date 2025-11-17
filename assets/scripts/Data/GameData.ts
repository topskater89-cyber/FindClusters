import { Block } from '../Models/Block';
import { MarkedBlock } from '../Models/MarkedBlock';
import { IBlocksGeneratorData } from './IBlocksGeneratorData';
import { IClusterizatorData } from './IClusterizatorData';


export class GameData implements IClusterizatorData, IBlocksGeneratorData {
    private blockRowsCount : number;
    private blockColumnsCount : number;
    private blockTypesCount : number;
    private clusterSize: number;

    private blocks : Block[][];
    private clusters : MarkedBlock[];


    public get BlockRowsCount(): number {
        return this.blockRowsCount;
    }

    public get BlockColumnsCount(): number {
        return this.blockColumnsCount;
    }

    public get ClusterSize(): number {
        return this.clusterSize;
    }
    
    public get BlockTypesCount(): number {
        return this.blockTypesCount;
    }

    public get Blocks(): Block[][] {
        return this.blocks;
    }

    public get Clusters(): MarkedBlock[] {
        return this.clusters;
    }


    public constructor(blockRowsCount: number, blockColumnsCount: number, blockTypesCount: number, clusterSize: number){
        this.blockRowsCount = blockRowsCount;
        this.blockColumnsCount = blockColumnsCount;
        this.blockTypesCount = blockTypesCount;
        this.clusterSize = clusterSize;

        this.blocks = [[]];
        this.clusters = [];
    }

    public updateBlocksData(blocks : Block[][]){
        this.blocks = blocks;
    }

    public updateClustersData(clusters : MarkedBlock[]) {
        this.clusters = clusters;
    }

}


