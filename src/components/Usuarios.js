import React, {Fragment, useEffect} from 'react';
import NavLateral from '../LateralAdmin/navLateral';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import {obtenerUsuariosAction} from '../actions/usuarioActions';
import Usuario from './Usuario';

const Usuarios = () => {

    const dispatch = useDispatch();

    useEffect( ()=>{

        //consultar la api
        const cargarUsuarios = () => dispatch (obtenerUsuariosAction() );
        cargarUsuarios();
    }, []);

    //obtener el state
    const usuarios= useSelector(state => state.usuarios.usuarios);
    const error = useSelector(state => state.usuarios.error);


    return(
        <Fragment>
            <div className="wrapper"> 
            <NavLateral/>
        <div className="main_content">
        <div className="info">

        <a href="/usuarios/nuevo" className="btn btn-danger nuevo-post d-block 
        d-md-inLine-block">Registrar Nuevo Usuario &#43;</a>


            <h2 className="text-center">Lista de Usuarios</h2>

            {error ? <p className="font-weight-bold alert alert-danger 
            text-center ">Hubo un error</p>: null}


            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Contraseña</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {usuarios.length === 0 ? 'No hay productos' : (
                        usuarios.map(usuario => (
                            <Usuario 
                            key={usuario.id}
                            usuario={usuario}                                                
                            />
                        ))
                        
                    )}
                </tbody>
            </table>
            </div>
            </div>
            </div>
        </Fragment>


    );
}

export default Usuarios;