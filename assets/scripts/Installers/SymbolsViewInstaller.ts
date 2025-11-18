import { _decorator, Color, Node, Prefab } from 'cc';
import { IDependenciesContainer } from '../Utils/Abstract/IDependenciesContainer';
import { Installer } from './Abstract/Installer';
import { SymbolsView } from '../View/SymbolsView';
import { GameModel } from '../Model/GameModel';
import { SymbolFactory } from '../View/SymbolFactory';
import { ISymbolFactory } from '../View/Abstract/ISymbolFactory';

const { ccclass, property } = _decorator;

@ccclass('Symbols View Installer')
export class SymbolsViewInstaller extends Installer {
    @property({type: Prefab,  group: { name: '⚙️ Prefabs' }})
    private symbol : Prefab;

    @property({type: Node,  group: { name: '⚙️ Scene Objects' }})
    private symbolsContainer : Node;


    public Install(dependencies : IDependenciesContainer): void {       
        const gameModel : GameModel = dependencies.get(GameModel);
        const symbolFactory = this.createSymbolsFactory();
        const symbolsView : SymbolsView = new SymbolsView(symbolFactory);

        gameModel.OnComputeCompleted.subscribe(symbolsView.redraw.bind(symbolsView));

        dependencies.register(SymbolsView, symbolsView);        
        console.log("Blocks Drawer Installed");
    }


    private createSymbolsFactory() : ISymbolFactory {
        let symbolFactory = new SymbolFactory();

        return symbolFactory;
    }
}