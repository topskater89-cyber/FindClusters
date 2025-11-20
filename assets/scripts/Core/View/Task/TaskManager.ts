import { ITask } from '../Abstract/ITask';
import { ComputedData } from "../../Model/Structure/ComputedData";
import { ISymbolsView } from "../Abstract/ISymbolsView";
import { HighlightCluster } from "./HighlightCluster";
import { TaskRunner } from "./TaskRunner";
import { ShowSymbols } from './ShowSymbols';
import { IDelay } from '../../../Utils/Abstract/IDelay';

export class TaskManager {
    private taskRunner : TaskRunner;
    private symbolsView : ISymbolsView;


    public constructor(taskRunner : TaskRunner, symbolsView : ISymbolsView) {
        this.taskRunner = taskRunner;
        this.symbolsView = symbolsView;
    }

    public run(computedData: ComputedData) {
        const tasks = this.buildTasks(computedData);

        this.taskRunner.run(tasks);
    }

    private buildTasks(computedData: ComputedData) {
        const symDataMatrix = computedData.getSymbolsDataMatrix();
        const clusters = computedData.getClusters();

        const tasks : ITask[] = [];

        tasks.push(new ShowSymbols(symDataMatrix, this.symbolsView));

        if(clusters.length !== 0){
            clusters.forEach(cluster => {
                 tasks.push(new HighlightCluster(cluster, this.symbolsView));
            });
        }

        return tasks;
    }
}


