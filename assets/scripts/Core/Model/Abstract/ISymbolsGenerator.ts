import { IEvent } from '../../../Utils/Abstract/IEvent';
import { SymbolData } from '../Structure/SymbolData';

export interface ISymbolsGenerator {
    readonly OnBlocksGenerated: IEvent<void>;

    generateSymbols() : SymbolData[][];
}
