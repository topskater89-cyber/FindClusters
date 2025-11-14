import { _decorator, CCInteger, Component, instantiate, Node, Prefab } from 'cc';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { BlocksGenerator } from '../Models/BlocksGenerator';
import { Installer } from './Abstract/Installer';
import { IBlocksGenerator, IBlocksGeneratorToken } from '../Models/Abstract/IBlocksGenerator';
import { BlocksDrawer } from '../Views/BlocksDrawer';

const { ccclass, property } = _decorator;

@ccclass('BlockDrawerInstaller')
export class BlockDrawerInstaller extends Installer {
    @property({type: Prefab,  group: { name: '⚙️ Prefabs' }})
    blockView : Prefab;

    @property(Node)
    blocksViewsContainer : Node;


    public Install(dependencies : IDependenciesContainer): void {      
        const blocksGenerator : IBlocksGenerator = dependencies.get(IBlocksGeneratorToken);  
        const blocksDrawer : BlocksDrawer = new Node().addComponent(BlocksDrawer);
        blocksDrawer.initialize(this.blockView, this.blocksViewsContainer);

        blocksGenerator.OnBlocksGenerated.subscribe(blocksDrawer.drawBlocks.bind(blocksDrawer));

        console.log("Block Drawer Installed");
    }
    
}