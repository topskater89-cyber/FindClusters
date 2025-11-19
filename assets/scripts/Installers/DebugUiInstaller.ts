import { _decorator, Button, Canvas, Component, instantiate, Node, Prefab, resources, game, EditBox } from 'cc';
import { Installer } from './Abstract/Installer';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { DebugUi } from '../View/DebugUi';
import { GameModel } from '../Model/GameModel';
import { ModelData } from '../Data/ModelData';

const { ccclass, property } = _decorator;

@ccclass('Debug Ui Installer')
export class DebugUiInstaller extends Installer {
    @property({type: Canvas,  group: { name: '⚙️ Scene Objects' }})
    private canvas : Canvas;

    @property({type: Prefab,  group: { name: '⚙️ Prefabs' }})
    private debugUi : Prefab;


    public Install(dependencies: IDependenciesContainer): void {     
        const modelData : ModelData = dependencies.get(ModelData);   
        const gameModel : GameModel = dependencies.get(GameModel);
        const debugUi = instantiate(this.debugUi).getComponent(DebugUi);

        debugUi.initialize(this.canvas.node);
        debugUi.OnStartButtonClicked.subscribe(gameModel.compute.bind(gameModel));

        gameModel.OnComputeCompleted.subscribe(([symbols, marked]) => {console.log(symbols);});

        debugUi.RowsEBox.string = modelData.RowsCount.toString();
        debugUi.ColumnsEBox.string = modelData.ColumnsCount.toString()
        debugUi.TypesEBox.string = modelData.Types.toString()
        debugUi.ClusterSizeEBox.string = modelData.ClusterSize.toString()

        debugUi.RowsEBox.node.on("editing-did-ended", (editBox : EditBox)=>{modelData.setRowsCount(Number(editBox.string));}, this);
        debugUi.ColumnsEBox.node.on("editing-did-ended", (editBox : EditBox)=>{modelData.setColumnsCount(Number(editBox.string));}, this);
        debugUi.TypesEBox.node.on("editing-did-ended", (editBox : EditBox)=>{modelData.setTypes([editBox.string]);}, this);
        debugUi.ClusterSizeEBox.node.on("editing-did-ended", (editBox : EditBox)=>{modelData.setClusterSize(Number(editBox.string));}, this);

        console.log("Game Ui Installed");
    }
    
}


