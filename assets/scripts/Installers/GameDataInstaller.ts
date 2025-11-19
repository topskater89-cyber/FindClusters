import { _decorator, CCInteger, View } from 'cc';
import { Installer } from './Abstract/Installer';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { GameData } from '../Data/GameData';
import { ModelData } from '../Data/ModelData';
import { ViewData } from '../Data/ViewData';

const { ccclass, property } = _decorator;

@ccclass('Game Data Installer')
export class GameDataInstaller extends Installer {

    @property({type: ModelData,  group: { name: '⚙️ Initial Values' }})
    modelData : ModelData = new ModelData();

    @property({type: ViewData,  group: { name: '⚙️ Initial Values' }})
    viewData : ViewData = new ViewData();


    public Install(dependencies: IDependenciesContainer): void {        
        const gameData = new GameData(this.modelData, this.viewData);

        dependencies.register(ModelData, gameData.ModelData);
        dependencies.register(ViewData, gameData.ViewData);
        console.log("Game Data Installed");
    }
    
}


