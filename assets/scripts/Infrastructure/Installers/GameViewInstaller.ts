import { _decorator, CCInteger, game } from 'cc';
import { IDependenciesContainer } from '../../Utils/Abstract/IDependenciesContainer';
import { Installer } from './Abstract/Installer';

const { ccclass, property } = _decorator;

@ccclass('Game View Installer')
export class GameViewInstaller extends Installer {
    @property(Installer)
    private installers: Installer[] = [];


    public Install(dependencies : IDependenciesContainer): void {  
        
        for(let installer of this.installers){
            installer.Install(dependencies);
        }

        this.destroy();
              
        console.log("Game View Installed");
    }
    
}