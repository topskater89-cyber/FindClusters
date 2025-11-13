import { _decorator, CCInteger, Component, Node } from 'cc';
import { IDIContainer } from '../Utils/Abstract/IDIContainer';
import { BlockGenerator } from '../Models/BlockGenerator';
import { IBlockGeneratorToken } from '../Models/Abstract/IBlockGenerator';
import { Installer } from './Abstract/Installer';
import { ISceneActions, ISceneActionsToken } from '../Other/ISceneActions';

const { ccclass, property } = _decorator;

@ccclass('BlockGeneratorInstaller')
export class BlockGeneratorInstaller extends Installer {

    @property({type: CCInteger,  group: { name: '⚙️ Initial Values' }})
    rowsCount : number = 3;

    @property({type: CCInteger,  group: { name: '⚙️ Initial Values' }})
    columnsCount : number = 3;

    @property({type: CCInteger,  group: { name: '⚙️ Initial Values' }})
    blockTypeCount : number = 3;


    public Install(diContainer : IDIContainer): void {
        const sceneActions : ISceneActions = diContainer.get(ISceneActionsToken);
        const blockGenerator = new BlockGenerator(this.rowsCount, this.columnsCount, this.blockTypeCount);

        sceneActions.OnUserInitiatedBlockGeneration.subscribe(blockGenerator.generateBlocks.bind(blockGenerator));

        diContainer.register(IBlockGeneratorToken, blockGenerator);
        
        console.log("Block Generator Installed");
    }
    
}