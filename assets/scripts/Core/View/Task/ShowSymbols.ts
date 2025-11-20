import { IEvent } from '../../../Utils/Abstract/IEvent';
import { Event } from '../../../Utils/Event';
import { ISymbolsView } from '../Abstract/ISymbolsView';
import { ITask } from '../Abstract/ITask';
import { SymbolsDataMatrix } from '../../Model/Structure/SymbolsDataMatrix';

export class ShowSymbols implements ITask {

    private dataMatrix : SymbolsDataMatrix;
    private symbolsView : ISymbolsView;
    private _onCompleted : Event<void>;

    public get OnCompleted(): IEvent<void> {
        return this._onCompleted;
    }

    public constructor(dataMatrix : SymbolsDataMatrix, symbolsView : ISymbolsView) {
        this._onCompleted = new Event<void>();

        this.dataMatrix = dataMatrix;
        this.symbolsView = symbolsView;
    }
 
    public async run() {
        return this.symbolsView.showSymbols(this.dataMatrix);
    }
}


