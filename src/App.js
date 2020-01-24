import React from "react";
import "./components/pokemoncard.css";
import PokemonGallery from "./components/PokemonGallery";
import "./components/PokemonGallery.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AboutPage from "./containers/AboutPage"
import PageNotFound from "./containers/PageNotFound"
import "./App.css"
import Header from "./components/Header"
import PokemonDetails from './components/PokemonDetails'


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={AboutPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/gallery' component={PokemonGallery} />
            <Route exact path="/error" component={PageNotFound} />
            <Route exact path="/:id" component={PokemonDetails} />
            <Redirect to="/error" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
