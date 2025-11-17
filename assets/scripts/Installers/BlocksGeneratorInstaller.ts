import { _decorator, CCInteger } from 'cc';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { BlocksGenerator } from '../Models/BlocksGenerator';
import { Installer } from './Abstract/Installer';
import { GameData } from '../Data/GameData';

const { ccclass, property } = _decorator;

@ccclass('BlockGeneratorInstaller')
export class BlockGeneratorInstaller extends Installer {

    public Install(dependencies : IDependenciesContainer): void {        
        const gameData = dependencies.get(GameData);
        const blockGenerator = new BlocksGenerator(gameData);

        dependencies.register(BlocksGenerator, blockGenerator);

        blockGenerator.OnBlocksGenerated.subscribe(gameData.updateBlocksData.bind(gameData));
        
        console.log("Block Generator Installed");
    }
    
}