import { _decorator, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ViewData')
export class ViewData {
    @property(Prefab)
    private symbols : Prefab[] = [];


    public get SymbolPrefabs(): Prefab[] {
        return this.symbols;
    }
}


