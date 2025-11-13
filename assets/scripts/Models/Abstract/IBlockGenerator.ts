import { IEvent } from './../../Utils/Abstract/IEvent';;

export const IBlockGeneratorToken = Symbol('IBlockGenerator');

export interface IBlockGenerator {
    readonly OnBlocksGenerated : IEvent<void>;
}


