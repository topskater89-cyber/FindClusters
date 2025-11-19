import { ComputedData } from "../Model/ComputedData";
import { TaskQueue } from "./Task/TaskQueue";

export class GameViewModel {
    private taskQueue : TaskQueue;

    public getSymbolsData(computedData: ComputedData) {
        this.buildTaskQueue(computedData);
    }

    private buildTaskQueue(computedData: ComputedData) {
        if(computedData.getClusters().length !== 0){

        }
    }
}


