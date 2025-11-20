import { Event } from '../../Utils/Event';
import { IEvent } from '../../Utils/Abstract/IEvent';
import { _decorator, Button, Component, EditBox, Node } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('DebugUi')
export class DebugUi extends Component {

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


    public initialize(canvas : Node, onTasksEnded : IEvent<void>) : void {
        this.OnStartButtonClicked = new Event();
        this.StartButton.node.on(Button.EventType.CLICK, () => {
            this.OnStartButtonClicked.invoke();
            this.disable();
        })

        onTasksEnded.subscribe(this.enable.bind(this));

        canvas.addChild(this.node);
    }

    private disable() {
        this.StartButton.enabled = false;
        this.RowsEBox.enabled = false;
        this.ColumnsEBox.enabled = false;
        this.TypesEBox.enabled = false;
        this.ClusterSizeEBox.enabled = false;
    }

    private enable() {
        this.StartButton.enabled = true;
        this.RowsEBox.enabled = true;
        this.ColumnsEBox.enabled = true;
        this.TypesEBox.enabled = true;
        this.ClusterSizeEBox.enabled = true;
    }
}


