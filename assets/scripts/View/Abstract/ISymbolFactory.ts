import { ISymbol } from "./ISymbol";

export interface ISymbolFactory {
    create(type : string): ISymbol;
}


