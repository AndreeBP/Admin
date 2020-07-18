import {combineReducers} from 'redux';
import productosReducer from './productosReducer';
import departamentosReducers from './departamentosReducers';
import usuariosReducer from './usuariosReducer';

export default combineReducers({
    productos: productosReducer,
    departamentos: departamentosReducers,
    usuarios: usuariosReducer
})