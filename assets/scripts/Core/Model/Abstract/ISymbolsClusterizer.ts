import { IEvent } from "../../../Utils/Abstract/IEvent";
import { SymbolData } from "../Structure/SymbolData";
import { Cluster } from "../Structure/Cluster";

export interface ISymbolClusterizer {
    readonly OnClustersFinded : IEvent<void>;
    findClusters(blocks : SymbolData[][]) : Cluster[];
}


