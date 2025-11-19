import { _decorator, Color, Node, Prefab, view } from 'cc';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { Installer } from './Abstract/Installer';
import { SymbolsView } from '../View/SymbolsView';
import { GameModel } from '../Model/GameModel';
import { SymbolFactory } from '../View/SymbolFactory';
import { ViewData } from '../Data/ViewData';

const { ccclass, property } = _decorator;

@ccclass('Symbols View Installer')
export class SymbolsViewInstaller extends Installer {
    @property({type: Node,  group: { name: '⚙️ Scene Objects' }})
    private symbolsContainer : Node;


    public Install(dependencies : IDependenciesContainer): void {       
        const gameModel : GameModel = dependencies.get(GameModel);
        const viewData : ViewData = dependencies.get(ViewData);

        const symbolsFactory = new SymbolFactory(viewData.SymbolPrefabs, this.symbolsContainer);
        const symbolsView : SymbolsView = new SymbolsView(symbolsFactory);

        gameModel.OnComputeCompleted.subscribe(symbolsView.redraw.bind(symbolsView));

        dependencies.register(SymbolsView, symbolsView);        
        console.log("Symbols View Installed");
    }
}