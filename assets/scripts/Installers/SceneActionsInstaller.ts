import { SceneActions, SceneActionsToken } from './../Other/SceneActions';
import { _decorator} from 'cc';
import { Installer } from './Abstract/Installer';
import { IDIContainer } from '../Utils/Abstract/IDIContainer';
import { ISceneActionsToken } from '../Other/ISceneActions';

const { ccclass, property } = _decorator;

@ccclass('SceneActionsInstaller')
export class SceneActionsInstaller extends Installer {

    public Install(diContainer: IDIContainer): void {        
        const sceneActions = new SceneActions();

        diContainer.register(SceneActionsToken, sceneActions);
        diContainer.register(ISceneActionsToken, sceneActions);

        console.log("Scene Actions Installed");
    }
    
}


