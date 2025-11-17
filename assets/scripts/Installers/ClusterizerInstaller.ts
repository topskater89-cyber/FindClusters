import { GameData } from './../Data/GameData';
import { Clusterizer } from './../Models/Clusterizer';
import { BlocksGenerator } from '../Models/BlocksGenerator';
import { _decorator, CCInteger, Component, Node } from 'cc';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { Installer } from './Abstract/Installer';

const { ccclass, property } = _decorator;

@ccclass('Clusterizer Installer')
export class ClusterizerInstaller extends Installer {
    
    public Install(dependencies : IDependenciesContainer): void {
        const blockGenerator : BlocksGenerator = dependencies.get(BlocksGenerator);
        const gameData : GameData = dependencies.get(GameData);
        const clusterizer = new Clusterizer(gameData);
        
        blockGenerator.OnBlocksGenerated.subscribe(clusterizer.findClusters.bind(clusterizer));
        clusterizer.OnClustersFinded.subscribe(gameData.updateClustersData.bind(gameData));
        
        dependencies.register(Clusterizer, clusterizer);

        console.log("Clusterizer Installed");
    }
    
}




