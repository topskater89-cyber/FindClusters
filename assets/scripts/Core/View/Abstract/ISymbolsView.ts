import { Cluster } from "../../Model/Structure/Cluster";
import { SymbolsDataMatrix } from "../../Model/Structure/SymbolsDataMatrix";

export interface ISymbolsView {
    highlightCluster(cluster : Cluster) : Promise<void>;
    showSymbols(dataMatrix : SymbolsDataMatrix) : void;
}


