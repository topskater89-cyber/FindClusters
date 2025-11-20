import { ITask } from "../Abstract/ITask";
import { IEvent } from "../../../Utils/Abstract/IEvent";
import { IDelay } from "../../../Utils/Abstract/IDelay";
import { Event } from "../../../Utils/Event";

export class TaskRunner {
    public get OnTasksEnded() : IEvent<void> {
        return this._onTasksEnded;
    }

    private delay : IDelay;
    private tasks : ITask[];
    
    private _onTasksEnded : Event<void>


    public constructor(delay : IDelay) {
        this._onTasksEnded = new Event();

        this.delay = delay;
        this.tasks = [];
    }

    public run(tasks : ITask[]){
        this.tasks = tasks;

        this.runTask()
    }

    private runTask() : void {
       if(this.tasks.length !== 0){
            const task = this.tasks.shift();

            this.delay.delay(task.run(), this.runTask.bind(this)); 
        }   
        else{
            this._onTasksEnded.invoke();
        }            
    }
}


