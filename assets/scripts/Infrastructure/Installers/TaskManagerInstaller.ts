import { _decorator, Component, Node } from 'cc';
import { Installer } from './Abstract/Installer';
import { IDependenciesContainer } from '../../Utils/Abstract/IDependenciesContainer';
import { TaskManager } from '../../Core/View/Task/TaskManager';
import { GameModel } from '../../Core/Model/GameModel';
import { SymbolsView } from '../../Core/View/Symbol/SymbolsView';
import { Delay } from '../../Utils/Delay';
import { TaskRunner } from '../../Core/View/Task/TaskRunner';
const { ccclass, property } = _decorator;

@ccclass('Task Manager Installer')
export class TaskManagerInstaller extends Installer {
    public Install(dependencies: IDependenciesContainer): void {
        const gameModel = dependencies.get(GameModel);
        const symbolsView = dependencies.get(SymbolsView);

        const delay = new Node("Task Runner Delay").addComponent(Delay);
        const taskRunner = new TaskRunner(delay);
        const taskManager = new TaskManager(taskRunner, symbolsView);

        gameModel.OnComputeCompleted.subscribe(taskManager.run.bind(taskManager));

        dependencies.register(TaskRunner, taskRunner);
        dependencies.register(TaskManager, taskManager);

        console.log("Task Manager Installed");
    }
   
}


