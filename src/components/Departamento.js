import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

//REDUX
import {useDispatch} from 'react-redux';
import {borrarDepartamentoAction} from '../actions/departamentoActions';

const Departamento = ({departamento}) => {
    const {nombre,imagen,descripcion,poblacion,id}= departamento;

    const dispatch = useDispatch();

    //COnfirmar si desea eliminar
    const confirmarEliminarDepartamento = id => {
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
                dispatch(borrarDepartamentoAction(id));
            }
          });
    }


    return(
        <tr>
            <td>{nombre}</td>
            <td>{imagen}</td>
            <td>{descripcion}</td>
            <td>{poblacion}</td>
            <td className="acciones">
                <Link to={`/departamentos/editar/${id}`} className="btn btn-primary mr-2">
                    editar
                </Link>
                <button
                type="button"
                className="btn btn-danger"
                onClick={() => confirmarEliminarDepartamento(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Departamento;