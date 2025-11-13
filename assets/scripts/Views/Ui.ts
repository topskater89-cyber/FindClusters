import { _decorator, Button, Component, Node } from 'cc';
import { Event } from '../Utils/Event';
import { IEvent } from '../Utils/Abstract/IEvent';

const { ccclass, property } = _decorator;


export const UiToken = Symbol("Ui");

@ccclass('Ui')
export class Ui extends Component {

    @property(Button)
    private startButton : Button;


    public initialize(startButtonCallback : Function) : void {
        this.startButton.node.on(Button.EventType.CLICK, startButtonCallback);
    }
}


