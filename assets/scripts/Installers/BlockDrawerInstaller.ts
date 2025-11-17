import { _decorator, Color, Node, Prefab } from 'cc';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { BlocksGenerator } from '../Models/BlocksGenerator';
import { Installer } from './Abstract/Installer';
import { BlocksDrawer } from '../Views/BlocksDrawer';
import { Clusterizer } from '../Models/Clusterizer';
import { GameData } from '../Data/GameData';

const { ccclass, property } = _decorator;

@ccclass('BlockDrawerInstaller')
export class BlockDrawerInstaller extends Installer {
    @property({type: Prefab,  group: { name: '⚙️ Prefabs' }})
    private blockView : Prefab;

    @property({type: Node,  group: { name: '⚙️ Scene Objects' }})
    private blocksViewsContainer : Node;


    public Install(dependencies : IDependenciesContainer): void {      
        const gameData : GameData = dependencies.get(GameData); 
        const clusterizer : Clusterizer = dependencies.get(Clusterizer);
        const blocksDrawer : BlocksDrawer = new Node().addComponent(BlocksDrawer);

        const colorMap = this.generateColorMap(); 

        blocksDrawer.initialize(this.blockView, this.blocksViewsContainer, colorMap);
        clusterizer.OnClustersFinded.subscribe(blocksDrawer.redrawBlocks.bind(blocksDrawer));

        dependencies.register(BlocksDrawer, blocksDrawer);        

        console.log("Block Drawer Installed");
    }
    

    private generateColorMap(): Map<number, Color> {
        const colorMap : Map<number, Color> = new  Map<number, Color>()
        const DISTINCT_COLORS: Color[] = [
            new Color(230, 25, 75, 255),   // Red
            new Color(60, 180, 75, 255),   // Green
            new Color(255, 225, 25, 255),  // Yellow
            new Color(0, 130, 200, 255),   // Blue
            new Color(245, 130, 48, 255),  // Orange
            new Color(145, 30, 180, 255),  // Purple
            new Color(70, 240, 240, 255),  // Cyan
            new Color(240, 50, 230, 255),  // Magenta
            new Color(210, 245, 60, 255),  // Lime
            new Color(250, 190, 190, 255), // Pink
            new Color(0, 128, 128, 255),   // Teal
            new Color(230, 190, 255, 255), // Lavender
            new Color(170, 110, 40, 255),  // Brown
            new Color(255, 250, 200, 255), // Beige
            new Color(128, 0, 0, 255),     // Maroon
        ];

        for(let i = 0; i < DISTINCT_COLORS.length; i++){
            colorMap.set(i, DISTINCT_COLORS[i]);
        }

        return colorMap;
    }
}