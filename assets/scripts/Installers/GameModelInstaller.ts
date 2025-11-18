import { _decorator, CCInteger, game } from 'cc';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { BlocksGenerator } from '../Model/BlocksGenerator';
import { Installer } from './Abstract/Installer';
import { GameData } from '../Data/GameData';
import { BlocksClusterizer } from '../Model/BlocksClusterizer';
import { GameModel } from '../Model/GameModel';

const { ccclass, property } = _decorator;

@ccclass('Game Model Installer')
export class GameModelInstaller extends Installer {

    public Install(dependencies : IDependenciesContainer): void {        
        const gameData = dependencies.get(GameData);

        const blocksGenerator = new BlocksGenerator(gameData);
        const blocksClusterizer = new BlocksClusterizer(gameData);
        const gameModel = new GameModel(blocksGenerator, blocksClusterizer);

        dependencies.register(GameModel, gameModel);
        console.log("Game Model Installed");
    }
    
}