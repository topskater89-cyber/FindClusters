import { IEvent } from "../../Utils/Abstract/IEvent";
import { Block } from "../Block";
import { MarkedBlock } from "../MarkedBlock";

export interface IGameModel {
    OnComputeCompleted : IEvent<[Block[][], MarkedBlock[]]>
    compute();
}
