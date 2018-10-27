import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Grid,Row,Col} from 'react-bootstrap';

export default class Footer extends Component{
    
    render(){
        return(
           <Grid>
               <Row>
                   <Col md={4}>
                   <ul>
                    <li><a href="">FAQ</a></li>
                   <li><a href="">Contact</a></li> 
                    <li><a href="">A propos</a></li>
                   </ul>
                    
                   </Col>

                    <Col md={4}>
                    <ul>
                        <li><a href="">Condition générale</a></li>
                        <li><a href="">Droit de données personnelles</a></li>
                        <li><a href="">Livraison</a></li>
                    </ul>
                    
                   </Col>

                    <Col>
                    <h5>Partenaire</h5>

                    <div>
                        <a><FontAwesomeIcon icon = "facebook-f"/></a>
                        <a><FontAwesomeIcon icon = "twitter"/></a>
                    </div>
                   </Col>
               </Row>
           </Grid>
        );
    }
}
  