import { _decorator, Button, Canvas, Component, instantiate, Node, Prefab, resources} from 'cc';
import { Installer } from './Abstract/Installer';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { GameUi } from '../Views/GameUi';
import { BlocksGenerator } from '../Models/BlocksGenerator';

const { ccclass, property } = _decorator;

@ccclass('GameUiInstaller')
export class GameUiInstaller extends Installer {
    @property({type: Canvas,  group: { name: '⚙️ Scene Objects' }})
    private root : Canvas;

    @property({type: Prefab,  group: { name: '⚙️ Prefabs' }})
    private prefabSceneUi : Prefab;


    public Install(dependencies: IDependenciesContainer): void {        
        const blockGenerator : BlocksGenerator = dependencies.get(BlocksGenerator);
        const sceneUi = instantiate(this.prefabSceneUi).getComponent(GameUi);

        this.root.node.addChild(sceneUi.node);

        sceneUi.initialize();
        sceneUi.OnStartButtonClicked.subscribe(blockGenerator.generateBlocks.bind(blockGenerator));
        
        console.log("Game Ui Installed");
    }
    
}


