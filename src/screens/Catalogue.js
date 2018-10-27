import React, { Component } from 'react';
import ReactDropdown, {ReactDropdownProps} from 'react-dropdown';
import SearchBar from '../components/SearchBar';
import Autocomplement from '../components/Autocomplement';
const location = [
   'New York', 'Dublin']

export default class Catalogue extends Component{
    constructor(props){
        super(props);
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
          }
        this.state = {
            
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
            <div style={{marginTop:"100px"}}>
             
              <Autocomplement suggestions={location}></Autocomplement>
            </div>
             
          );


    }
    

}