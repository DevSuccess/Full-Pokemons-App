import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PokemonsDetail from "./pages/pokemon-details";
import PageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonAdd from "./pages/pokemon.add";
import Login from "./pages/login";
import PrivateRoute from "./PrivateRoute";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div className="">
        {/* La bare de naviagtion commun a toutes les pages*/}
        <nav>
          <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Pokédex</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/" className="">Accueil</Link></li>
              <li><Link to="/" className="">Listes</Link></li>
            </ul>
          </div>
        </nav>

        {/* Le système de gestion des routes de notre application */}
        <Switch>
          <PrivateRoute exact path="/" component={PokemonList} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/pokemons/add" component={PokemonAdd} />
          <PrivateRoute exact path="/pokemons" component={PokemonList} />
          <PrivateRoute path="/pokemons/edit/:id" component={PokemonEdit} />
          <PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
