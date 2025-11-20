import { IDependenciesContainer } from '../../../Utils/Abstract/IDependenciesContainer';


export interface IInstaller {
    Install(diContainer: IDependenciesContainer);
}
