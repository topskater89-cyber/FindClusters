import { Event } from '../Utils/Event';
import { IEvent } from '../Utils/Abstract/IEvent';
import { _decorator, Button, Component, Node } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('GameUi')
export class GameUi extends Component {

    @property(Button)
    private startButton : Button;

    private _onStartButtonClicked : Event<void>;


    public get OnStartButtonClicked() : IEvent<void>{
        return this._onStartButtonClicked;
    };

    public initialize() : void {
        this._onStartButtonClicked = new Event();

        this.startButton.node.on(Button.EventType.CLICK, () => {this._onStartButtonClicked.invoke();})
    }
}


