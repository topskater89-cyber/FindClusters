import { IBlocksGeneratorData } from "./IBlocksGeneratorData";
import { IClusterizatorData } from "./IClusterizatorData";
import { _decorator, CCInteger, CCString, Component } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('ModelData')
export class ModelData implements IClusterizatorData, IBlocksGeneratorData {
    @property(CCInteger)
    SymbolRowsCount: number;
    @property(CCInteger)
    SymbolColumnsCount: number;
    @property(CCInteger)
    SymbolTypesCount: number;
    @property(CCInteger)
    ClusterSize: number;
    @property(CCString)
    SymbolTypes: string[];
}


