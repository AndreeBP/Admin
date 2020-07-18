import React, {Fragment, useEffect} from 'react';
import Producto from './Producto';
import NavLateral from '../LateralAdmin/navLateral';
//Redux
import {useSelector, useDispatch} from 'react-redux';
import {obtenerProductosAction} from '../actions/productoActions';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect( ()=>{

        //consultar la api
        const cargarProductos = () => dispatch (obtenerProductosAction() );
        cargarProductos();
    }, []);

    //obtener el state
    const productos= useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);


    return(
        <Fragment>
            <div className="wrapper"> 
            <NavLateral/>
        <div className="main_content">
        <div className="info">

        <a href="/productos/nuevo" className="btn btn-danger nuevo-post d-block 
        d-md-inLine-block">Registrar Nuevo Lugar &#43;</a>


            <h2 className="text-center">Lista de Lugares</h2>

            {error ? <p className="font-weight-bold alert alert-danger 
            text-center ">Hubo un error</p>: null}


            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Horario</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {productos.length === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto 
                            key={producto.id}
                            producto={producto}                                                
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

export default Productos;