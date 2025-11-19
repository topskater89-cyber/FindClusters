import { IEvent } from "../../Utils/Abstract/IEvent";
import { MarkedBlock } from "../MarkedBlock";
import { SymbolsData } from "../SymbolsData";

export interface IGameModel {
    OnComputeCompleted : IEvent<[SymbolsData, MarkedBlock[]]>
    compute();
}
