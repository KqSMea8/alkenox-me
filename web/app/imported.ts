/* eslint-disable */ 
    import {assignImportedComponents} from 'react-imported-component';
    const applicationImports = {
      0: () => import('./pages/AboutPage'),
1: () => import('./pages/ContactPage'),
2: () => import('./pages/BlokSound'),
3: () => import('./pages/BlokMx'),
4: () => import('./pages/BlokWeb'),
5: () => import('./pages/BlokVx'),
6: () => import('./pages/BlokMotion'),
7: () => import('./pages/BlokInteractive'),
8: () => import('./pages/BlokRx'),
    };
    assignImportedComponents(applicationImports);
    export default applicationImports;