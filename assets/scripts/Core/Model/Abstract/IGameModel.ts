import { IEvent } from "../../../Utils/Abstract/IEvent";
import { MarkedSymbol } from "../MarkedSymbol";
import { ComputedData } from "../ComputedData";

export interface IGameModel {
    OnComputeCompleted : IEvent<ComputedData>
    compute();
}
