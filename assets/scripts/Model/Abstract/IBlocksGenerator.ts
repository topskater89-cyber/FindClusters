import { IEvent } from '../../Utils/Abstract/IEvent';
import { SymbolData } from '../SymbolData';

export interface IBlocksGenerator {
    readonly OnBlocksGenerated: IEvent<void>;

    generateBlocks() : SymbolData[][];
}
