import { IEvent } from "../../Utils/Abstract/IEvent";
import { SymbolData } from "../SymbolData";
import { MarkedBlock } from "../MarkedBlock";

export interface IGameModel {
    OnComputeCompleted : IEvent<[SymbolData[][], MarkedBlock[]]>
    compute();
}
