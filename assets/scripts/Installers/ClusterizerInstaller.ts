import { Clusterizer } from './../Models/Clusterizer';
import { BlocksGenerator } from '../Models/BlocksGenerator';
import { _decorator, Component, Node } from 'cc';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { IClusterizerToken } from '../Models/Abstract/IClusterizer';
import { Installer } from './Abstract/Installer';
import { IBlocksGenerator, IBlocksGeneratorToken } from '../Models/Abstract/IBlocksGenerator';

const { ccclass, property } = _decorator;

@ccclass('Clusterizer Installer')
export class ClusterizerInstaller extends Installer {
    
    public Install(dependencies : IDependenciesContainer): void {
        const blockGenerator : BlocksGenerator = dependencies.get(BlocksGenerator);
        const clusterizer = new Clusterizer();
        
        blockGenerator.OnBlocksGenerated.subscribe(clusterizer.findClusters.bind(this));
        
        dependencies.register(Clusterizer, clusterizer);

        console.log("Clusterizer Installed");
    }
    
}




