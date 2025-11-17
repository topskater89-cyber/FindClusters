import { _decorator, CCInteger } from 'cc';
import { Installer } from './Abstract/Installer';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { GameData } from '../Data/GameData';

const { ccclass, property } = _decorator;

@ccclass('Game Data Installer')
export class GameDataInstaller extends Installer {
    @property({type: CCInteger,  group: { name: '⚙️ Initial Values' }})
    blockRowsCount : number = 3;

    @property({type: CCInteger,  group: { name: '⚙️ Initial Values' }})
    blockColumnsCount : number = 3;

    @property({type: CCInteger,  group: { name: '⚙️ Initial Values' }})
    blockTypesCount : number = 3;

    @property({type: CCInteger,  group: { name: '⚙️ Initial Values' }})
    clusterSize : number;


    public Install(dependencies: IDependenciesContainer): void {        
        const gameData = new GameData(this.blockRowsCount, this.blockColumnsCount, this.blockTypesCount, this.clusterSize);

        dependencies.register(GameData, gameData);
        console.log("Game Data Installed");
    }
    
}


