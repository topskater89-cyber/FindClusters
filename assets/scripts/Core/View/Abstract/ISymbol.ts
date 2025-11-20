import { Vec2 } from "cc";

export interface ISymbol {
    Width : number;
    Height : number;
    Position : Vec2;

    highlight(callback?: () => void) : void;
    remove(): void;
}


