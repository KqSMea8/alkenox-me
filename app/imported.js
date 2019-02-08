/* eslint-disable */ 
    import {assignImportedComponents} from 'react-imported-component';
    const applicationImports = {
      0: () => import('./pages/ContentCreation'),
1: () => import('./pages/VideoProduction'),
2: () => import('./pages/InteractiveMedia'),
3: () => import('./pages/SoundDesign'),
4: () => import('./pages/MusicProduction'),
5: () => import('./pages/WebDesign'),
6: () => import('./pages/MotionGraphics'),
7: () => import('./pages/AudioVisualRx'),
8: () => import('./pages/About'),
9: () => import('./pages/Contact'),
    };
    assignImportedComponents(applicationImports);
    export default applicationImports;