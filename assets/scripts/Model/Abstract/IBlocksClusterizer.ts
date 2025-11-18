import { IEvent } from "../../Utils/Abstract/IEvent";
import { Block } from "../Block";
import { MarkedBlock } from "../MarkedBlock";

export interface IBlocksClusterizer {
    readonly OnClustersFinded : IEvent<void>;
    findClusters(blocks : Block[][]) : MarkedBlock[];
}


