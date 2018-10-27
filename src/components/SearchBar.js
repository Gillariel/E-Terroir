import React, {Component} from 'react';

export default class SearchBar extends Component{
    
            handleChange() {
                this.props.onUserInput(
                  this.refs.filterTextInput.value,
                  this.refs.nearMeInput.checked
                );
              }

              render() {
                return (
                  <form>
                    <input
                      type="text"
                      placeholder="Cherche le produit local"
                      value={this.props.filterText}
                      ref="filterTextInput"
                      onChange={this.handleChange}
                    />
                    <p>
                    <input
                        type="checkbox"
                        checked={this.props.nearMe}
                        ref="inStockOnlyInput"
                        onChange={this.handleChange}
                    />
                    {' '}
                    Produits près de moi
                    </p>
                    </form>
            );
    }
}

