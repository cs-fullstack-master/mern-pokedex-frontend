import React, {Component} from 'react'

// This is the component to display an individual Pokemon
// TODO Refactor not to rely so much on hard coded pathnames
class Pokemon extends Component {
    render() {
        const {pokemon} = this.props;

        return (
            <div className="pokemon">
                <button
                    type="button"
                    className="pokemon_sprite"
                    style={{
                        backgroundImage: `url(${`http://localhost:3001/images/${
                            pokemon.id
                            }.png`})`
                    }}
                />
                <p className="pokemon_name">{pokemon.name}</p>
            </div>
        )
    }
}

export default Pokemon
