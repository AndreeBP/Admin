import React, {Fragment, useEffect} from 'react';
import Departamento from './Departamento';
import NavLateral from '../LateralAdmin/navLateral';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {obtenerDepartamentoAction} from '../actions/departamentoActions';

const Departamentos = () => {

    const dispatch = useDispatch();

    useEffect( ()=>{

        //consultar la api
        const cargarDepartamentos = () => dispatch (obtenerDepartamentoAction() );
        cargarDepartamentos();
    }, []);

    //obtener el state
    const departamentos= useSelector(state => state.departamentos.departamentos);
    const error = useSelector(state => state.departamentos.error);


    return(
        <Fragment>
            <div className="wrapper"> 
            <NavLateral/>
        <div className="main_content">
        <div className="info">

        <a href="/departamentos/nuevo" className="btn btn-danger nuevo-post d-block 
        d-md-inLine-block">Registrar Nuevo Departamento &#43;</a>


            <h2 className="text-center">Lista de Departamentos</h2>

            {error ? <p className="font-weight-bold alert alert-danger 
            text-center ">Hubo un error</p>: null}


            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Población</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {departamentos.length === 0 ? 'No hay departamentos' : (
                        departamentos.map(departamento => (
                            <Departamento 
                            key={departamento.id}
                            departamento={departamento}                                                
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

export default Departamentos;