/* eslint-disable */ 
    import {assignImportedComponents} from 'react-imported-component';
    const applicationImports = {
      0: () => import('./pages/AboutPage'),
1: () => import('./pages/ContactPage'),
2: () => import('./pages/InteractivePage'),
3: () => import('./pages/BlokSound'),
4: () => import('./pages/BlokMx'),
5: () => import('./pages/BlokWeb'),
6: () => import('./pages/BlokVx'),
7: () => import('./pages/BlokMotion'),
8: () => import('./pages/BlokRx'),
    };
    assignImportedComponents(applicationImports);
    export default applicationImports;