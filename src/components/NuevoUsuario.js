import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NavLateral from '../LateralAdmin/navLateral';
//Actions de redux
import {crearNuevoUsuarioAction} from '../actions/usuarioActions';


const NuevoUsuario = ({history}) => {

    //state del componente
    const [nombre,guardarNombre]=useState('');
    const [apellidos,guardarApellidos]=useState('');
    const [correo,guardarCorreo]=useState('');
    const [contraseña,guardarContraseña]=useState('');



    //utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //acceder al state del store
    const cargando=useSelector( state => state.usuarios.loading);
    const error = useSelector(state => state.usuarios.error);

    console.log(cargando);

    //mandar llamar e l action
    const agregarUsuario = usuario => dispatch(crearNuevoUsuarioAction(usuario));

    //Cuando el usuario haga submit
    const onSubmitNuevoUsuario = e => {
        e.preventDefault();

        //valdiar formulario
        if(nombre.trim === '' || apellidos.trim  === '' || correo.trim === '' || contraseña.trim === '' ){
            return;
        }

        //si hay errores

        //crear el nuevo producto
        agregarUsuario({
            nombre,
            apellidos,
            correo,
            contraseña
        });

        //redireccionar al home
        history.push('/usuarios');


    }
    return(
        <div className="wrapper">
            <NavLateral/>
            <div className="main_content">
            <div className="info">
        <div className="row justify-content-center">         

            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Registrar Nuevo Usuario

                        </h2>

                        <form
                            onSubmit={onSubmitNuevoUsuario}
                        >
                            <div className="form-group">
                                <label>Nombre</label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre" 
                                name="nombre" 
                                value={nombre}                                                        
                                onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Apellidos</label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Apellidos"   
                                name="Apellidos" 
                                value={apellidos}                                                        
                                onChange={e => guardarApellidos(e.target.value)}                                                         
                                />
                            </div>

                            <div className="form-group">
                                <label>Correo</label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"   
                                name="Correo" 
                                value={correo}                                                        
                                onChange={e => guardarCorreo(e.target.value)}                                                         
                                />
                            </div>

                            <div className="form-group">
                                <label>Contraseña</label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Contraseña"   
                                name="Contraseña" 
                                value={contraseña}                                                        
                                onChange={e => guardarContraseña(e.target.value)}                                                         
                                />
                            </div>

                            <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"

                            >Agregar

                            </button>

                        </form>

                        { cargando ? <p>Cargando...</p> : null}
                        { error ? <p className="alert alert-danger p2">Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default NuevoUsuario;