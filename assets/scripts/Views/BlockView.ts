import { _decorator, CCInteger, Color, Component, Node, SpriteRenderer, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BlockView')
export class BlockView extends Component {
    @property(SpriteRenderer)
    private body : SpriteRenderer;

    @property(SpriteRenderer)
    private highlighter : SpriteRenderer;


    get Width() : number {
        return this.node.scale.x * this.body.spriteFrame.width;
    }

    get Height() : number {
        return this.node.scale.y * this.body.spriteFrame.height;
    }

    get Position() : Vec3 {
        return this.node.position;
    }


    public setPosition(x : number, y : number) : void {
        this.node.setPosition(x, y);
    }

    public setColor(color : Color) : void {
        const bodyMat = this.body.getMaterialInstance(0);
        const highlighterMat = this.highlighter.getMaterialInstance(0);

        bodyMat.setProperty('tintColor', color);
        highlighterMat.setProperty('tintColor', new Color(color.r * 0.7, color.g * 0.7, color.b * 0.7, color.a));
    }

    public highlight() : void {
        this.highlighter.node.active = true;
    }

    
}


