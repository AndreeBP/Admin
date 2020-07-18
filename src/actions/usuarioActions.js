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
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//--------------------------------------------------------------------------

//CREAR unuevos productos
export function crearNuevoUsuarioAction(usuario){
    return(dispatch) => {
        dispatch(agregarUsuario() );

        try{
            //insertar en la API
            clienteAxios.post('/usuarios',usuario);

            //si todo sale bien, actualiza el state
            dispatch(agregarUsuarioExito(usuario) );


            //Alerta
            Swal.fire(
                'Correcto',
                'El usuario se registro correctamente',
                'success'

            )
        }catch(error){
            console.log(error);
            dispatch(agregarUsuarioError(true));

            //alerta de error
            Swal.fire({
                icon:'error',
                title: 'Hubo un error',
                text:'Hubo un error, intente de nuevo'
            })
        }

    }
}

const agregarUsuario = () => ({
    type: AGREGAR_USUARIO,
    payload:true
})

//si el producto se guarda en la base de datos
const agregarUsuarioExito = usuario =>({
    type: AGREGAR_USUARIO_EXITO,
    payload: usuario
})

//si hubo error
const agregarUsuarioError = estado => ({
    type: AGREGAR_USUARIO_ERROR,
    payload:estado

})

//-------------------------------------------------------------------

//Funcion que descarga los productos de la BD
export function obtenerUsuariosAction(){
    return async (dispatch) => {
        dispatch(descargarUsuarios() );

        try{
            const respuesta = await clienteAxios.get('/usuarios');
            dispatch(descargarUsuariosExitosa(respuesta.data))

        }catch (error){
            console.log(error);
            dispatch(descargarUsuariosError())

        }
    }

}

const descargarUsuarios = () => ({
    type: COMENZAR_DESCARGA_USUARIOS,
    payload: true
});

const descargarUsuariosExitosa = usuario => ({
    type: DESCARGA_USUARIOS_EXITO,
    payload: usuario
})

const descargarUsuariosError = () => ({
    type: DESCARGA_USUARIOS_ERROR,
    payload:true
})

//-----------------------------------------------------------------------

//Selecciona y elimina el producto
export function borrarUsuarioAction(id){
    return async(dispatch)=>{
        dispatch(obtenerUsuarioEliminar(id));

        try{
            await clienteAxios.delete(`/usuarios/${id}`);
            dispatch(eliminarUsuarioExito() );

            //si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado!',
                'El producto de elimino correctamente.',
                'success'
            )

        }catch(error){
            console.log(error);
            dispatch(eliminarUsuarioError());

        }


    }
}

 const obtenerUsuarioEliminar = id => ({
    type: OBTENER_USUARIO_ELIMINAR,
    payload: id
})

const eliminarUsuarioExito = () => ({
    type: USUARIO_ELIMINADO_EXITO
})

const eliminarUsuarioError = () => ({
    type: USUARIO_ELIMINADO_ERROR,
    payload: true
})