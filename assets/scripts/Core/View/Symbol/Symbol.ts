import { _decorator, Component, UITransform, Vec2, Vec3, sp, CCString } from 'cc';
import { ISymbol } from './Abstract/ISymbol';

const { ccclass, property } = _decorator;

@ccclass('Symbol')
export class Symbol extends Component implements ISymbol {
    @property(UITransform)
    private body : UITransform;

    @property(sp.Skeleton)
    private spine : sp.Skeleton;

    @property(CCString)
    private type : string;


    public get Width() : number { return this.body.width; };
    public set Width(width : number) { 
        this.body.width = width; 
    };

    public get Height() : number { return this.body.height; };
    public set Height(height : number) { 
        this.body.height = height; 
    };

    public get Position() : Vec2 { return new Vec2(this.body.node.position.x, this.body.node.position.y); };
    public set Position(position : Vec2) {
        this.body.node.position = new Vec3(position.x, position.y, this.body.node.position.z); 
    };

    public get Type(): string { return this.type; }

    
    public highlight() : void {
        this.spine.setAnimation(0, 'win');
    }
    
    public remove() : void {
        this.node.destroy();
    }

    
}


