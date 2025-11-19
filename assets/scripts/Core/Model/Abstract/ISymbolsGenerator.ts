import { IEvent } from '../../../Utils/Abstract/IEvent';
import { SymbolData } from '../SymbolData';

export interface ISymbolsGenerator {
    readonly OnBlocksGenerated: IEvent<void>;

    generateBlocks() : SymbolData[][];
}
