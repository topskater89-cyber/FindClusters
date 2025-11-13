import { _decorator, Component, Node } from 'cc';
import { IDIContainer } from '../Utils/Abstract/IDIContainer';
const { ccclass, property } = _decorator;

@ccclass('Installer')
export abstract class Installer extends Component {
    public abstract Install(diContainer: IDIContainer) : void;
}


