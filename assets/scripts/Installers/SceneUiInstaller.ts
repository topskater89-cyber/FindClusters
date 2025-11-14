import { _decorator, Button, Canvas, Component, instantiate, Node, Prefab, resources} from 'cc';
import { Installer } from './Abstract/Installer';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { SceneUi, SceneUiToken } from '../Views/SceneUi';
import { IBlocksGenerator, IBlocksGeneratorToken } from '../Models/Abstract/IBlocksGenerator';

const { ccclass, property } = _decorator;

@ccclass('SceneUiInstaller')
export class SceneUiInstaller extends Installer {
    @property(Canvas)
    private root : Canvas;

    @property({type: Prefab,  group: { name: '⚙️ Prefabs' }})
    private prefabSceneUi : Prefab;


    public Install(dependencies: IDependenciesContainer): void {        
        const blockGenerator : IBlocksGenerator = dependencies.get(IBlocksGeneratorToken);
        const sceneUi = instantiate(this.prefabSceneUi).getComponent(SceneUi);

        this.root.node.addChild(sceneUi.node);

        sceneUi.initialize();
        sceneUi.OnStartButtonClicked.subscribe(blockGenerator.generateBlocks.bind(blockGenerator));

        dependencies.register(SceneUiToken, sceneUi);
        console.log("Scene Ui Installed");
    }
    
}


