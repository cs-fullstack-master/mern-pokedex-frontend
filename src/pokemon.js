import React, {Component} from 'react'

// This is the component to display an individual Pokemon
class Pokemon extends Component {
    render() {
        const {pokemon} = this.props;

        return (
            <div className="pokemon">
                <button
                    type="button"
                    className="pokemon_sprite"
                    style={{
                        backgroundImage: `url(${pokemon.image})`
                    }}
                />
                <p className="pokemon_name">{pokemon.name}</p>
            </div>
        )
    }
}

export default Pokemon
