import { IEvent } from '../../Utils/Abstract/IEvent';
import { Block } from '../Block';

export const IBlocksGeneratorToken = Symbol('IBlocksGeneratorToken');

export interface IBlocksGenerator {
    readonly OnBlocksGenerated: IEvent<Block[][]>;

    generateBlocks() : void;
}
