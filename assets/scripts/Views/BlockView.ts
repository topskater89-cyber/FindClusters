import { _decorator, CCInteger, Color, Component, Node, SpriteRenderer } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BlockView')
export class BlockView extends Component {
    @property(SpriteRenderer)
    renderer : SpriteRenderer;

    get Width() : number {
        return this.node.scale.x;
    }

    get Height() : number {
        return this.node.scale.y;
    }


    public setPosition(x : number, y : number) : void {
        this.node.setPosition(x, y);
    }

    public setColor(color : Color) : void {
        const mat = this.renderer.getMaterialInstance(0);
        mat.setProperty('tintColor', new Color(color.r, color.b, color.g, 255));
    }

    
}


