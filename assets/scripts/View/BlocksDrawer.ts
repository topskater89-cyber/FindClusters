import { _decorator, Color, Component, instantiate, Node, Prefab, CCInteger, Camera } from 'cc';
import { BlockView } from './BlockView';
import { Block } from '../Model/Block';
import { IEvent } from '../Utils/Abstract/IEvent';
import { Event } from '../Utils/Event';
import { IBlockDrawer } from './Abstract/IBlockDrawer';
import { MarkedBlock } from '../Model/MarkedBlock';


export class BlocksDrawer implements IBlockDrawer {
    private _onDrawingEnded : Event<void>;
    private colorMap : Map<number, Color>;

    private blockView : Prefab;
    private blocksViewsContainer : Node;

    private blockViews : BlockView[][] = [[]];


    public get OnDrawingEnded() : IEvent<void> {
        return this._onDrawingEnded;
    }

    get TotalBlocksWidth(): number {
        const columns = this.blockViews[0].length;

        return this.blockViews[0][0].Width * columns;
    };

    get TotalBlocksHeight(): number {
        const rows = this.blockViews.length;

         return this.blockViews[0][0].Height * rows;
    };

    
    public constructor(blockView : Prefab, blocksViewsContainer: Node, colorMap : Map<number, Color>){
        this._onDrawingEnded = new Event<void>();

        this.blockView = blockView;
        this.blocksViewsContainer = blocksViewsContainer;

        this.colorMap = colorMap;
    }


    public redraw(data: [Block[][], MarkedBlock[]]): void {
        this.clearBlocks();

        this.drawBlocks(data[0]);
        this.drawClusters(data[1]);

        this._onDrawingEnded.invoke();
    }

 
    private drawClusters(clusterizedBlocks : MarkedBlock[]){
         for(let i = 0; i < clusterizedBlocks.length; i++){
            const block = clusterizedBlocks[i];

            this.blockViews[block.Row][block.Column].highlight();
        }
    }


    private clearBlocks() : void {
        const rows = this.blockViews.length;
        const columns = this.blockViews[0].length;

        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {
                this.blockViews[row][column].node.active = false;
                this.blockViews[row][column].destroy();
            }
        }

        this.blockViews = [[]];
    }


    private drawBlocks(blocks: Block[][]) : void{
        const rows = blocks.length;
        const columns = blocks[0].length;

        for (let row = 0; row < rows; row++) {
            this.blockViews[row] = [];

            for (let column = 0; column < columns; column++) {
                const block = blocks[row][column];
                const blockView = this.createBlock(row, column);

                this.placeBlock(blockView, row, column, rows, columns);
                this.colorizeBlock(blockView, block.type);
            }
        }
    }


    private createBlock(row: number, column: number) : BlockView {
        const blockView = instantiate(this.blockView).getComponent(BlockView);

        this.blocksViewsContainer.addChild(blockView.node);
        this.blockViews[row][column] = blockView;

        blockView.setPosition(0,0);

        return blockView; 
    }


    private placeBlock(blockView: BlockView, row: number, column: number, rows: number, columns: number) : void {
        const xShift = columns % 2 == 0 ? columns / 2 - 0.5 :  Math.trunc(columns / 2);
        const yShift = rows % 2 == 0 ? rows / 2 - 0.5 : Math.trunc(rows / 2);;
        const xPos = ((column - xShift) * blockView.Width) / 100;
        const yPos = ((row - yShift) * blockView.Height) / 100;

        blockView.setPosition(xPos, yPos);
    }


    private colorizeBlock(blockView: BlockView, blockType: number) : void {
        const color = this.colorMap.get(blockType);

        blockView.setColor(color);
    }   
}




