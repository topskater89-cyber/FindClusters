import { _decorator, CCInteger } from 'cc';
import { Installer } from './Abstract/Installer';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { GameData } from '../Data/GameData';
import { ModelData } from '../Data/ModelData';

const { ccclass, property } = _decorator;

@ccclass('Game Data Installer')
export class GameDataInstaller extends Installer {

    @property({type: ModelData,  group: { name: '⚙️ Initial Values' }})
    modelData : ModelData = new ModelData();


    public Install(dependencies: IDependenciesContainer): void {        
        const gameData = new GameData(this.modelData);

        dependencies.register(GameData, gameData);
        console.log("Game Data Installed");
    }
    
}


