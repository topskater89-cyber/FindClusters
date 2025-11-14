import { _decorator, CCInteger, Component, Node } from 'cc';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { BlocksGenerator } from '../Models/BlocksGenerator';
import { Installer } from './Abstract/Installer';
import { IBlocksGeneratorToken } from '../Models/Abstract/IBlocksGenerator';
import { SceneUi, SceneUiToken } from '../Views/SceneUi';

const { ccclass, property } = _decorator;

@ccclass('BlockGeneratorInstaller')
export class BlockGeneratorInstaller extends Installer {

    @property({type: CCInteger,  group: { name: '⚙️ Initial Values' }})
    rowsCount : number = 3;

    @property({type: CCInteger,  group: { name: '⚙️ Initial Values' }})
    columnsCount : number = 3;

    @property({type: CCInteger,  group: { name: '⚙️ Initial Values' }})
    blockTypeCount : number = 3;


    public Install(dependencies : IDependenciesContainer): void {        
        const blockGenerator = new BlocksGenerator(this.rowsCount, this.columnsCount, this.blockTypeCount);

        dependencies.register(IBlocksGeneratorToken, blockGenerator);
        console.log("Block Generator Installed");
    }
    
}