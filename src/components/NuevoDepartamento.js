import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NavLateral from '../LateralAdmin/navLateral';
//Actions de redux
import {crearNuevoDepartamentoAction} from '../actions/departamentoActions';

const NuevoDepartamento = ({history}) => {

    //state del componente
    const [nombre,guardarNombre]=useState('');
    const [imagen,guardarPrecio]=useState('');
    const [descripcion,guardarDescripcion]=useState('');
    const [poblacion,guardarPoblacion]=useState('');



    //utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //acceder al state del store
    const cargando=useSelector( state => state.departamentos.loading);
    const error = useSelector(state => state.departamentos.error);

    console.log(cargando);

    //mandar llamar e l action
    const agregarDepartamento = departamento => dispatch(crearNuevoDepartamentoAction(departamento));

    //Cuando el usuario haga submit
    const onSubmitNuevoDepartamento = e => {
        e.preventDefault();

        //valdiar formulario
        if(nombre.trim === '' || imagen.trim  === '' || descripcion.trim === '' || poblacion.trim === '' ){
            return;
        }

        //si hay errores

        //crear el nuevo producto
        agregarDepartamento({
            nombre,
            imagen,
            descripcion,
            poblacion
        });

        //redireccionar al home
        history.push('/departamentos');


    }
    return(
        <div className="wrapper">
            <NavLateral/>
            <div className="main_content">
            <div className="info"></div>
        <div className="row justify-content-center"> 
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Registrar Nuevo Departamento

                        </h2>

                        <form
                            onSubmit={onSubmitNuevoDepartamento}
                        >
                            <div className="form-group">
                                <label>Nombre</label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre Producto" 
                                name="nombre" 
                                value={nombre}                                                        
                                onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Imagen</label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Imagen"   
                                name="precio" 
                                value={imagen}                                                        
                                onChange={e => guardarPrecio(e.target.value)}                                                         
                                />
                            </div>

                            <div className="form-group">
                                <label>Descripción</label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Descripción"   
                                name="descripcion" 
                                value={descripcion}                                                        
                                onChange={e => guardarDescripcion(e.target.value)}                                                         
                                />
                            </div>

                            <div className="form-group">
                                <label>Población</label>
                                <input 
                                type="number"
                                className="form-control"
                                placeholder="Población"   
                                name="poblacion" 
                                value={poblacion}                                                        
                                onChange={e => guardarPoblacion(e.target.value)}                                                         
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
    );
}

export default NuevoDepartamento;