import { IEvent } from "../../Utils/Abstract/IEvent";
import { SymbolData } from "../SymbolData";
import { MarkedBlock } from "../MarkedBlock";

export interface IBlocksClusterizer {
    readonly OnClustersFinded : IEvent<void>;
    findClusters(blocks : SymbolData[][]) : MarkedBlock[];
}


