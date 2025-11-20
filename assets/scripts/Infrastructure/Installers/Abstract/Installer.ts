import { _decorator, Component, Node } from 'cc';
import { IDependenciesContainer } from '../../../Utils/Abstract/IDependenciesContainer';
import { IInstaller } from './IInstaller';

const { ccclass, property } = _decorator;

@ccclass('Installer')
export abstract class Installer extends Component implements IInstaller {
    public abstract Install(dependencies: IDependenciesContainer) : void;
}


