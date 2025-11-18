import { _decorator, Button, Canvas, Component, instantiate, Node, Prefab, resources, game, EditBox } from 'cc';
import { Installer } from './Abstract/Installer';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { GameUi } from '../View/GameUi';
import { GameModel } from '../Model/GameModel';
import { GameData } from '../Data/GameData';

const { ccclass, property } = _decorator;

@ccclass('GameUiInstaller')
export class GameUiInstaller extends Installer {
    @property({type: Canvas,  group: { name: '⚙️ Scene Objects' }})
    private canvas : Canvas;

    @property({type: Prefab,  group: { name: '⚙️ Prefabs' }})
    private prefabSceneUi : Prefab;


    public Install(dependencies: IDependenciesContainer): void {     
        const gameData : GameData = dependencies.get(GameData);   
        const gameModel : GameModel = dependencies.get(GameModel);
        const gameUi = instantiate(this.prefabSceneUi).getComponent(GameUi);

        gameUi.initialize(this.canvas.node);
        gameUi.OnStartButtonClicked.subscribe(gameModel.compute.bind(gameModel));

        gameUi.RowsEBox.string = gameData.BlockRowsCount.toString();
        gameUi.ColumnsEBox.string = gameData.BlockColumnsCount.toString()
        gameUi.TypesEBox.string = gameData.BlockTypesCount.toString()
        gameUi.ClusterSizeEBox.string = gameData.ClusterSize.toString()

        gameUi.RowsEBox.node.on("editing-did-ended", (editBox : EditBox)=>{gameData.setBlockRowsCount(Number(editBox.string));}, this);
        gameUi.ColumnsEBox.node.on("editing-did-ended", (editBox : EditBox)=>{gameData.setBlockColumnsCount(Number(editBox.string));}, this);
        gameUi.TypesEBox.node.on("editing-did-ended", (editBox : EditBox)=>{gameData.setBlockTypesCount(Number(editBox.string));}, this);
        gameUi.ClusterSizeEBox.node.on("editing-did-ended", (editBox : EditBox)=>{gameData.setClusterSize(Number(editBox.string));}, this);

        console.log("Game Ui Installed");
    }
    
}


