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
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//--------------------------------------------------------------------------

//CREAR unuevos productos
export function crearNuevoDepartamentoAction(departamento){
    return(dispatch) => {
        dispatch(agregarDepartamento() );

        try{
            //insertar en la API
            clienteAxios.post('/departamentos',departamento);

            //si todo sale bien, actualiza el state
            dispatch(agregarDepartamentoExito(departamento) );


            //Alerta
            Swal.fire(
                'Correcto',
                'El departamento se registro correctamente',
                'success'

            )
        }catch(error){
            console.log(error);
            dispatch(agregarDepartamentoError(true));

            //alerta de error
            Swal.fire({
                icon:'error',
                title: 'Hubo un error',
                text:'Hubo un error, intente de nuevo'
            })
        }

    }
}

const agregarDepartamento = () => ({
    type: AGREGAR_DEPARTAMENTO,
    payload:true
})

//si el producto se guarda en la base de datos
const agregarDepartamentoExito = departamento =>({
    type: AGREGAR_DEPARTAMENTO_EXITO,
    payload: departamento
})

//si hubo error
const agregarDepartamentoError = estado => ({
    type: AGREGAR_DEPARTAMENTO_ERROR,
    payload:estado

})

//-------------------------------------------------------------------

//Funcion que descarga los productos de la BD
export function obtenerDepartamentoAction(){
    return async (dispatch) => {
        dispatch( descargarDepartamentos() );

        try{
            const respuesta = await clienteAxios.get('/departamentos');
            dispatch(descargarDepartamentosExitosa(respuesta.data))

        }catch (error){
            console.log(error);
            dispatch(descargarDepartamentosError())

        }
    }

}

const descargarDepartamentos = () => ({
    type: COMENZAR_DESCARGA_DEPARTAMENTOS,
    payload: true
});

const descargarDepartamentosExitosa = departamento => ({
    type: DESCARGA_DEPARTAMENTOS_EXITO,
    payload: departamento
})

const descargarDepartamentosError = () => ({
    type: DESCARGA_DEPARTAMENTOS_ERROR,
    payload:true
})

//-----------------------------------------------------------------------

//Selecciona y elimina el departamento
export function borrarDepartamentoAction(id){
    return async(dispatch)=>{
        dispatch(obtenerDepartamentoEliminar(id));

        try{
            await clienteAxios.delete(`/departamentos/${id}`);
            dispatch(eliminarDepartamentoExito() );

            //si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado!',
                'El Departamento se elimino correctamente.',
                'success'
            )

        }catch(error){
            console.log(error);
            dispatch(eliminarDepartamentoError());

        }


    }
}

 const obtenerDepartamentoEliminar = id => ({
    type: OBTENER_DEPARTAMENTO_ELIMINAR,
    payload: id
})

const eliminarDepartamentoExito = () => ({
    type: DEPARTAMENTO_ELIMINADO_EXITO
})

const eliminarDepartamentoError = () => ({
    type: DEPARTAMENTO_ELIMINADO_ERROR,
    payload: true
})