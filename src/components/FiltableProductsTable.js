import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component{
    getInitialState() {
        return {
          filterText: '',
          nearMe: false
          
        };
      }

      handleUserInput(filterText, nearMe) {
        this.setState({
          filterText: filterText,
          nearMe: nearMe
          
          
        });
      }

      render() {
        return (
          <div>
            <SearchBar
              filterText={this.state.filterText}
              onUserInput={this.handleUserInput}
              nearMe = {this.state.nearMe}
            />
            <ProductTable
              products={this.props.products}
              filterText={this.state.filterText}
              nearMe={this.state.nearMe}
            />
          </div>
        );


    }

}


