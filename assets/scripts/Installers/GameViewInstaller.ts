import { _decorator, Button, Camera, Canvas, Component, instantiate, Node, Prefab, resources} from 'cc';
import { Installer } from './Abstract/Installer';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { GameUi } from '../View/GameUi';
import { GameModel } from '../Model/GameModel';

const { ccclass, property } = _decorator;

@ccclass('Game View Installer')
export class GameViewInstaller extends Installer {
    @property({type: Canvas,  group: { name: '⚙️ Scene Objects' }})
    private root : Canvas;

    @property({type: Camera,  group: { name: '⚙️ Scene Objects' }})
    private gameCamera : Camera;

    @property({type: Prefab,  group: { name: '⚙️ Prefabs' }})
    private prefabSceneUi : Prefab;


    public Install(dependencies: IDependenciesContainer): void {        
        const gameModel : GameModel = dependencies.get(GameModel);
        const gameUi = instantiate(this.prefabSceneUi).getComponent(GameUi);

        this.root.node.addChild(gameUi.node);
        gameUi.initialize();

        gameUi.OnStartButtonClicked.subscribe(gameModel.compute.bind(gameModel));
        console.log("Game Ui Installed");
    }
    
}


