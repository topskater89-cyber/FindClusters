import { SceneActions, SceneActionsToken } from './../Other/SceneActions';
import { _decorator, Button, Canvas, Component, instantiate, Node, Prefab, resources} from 'cc';
import { Installer } from './Abstract/Installer';
import { IDIContainer } from '../Utils/Abstract/IDIContainer';
import { Ui, UiToken } from '../Views/Ui';

const { ccclass, property } = _decorator;

@ccclass('UiInstaller')
export class UiInstaller extends Installer {
    @property(Canvas)
    private root : Canvas;

    @property(Prefab)  
    private prefabUi : Prefab;


    public Install(diContainer: IDIContainer): void {        
        const sceneActions : SceneActions = diContainer.get(SceneActionsToken); 
        const ui = instantiate(this.prefabUi).getComponent(Ui);

        ui.initialize(sceneActions.InitiateGeneration.bind(sceneActions));

        this.root.node.addChild(ui.node);

        console.log("Ui Installed");
    }
    
}


