import { _decorator, Component, Node } from 'cc';
import { DependenciesContainer } from '../../Utils/DependenciesContainer';
import { Installer } from '../Installers/Abstract/Installer';
const { ccclass, property } = _decorator;

@ccclass('Bootstrap')
export class Bootstrap extends Component {
    @property(Installer)
    installers: Installer[] = [];

    start() {
        let dependencies = new DependenciesContainer();

        for(let installer of this.installers){
            installer.Install(dependencies);
        }

        this.destroy();
    }


}


