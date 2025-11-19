import { IEvent } from "../../../Utils/Abstract/IEvent";
import { SymbolData } from "../SymbolData";
import { Cluster } from "../Cluster";

export interface ISymbolClusterizer {
    readonly OnClustersFinded : IEvent<void>;
    findClusters(blocks : SymbolData[][]) : Cluster[];
}


