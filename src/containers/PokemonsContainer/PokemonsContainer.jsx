import React, { Component } from 'react'
import { connect } from 'react-redux'
import getPokemons, { pokemonId, nextPokemons, prevPokemons, pokemonColor, getPokemonsTable }  from '../../actions/getPokemonsAction'
import Pokemons from '../../components/Pokemons/Pokemons'

class PokemonsContainer extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

componentWillMount() {
    this.props.getPokemons()
    this.props.getPokemonsTable()
}

  render() {
    return (
      <Pokemons 
        pokemons={this.props.pokemons}
        pokemonId={this.props.pokemonId}
        pokemonUnit={this.props.pokemonUnit}
        nextPokemons={this.props.nextPokemons}
        prevPokemons={this.props.prevPokemons}
        next={this.props.next}
        prev={this.props.prev}
        nextOrder={this.props.nextOrder}
        fetchNext={this.props.fetchNext}
        pokemonColor={this.props.pokemonColor}
        pokemonColorData={this.props.pokemonColorData}
        showPokemon={this.props.showPokemon}
        showPokemonColor={this.props.showPokemonColor}
        pokemonstTable={this.props.pokemonstTable}
        tableLoader={this.props.tableLoader}
        getPokemonsTable={this.props.getPokemonsTable}
      />
    )
  }
}

const mapStateToProps = (store) => {
    return {
      pokemons: store.pokemons.allPokemons.results,
      pokemonUnit: store.pokemons.pokemonUnit,
      next: store.pokemons.allPokemons.next,
      prev: store.pokemons.allPokemons.previous,
      nextOrder: store.pokemons.nextOrder,
      fetchNext: store.pokemons.fetchNext,
      pokemonColorData: store.pokemons.pokemonColorData,
      showPokemon: store.pokemons.showPokemon,
      showPokemonColor: store.pokemons.showPokemonColor,
      pokemonstTable: store.pokemons.pokemonstTable
    }
}
  
const mapDispatchToProps = (dispatch) => ({
    getPokemons: (data) => dispatch(getPokemons(data)),
    pokemonId: (data) => dispatch(pokemonId(data)),
    nextPokemons: (data) => dispatch(nextPokemons(data)),
    prevPokemons: (data) => dispatch(prevPokemons(data)),
    pokemonColor: (data) => dispatch(pokemonColor(data)),
    getPokemonsTable: (nextCount) =>dispatch(getPokemonsTable(nextCount))
})

export default (connect(mapStateToProps, mapDispatchToProps) (PokemonsContainer))
