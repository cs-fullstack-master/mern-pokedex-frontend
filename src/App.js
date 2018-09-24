import React, {Component} from 'react';
import logo from './header.png';
import './App.css';
import Pokemon from './pokemon';

const pokedexEndpoint = "http://localhost:3001"; // Base URL for web service
const appTitle = "Code School Pokedex"; // Set the main app title
const MAX_POKEMON_TO_PULL = 800;



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appTitle: appTitle, // My Application Title
            requestFailed: '',
            pokemon: [], // This will hold my FULL list of Pokemon
            filteredPokemon: [] // This will hold my Filtered list of Pokemon
        };
    }

    // Lets load up our current list once component mounted
    componentDidMount() {
        this.fetchPokemon();
        console.log("Response = " + this.state.pokemon);
    }

    // Grab those Pokemon from the backend web service
    fetchPokemon() {
        console.log(`Fetching Pokemon: ${pokedexEndpoint}/pokedex/`);
        fetch(pokedexEndpoint + '/pokedex/')
            .then(response => {
                if (!response.ok) {
                    throw Error("Failed connection to the Pokedex API")
                }
                console.log(response);
                return response
            })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    requestFailed: false
                });
                // We only keep the first 800 Pokemon we have pictures for. Remove the MAX call to catch em all
                // We also reset the filtered list of pokemon
                this.setState({
                    pokemon: response.results.slice(0,MAX_POKEMON_TO_PULL),
                    filteredPokemon: response.results.slice(0,MAX_POKEMON_TO_PULL)
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }


    // Render the main content for the application
    // Including the Pokemon components
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{appTitle}</h1>
                </header>
                {this.state.filteredPokemon.map((pokemon, index) => {
                    return (

                    <li className="pokemons_item" key={pokemon.id}>
                        <Pokemon pokemon={pokemon} />
                    </li>
                    );
                })}
            </div>
        )
    }
}

export default App;
