import { IBlocksGeneratorData } from './IBlocksGeneratorData';
import { IClusterizatorData } from './IClusterizatorData';


export class GameData implements IClusterizatorData, IBlocksGeneratorData {
    private blockRowsCount : number;
    private blockColumnsCount : number;
    private blockTypesCount : number;
    private clusterSize: number;


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

    public setBlockRowsCount(value : number){
         this.blockRowsCount = value;
    }

    public setBlockColumnsCount(value : number){
        this.blockColumnsCount = value;
    }

    public setBlockTypesCount(value : number){
        this.blockTypesCount = value;
    }

    public setClusterSize(value : number){
        this.clusterSize = value;
    }

    
    public constructor(blockRowsCount: number, blockColumnsCount: number, blockTypesCount: number, clusterSize: number){
        this.blockRowsCount = blockRowsCount;
        this.blockColumnsCount = blockColumnsCount;
        this.blockTypesCount = blockTypesCount;
        this.clusterSize = clusterSize;
    }

}


