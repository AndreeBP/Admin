import {
    AGREGAR_DEPARTAMENTO,
    AGREGAR_DEPARTAMENTO_EXITO,
    AGREGAR_DEPARTAMENTO_ERROR,

    COMENZAR_DESCARGA_DEPARTAMENTOS,
    DESCARGA_DEPARTAMENTOS_EXITO,
    DESCARGA_DEPARTAMENTOS_ERROR,

    OBTENER_DEPARTAMENTO_ELIMINAR,
    DEPARTAMENTO_ELIMINADO_EXITO,
    DEPARTAMENTO_ELIMINADO_ERROR

} from '../types';
import Departamento from '../components/Departamento';

//cada reducer tiene su propio state
const initialState ={
    departamentos:[],
    error: null,
    loading: false,
    departamentoeliminar:null
}

export default function(state = initialState, action){
    switch (action.type) {
        case COMENZAR_DESCARGA_DEPARTAMENTOS:
        case AGREGAR_DEPARTAMENTO:
            return{
                ...state,
                loading:action.payload
            }
            case AGREGAR_DEPARTAMENTO_EXITO:
                return{
                    ...state,
                    loading:false,
                    departamentos:[...state.departamentos,action.payload]
                }
                case AGREGAR_DEPARTAMENTO_ERROR:
                case DESCARGA_DEPARTAMENTOS_ERROR:
                case DEPARTAMENTO_ELIMINADO_ERROR:
                    return{
                        ...state,
                        loading: false,
                        error: action.payload
                    }
                    case DESCARGA_DEPARTAMENTOS_EXITO:
                        return{
                            ...state,
                            loading:false,
                            error: null,
                            departamentos: action.payload
                        }
                        case OBTENER_DEPARTAMENTO_ELIMINAR:
                        return{
                            ...state,
                            departamentoeliminar:action.payload
                        }
                        case DEPARTAMENTO_ELIMINADO_EXITO:
                            return {
                                ...state,
                                departamentos: state.departamentos.filter(departamentos => Departamento.id !==
                                    state.departamentoeliminar),
                                    departamentoeliminar: null
                            }

        default:
            return state;

    }
}