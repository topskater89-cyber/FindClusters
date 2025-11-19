import { _decorator, Color, Node, Prefab, view } from 'cc';
import { IDependenciesContainer } from '../../Utils/Abstract/IDependenciesContainer';
import { Installer } from './Abstract/Installer';
import { GameModel } from '../../Core/Model/GameModel';
import { ViewData } from '../../Core/Data/ViewData';
import { SymbolsView } from '../../Core/View/Symbol/SymbolsView';
import { SymbolFactory } from '../../Core/View/Symbol/SymbolFactory';

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

        gameModel.OnComputeCompleted.subscribe(symbolsView.drawField.bind(symbolsView));

        dependencies.register(SymbolsView, symbolsView);        
        console.log("Symbols View Installed");
    }
}