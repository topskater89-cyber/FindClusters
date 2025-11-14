import { _decorator, Color, Component, instantiate, Node, Prefab } from 'cc';
import { BlockView } from './BlockView';
import { Block } from '../Models/Block';
const { ccclass, property } = _decorator;


@ccclass('BlocksDrawer')
export class BlocksDrawer extends Component {
    private blockView : Prefab;
    private blocksViewsContainer : Node;
    private blocks : BlockView[][] = [[]];

    
    public initialize(blockView : Prefab, blocksViewsContainer){
        this.blockView = blockView;
        this.blocksViewsContainer = blocksViewsContainer;
    }


    public drawBlocks(blocks: Block[][]) : void{
        this.clearBlocks();
        this.createBlocks(blocks);
    }


    public drawClusters(){

    }


    private clearBlocks() : void {
        const rows = this.blocks.length;
        const columns = this.blocks[0].length;

        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {
                this.blocks[row][column].destroy();
            }
        }
    }


    private createBlocks(blocks: Block[][]) : void {
        const rows = blocks.length;
        const columns = blocks[0].length;

        for (let row = 0; row < rows; row++) {
            this.blocks[row] = [];

            for (let column = 0; column < columns; column++) {
                const blockView = instantiate(this.blockView).getComponent(BlockView);

                this.blocksViewsContainer.addChild(blockView.node);
                this.blocks[row][column] = blockView;
            }
        }
    }


    private placeBlocks() : void {
        const rows = this.blocks.length;
        const columns = this.blocks[0].length;

        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {
                const blockView = this.blocks[row][column];

                blockView.setPosition(row * blockView.Width, column*blockView.Height);
            }
        }

        //blockView.setColor(this.getRandomColor());
    }


    private getRandomColor(): Color {
        return new Color(
            Math.random() * 255,
            Math.random() * 255,
            Math.random() * 255
        );
    }
}




