import { _decorator, Component, director, ISchedulable, Node } from 'cc';
import { IDelay } from './Abstract/IDelay';
const { ccclass, property } = _decorator;

@ccclass('Delay')
export class Delay extends Component implements IDelay {
    public delay(seconds: number, callback: () => void) {
        this.scheduleOnce(callback, seconds);
    }
}


