import { _decorator, CCInteger, game } from 'cc';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { BlocksGenerator } from '../Model/BlocksGenerator';
import { Installer } from './Abstract/Installer';
import { BlocksClusterizer } from '../Model/BlocksClusterizer';
import { GameModel } from '../Model/GameModel';
import { ModelData } from '../Data/ModelData';

const { ccclass, property } = _decorator;

@ccclass('Game Model Installer')
export class GameModelInstaller extends Installer {

    public Install(dependencies : IDependenciesContainer): void {        
        const modelData = dependencies.get(ModelData);

        const blocksGenerator = new BlocksGenerator(modelData);
        const blocksClusterizer = new BlocksClusterizer(modelData);
        const gameModel = new GameModel(blocksGenerator, blocksClusterizer);

        dependencies.register(GameModel, gameModel);
        console.log("Game Model Installed");
    }
    
}