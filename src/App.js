import React, {Component} from 'react';
import logo from './header.png';
import './App.css';
import Pokemon from './pokemon';

const pokedexEndpoint = "http://localhost:3001"; // Base URL for web service

const appTitle = "Code School Pokedex"; // Set the main app title

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appTitle: appTitle, // My Application Title
            requestFailed: '',
            pokemon: [] // This will hold my list of Pokemon
        };
    }

    // Lets load up our current list once component mounted
    componentDidMount() {
        this.fetchPokemon();
        console.log("Response = " + this.state.pokemon);
    }

    // Grab those Pokemon
    fetchPokemon() {
        console.log(`Fetching Pokemon: ${pokedexEndpoint}/pokedex/`);
        fetch(pokedexEndpoint + '/pokedex/')
            .then(response => {
                if (!response.ok) {
                    throw Error("Failed connection to the API")
                }
                console.log(response);
                return response
            })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    pokemon: response.results.slice(0,800)
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }


    // Render the main content for the application
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{appTitle}</h1>
                </header>
                {this.state.pokemon.map((pokemon, index) => {
                    return (

                    <li className="pokemons__item" key={pokemon.id}>
                        <Pokemon pokemon={pokemon} />
                    </li>
                    );
                })}
            </div>
        )
    }
}

export default App;
