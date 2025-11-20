import { ITask } from "../Abstract/ITask";
import { IEvent } from "../../../Utils/Abstract/IEvent";
import { Event } from "../../../Utils/Event";

export class TaskRunner {
    public get OnTasksEnded() : IEvent<void> {
        return this._onTasksEnded;
    }

    private tasks : ITask[];
    
    private _onTasksEnded : Event<void>


    public constructor() {
        this._onTasksEnded = new Event();
        this.tasks = [];
    }

    public async run(tasks : ITask[]){
        this.tasks = tasks;

        for(let i = 0; i < this.tasks.length; i++){
              await this.tasks[i].run();
        }

        this._onTasksEnded.invoke();
    }
}


