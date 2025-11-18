import { GameRenderer } from '../View/GameRenderer';
import { _decorator, Button, Camera, Canvas, Component, Game, instantiate, Node, Prefab, resources} from 'cc';
import { Installer } from './Abstract/Installer';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { BlocksDrawer } from '../View/BlocksDrawer';

const { ccclass, property } = _decorator;

@ccclass('GameRendererInstaller')
export class GameRendererInstaller extends Installer {

    @property({type: Camera,  group: { name: '⚙️ Scene Objects' }})
    private gameCamera : Camera;


    public Install(dependencies: IDependenciesContainer): void {   
        const blocksDrawer = dependencies.get(BlocksDrawer);     
        const gameRenderer = new GameRenderer(this.gameCamera, blocksDrawer);
        
        blocksDrawer.OnBlocksRedrawn.subscribe(gameRenderer.updateCamera.bind(gameRenderer));

        console.log("Game Renderer Installed");
    }
    
}


