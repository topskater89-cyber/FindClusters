import { IEvent } from "../../../Utils/Abstract/IEvent";
import { MarkedSymbol } from "../Structure/MarkedSymbol";
import { ComputedData } from "../Structure/ComputedData";

export interface IGameModel {
    OnComputeCompleted : IEvent<ComputedData>
    compute();
}
