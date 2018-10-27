import React, { Component } from 'react';
import ReactDropdown, {ReactDropdownProps} from 'react-dropdown';
import SearchBar from '../components/SearchBar';
import Autocomplement from '../components/Autocomplement';

export default class Catalogue extends Component{
    constructor(props){
        super(props);
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
          }
        this.state = {
            location: [
                {
                    id: 0,
                    title: 'New York',
                    selected: false,
                    key: 'location'
                },
                {
                  id: 1,
                  title: 'Dublin',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 2,
                  title: 'California',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 3,
                  title: 'Istanbul',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 4,
                  title: 'Izmir',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 5,
                  title: 'Oslo',
                  selected: false,
                  key: 'location'
                }
              ]
        }
    }
    
  /*  defaultOption = this.state.location[0];
    render(){
        return(
          <div>
             <SearchBar></SearchBar>
            <ReactDropdown options={this.state.location} onChange={this._onSelect} value={defaultOption} placeholder="Select an option"></ReactDropdown>
            <p>{defaultOption}</p>
          </div>
           
        );*/
        render(){
          return(
            <div>
             
              <Autocomplement suggestions={this.state.value}></Autocomplement>
            </div>
             
          );


    }
    

}