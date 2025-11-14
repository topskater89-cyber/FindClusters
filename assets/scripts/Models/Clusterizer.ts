import { _decorator, Component, Node } from 'cc';
import { Block } from './Block';
const { ccclass, property } = _decorator;

@ccclass('Clusterizer')
export class Clusterizer {

    constructor(){

    }


    public findClusters(blocks : Block[][]){
        for (const row of blocks) {
            for (const block of row) {
                console.log(block);
            }
        }
    }  

}


