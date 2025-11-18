import { IBlocksGeneratorData } from './IBlocksGeneratorData';
import { IClusterizatorData } from './IClusterizatorData';
import { ModelData } from './ModelData';


export class GameData implements IClusterizatorData, IBlocksGeneratorData {
    private modelData : ModelData;


    public get SymbolRowsCount(): number {
        return this.modelData.SymbolRowsCount;
    }

    public get SymbolColumnsCount(): number {
        return this.modelData.SymbolColumnsCount;
    }

    public get ClusterSize(): number {
        return this.modelData.ClusterSize;
    }
    
    public get SymbolTypesCount(): number {
        return this.modelData.SymbolTypesCount;
    }

    public setSymbolRowsCount(value : number){
        this.modelData.SymbolRowsCount = value;
    }

    public setSymbolColumnsCount(value : number){
        this.modelData.SymbolColumnsCount = value;
    }

    public setSymbolTypesCount(value : number){
        this.modelData.SymbolTypesCount = value;
    }

    public setClusterSize(value : number){
        this.modelData.ClusterSize = value;
    }

    
    public constructor(modelData : ModelData){
        this.modelData = modelData;
    }

}


