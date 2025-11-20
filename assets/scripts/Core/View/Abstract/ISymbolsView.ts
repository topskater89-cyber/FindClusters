import { Cluster } from "../../Model/Structure/Cluster";
import { SymbolsDataMatrix } from "../../Model/Structure/SymbolsDataMatrix";

export interface ISymbolsView {
    highlightCluster(cluster : Cluster) : void;
    showSymbols(dataMatrix : SymbolsDataMatrix) : void;
}


