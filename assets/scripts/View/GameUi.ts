import { Event } from '../Utils/Event';
import { IEvent } from '../Utils/Abstract/IEvent';
import { _decorator, Button, Component, EditBox, Node } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('GameUi')
export class GameUi extends Component {

    @property(Button)
    public StartButton : Button;

    @property(EditBox)
    public RowsEBox : EditBox;

    @property(EditBox)
    public ColumnsEBox : EditBox;

    @property(EditBox)
    public TypesEBox : EditBox;

    @property(EditBox)
    public ClusterSizeEBox : EditBox;

    public OnStartButtonClicked : Event<void>;


    public initialize(canvas : Node) : void {
        this.OnStartButtonClicked = new Event();
        this.StartButton.node.on(Button.EventType.CLICK, () => {this.OnStartButtonClicked.invoke();})

        canvas.addChild(this.node);
    }
}


