import { ISymbolGeneratorData } from "./Abstract/ISymbolGeneratorData";
import { ISymbolClusterizatorData } from "./Abstract/ISymbolClusterizatorData";
import { _decorator, CCInteger, CCString} from 'cc';

const { ccclass, property, type } = _decorator;

@ccclass('ModelData')
export class ModelData implements ISymbolClusterizatorData, ISymbolGeneratorData {
    @type(CCInteger)
    private rowsCount: number;
    @type(CCInteger)
    private columnsCount: number;
    @type(CCInteger)
    private clusterSize: number;
    @property(CCString)
    private types: string[] = [];


    public get RowsCount(): number {
        return this.rowsCount;
    }

    public get ColumnsCount(): number {
        return this.columnsCount;
    }

    public get ClusterSize(): number {
        return this.clusterSize;
    }
    
    public get Types(): string[] {
        return this.types;
    }

    public setRowsCount(value : number) {
        this.rowsCount = value;
    }

    public setColumnsCount(value : number) {
        this.columnsCount = value;
    }

    public setTypes(value : string[]) {
        this.types = value;
    }

    public setClusterSize(value : number) {
        this.clusterSize = value;
    }

}


