import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR,

    COMENZAR_DESCARGA_USUARIOS,
    DESCARGA_USUARIOS_EXITO,
    DESCARGA_USUARIOS_ERROR,

    OBTENER_USUARIO_ELIMINAR,
    USUARIO_ELIMINADO_EXITO,
    USUARIO_ELIMINADO_ERROR
} from '../types';
import Usuario from '../components/Usuario';

//cada reducer tiene su propio state
const initialState ={
    usuarios:[],
    error: null,
    loading: false,
    usuarioeliminar:null
}

export default function(state = initialState, action){
    switch (action.type) {
        case COMENZAR_DESCARGA_USUARIOS:
        case AGREGAR_USUARIO:
            return{
                ...state,
                loading:action.payload
            }
            case AGREGAR_USUARIO_EXITO:
                return{
                    ...state,
                    loading:false,
                    usuarios:[...state.usuarios,action.payload]
                }
                case AGREGAR_USUARIO_ERROR:
                case DESCARGA_USUARIOS_ERROR:
                case USUARIO_ELIMINADO_ERROR:
                    return{
                        ...state,
                        loading: false,
                        error: action.payload
                    }
                    case DESCARGA_USUARIOS_EXITO:
                        return{
                            ...state,
                            loading:false,
                            error: null,
                            usuarios: action.payload
                        }
                        case OBTENER_USUARIO_ELIMINAR:
                        return{
                            ...state,
                            usuarioeliminar:action.payload
                        }
                        case USUARIO_ELIMINADO_EXITO:
                            return {
                                ...state,
                                usuarios: state.usuarios.filter(usuarios => Usuario.id !==
                                    state.usuarioeliminar),
                                    usuarioeliminar: null
                            }

        default:
            return state;

    }
}