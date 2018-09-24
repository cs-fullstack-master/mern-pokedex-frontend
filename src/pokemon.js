import React, {PureComponent} from 'react'

class Pokemon extends PureComponent {
    render() {
        const {pokemon} = this.props;

        return (
            <div className="pokemon">
                <button
                    type="button"
                    className="pokemon__sprite"
                    style={{
                        backgroundImage: `url(${`http://localhost:3001/images/${
                            pokemon.id
                            }.png`})`
                    }}
                />
                <p className="pokemon__name">{pokemon.name}</p>
            </div>
        )
    }
}

export default Pokemon
