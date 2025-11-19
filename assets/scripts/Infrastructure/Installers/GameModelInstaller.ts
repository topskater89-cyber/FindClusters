import { _decorator, CCInteger, game } from 'cc';
import { IDependenciesContainer } from '../../Utils/Abstract/IDependenciesContainer';
import { SymbolsGenerator } from '../../Core/Model/SymbolsGenerator';
import { Installer } from './Abstract/Installer';
import { SymbolsClusterizer } from '../../Core/Model/SymbolsClusterizer';
import { GameModel } from '../../Core/Model/GameModel';
import { ModelData } from '../../Core/Data/ModelData';

const { ccclass, property } = _decorator;

@ccclass('Game Model Installer')
export class GameModelInstaller extends Installer {

    public Install(dependencies : IDependenciesContainer): void {        
        const modelData = dependencies.get(ModelData);

        const blocksGenerator = new SymbolsGenerator(modelData);
        const blocksClusterizer = new SymbolsClusterizer(modelData);
        const gameModel = new GameModel(blocksGenerator, blocksClusterizer);

        dependencies.register(GameModel, gameModel);
        console.log("Game Model Installed");
    }
    
}