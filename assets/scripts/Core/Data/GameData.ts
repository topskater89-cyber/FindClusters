import { ModelData } from './ModelData';
import { ViewData } from './ViewData';


export class GameData {
    private modelData : ModelData;
    private viewData : ViewData;

    
    public get ModelData() : ModelData {
        return this.modelData;
    }

    public get ViewData() : ViewData {
        return this.viewData;
    }

    
    public constructor(modelData : ModelData, viewData : ViewData){
        this.modelData = modelData;
        this.viewData = viewData;
    }

}


