import { _decorator, Component, Node } from 'cc';
import { IDIContainer } from '../Utils/Abstract/IDIContainer';
import { Clusterizer } from '../Models/Clusterizer';
import { IClusterizerToken } from '../Models/Abstract/IClusterizer';
import { IBlockGenerator, IBlockGeneratorToken } from '../Models/Abstract/IBlockGenerator';
import { Installer } from './Abstract/Installer';

const { ccclass, property } = _decorator;

@ccclass('Clusterizer Installer')
export class ClusterizerInstaller extends Installer {
    
    public Install(diContainer : IDIContainer): void {
        const blockGenerator : IBlockGenerator = diContainer.get(IBlockGeneratorToken);
        const clusterizer = new Clusterizer();
        
        diContainer.register(IClusterizerToken, clusterizer);

        console.log("Clusterizer Installed");
    }
    
}




