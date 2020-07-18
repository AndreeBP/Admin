import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

//REDUX
import {useDispatch} from 'react-redux';
import {borrarProductoAction} from '../actions/productoActions';

const Producto = ({producto}) => {
    const {nombre,imagen,descripcion,direccion,horario,id}= producto;

    const dispatch = useDispatch();

    //COnfirmar si desea eliminar
    const confirmarEliminarProducto = id => {
        //preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Este registro no se podra recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, deseo eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {

                //pasarlo al accion
                dispatch(borrarProductoAction(id));
            }
          });
    }


    return(
        <tr>
            <td>{nombre}</td>
            <td>{imagen}</td>
            <td>{descripcion}</td>
            <td>{direccion}</td>
            <td>{horario}</td>

            <td className="acciones">
                <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
                    editar
                </Link>
                <button
                type="button"
                className="btn btn-danger"
                onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Producto;