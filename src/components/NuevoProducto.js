import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NavLateral from '../LateralAdmin/navLateral';
//Actions de redux
import {crearNuevoProductoAction} from '../actions/productoActions';

const NuevoProducto = ({history}) => {

    //state del componente
    const [nombre,guardarNombre]=useState('');
    const [imagen,guardarPrecio]=useState('');
    const [descripcion,guardarDescripcion]=useState('');
    const [direccion,guardarDireccion]=useState('');
    const [horario,guardarHorario]=useState('');


    //utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    //acceder al state del store
    const cargando=useSelector( state => state.productos.loading);
    const error = useSelector(state => state.productos.error);

    console.log(cargando);

    //mandar llamar e l action
    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto));

    //Cuando el usuario haga submit
    const onSubmitNuevoProducto = e => {
        e.preventDefault();

        //valdiar formulario
        if(nombre.trim === '' || imagen.trim  === '' || descripcion.trim === '' || direccion.trim === '' || horario.trim === ''){
            return;
        }

        //si hay errores

        //crear el nuevo producto
        agregarProducto({
            nombre,
            imagen,
            descripcion,
            direccion,
            horario
        });

        //redireccionar al home
        history.push('/');


    }
    return(
        <div className="row justify-content-center"> 
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Registrar Nuevo Lugar

                        </h2>

                        <form
                            onSubmit={onSubmitNuevoProducto}
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
                                <label>Dirección</label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Dirección"   
                                name="direccion" 
                                value={direccion}                                                        
                                onChange={e => guardarDireccion(e.target.value)}                                                         
                                />
                            </div>

                            <div className="form-group">
                                <label>Horario</label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Horario"   
                                name="horario" 
                                value={horario}                                                        
                                onChange={e => guardarHorario(e.target.value)}                                                         
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

    );
}

export default NuevoProducto;