import { ITask } from "./ITask";

export class TaskQueue {
    tasks : ITask[];
    trackedTask : ITask;


    public queueTask(task : ITask) : void {
        this.tasks.push(task);

        if(this.trackedTask !== undefined) {
            const task = this.tasks.shift();
            this.trackTask(task);
        }
    }


    private enqueueTask() : void {
        this.trackedTask.OnCompleted.unsubscribe(this.enqueueTask.bind(this));
        this.trackTask = undefined;

        if(this.tasks.length !== 0) {
            const task = this.tasks.shift();
            this.trackTask(task);
        }
    }


    private trackTask(task : ITask) : void {
        this.trackedTask = task;
        this.trackedTask.OnCompleted.subscribe(this.enqueueTask.bind(this));
    }
}


