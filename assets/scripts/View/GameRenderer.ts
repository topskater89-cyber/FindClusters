import { Camera } from "cc";
import { IBlockDrawer } from "./Abstract/IBlockDrawer";

export class GameRenderer {
    readonly REFERENCED_SIDE_LENGHT : number = 1200;
    readonly REFERENCED_ORTHO : number = 10;

    private gameCamera : Camera;
    private blocksDrawer : IBlockDrawer;

    public constructor(gameCamera : Camera, blocksDrawer : IBlockDrawer){
        this.gameCamera = gameCamera;
        this.blocksDrawer = blocksDrawer;
    }

    public updateCamera(): void {
        const maxSideLenght = this.blocksDrawer.TotalBlocksHeight >= this.blocksDrawer.TotalBlocksWidth ? 
            this.blocksDrawer.TotalBlocksHeight : this.blocksDrawer.TotalBlocksWidth
            
        this.gameCamera.orthoHeight = this.REFERENCED_ORTHO * (maxSideLenght / this.REFERENCED_SIDE_LENGHT);
    }
}


