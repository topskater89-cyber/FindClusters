import { _decorator, Component, Node } from 'cc';
import { DIContainer } from '../Utils/DIContainer';
import { Installer } from '../Installers/Abstract/Installer';
const { ccclass, property } = _decorator;

@ccclass('Bootstrap')
export class Bootstrap extends Component {
    @property(Installer)
    installers: Installer[] = [];

    start() {
        let diContainer = new DIContainer();

        for(let installer of this.installers){
            installer.Install(diContainer);
        }
    }


}


