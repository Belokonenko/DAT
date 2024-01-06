import del from 'del';
import { filePaths } from '../config/paths.js';

const reset = () => {
    return del(filePaths.buildFolder)};

export { reset };
