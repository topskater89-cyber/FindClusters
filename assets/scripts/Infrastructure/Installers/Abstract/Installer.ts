import { _decorator, Component, Node } from 'cc';
import { IDependenciesContainer } from '../../../Utils/Abstract/IDependenciesContainer';

const { ccclass, property } = _decorator;

@ccclass('Installer')
export abstract class Installer extends Component {
    public abstract Install(diContainer: IDependenciesContainer) : void;
}


