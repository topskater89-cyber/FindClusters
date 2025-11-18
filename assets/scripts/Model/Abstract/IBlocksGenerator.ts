import { IEvent } from '../../Utils/Abstract/IEvent';
import { Block } from '../Block';

export interface IBlocksGenerator {
    readonly OnBlocksGenerated: IEvent<void>;

    generateBlocks() : Block[][];
}
