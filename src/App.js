import React, { Fragment } from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

import EditarDepartamento from './components/EditarDepartamento';
import Departamentos from './components/Departamentos';
import NuevoDepartamento from './components/NuevoDepartamento';

import Usuarios from './components/Usuarios';
import NuevoUsuario from './components/NuevoUsuario';
import EditarUsuario from './components/EditarUsuario';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//REDUX
import {Provider} from 'react-redux'
import store from './store';
import Usuario from './components/Usuario';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5"> 
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProducto} />
            <Route exact path="/departamentos" component={Departamentos} />
            <Route exact path="/departamentos/nuevo" component={NuevoDepartamento} />
            <Route exact path="/departamentos/editar/:id" component={EditarDepartamento} />
            <Route exact path="/usuarios" component={Usuarios} />
            <Route exact path="/usuarios/nuevo" component={NuevoUsuario} />
            <Route exact path="/usuarios/editar/:id" component={EditarUsuario} />
            </Switch>
        </div>
        </Provider>
    </Router>
    
  );
}

export default App;
