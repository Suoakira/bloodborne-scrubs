import React, { Component } from 'react';

class Bosscard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
      
                <div class="column bosscard">
                <h3 class="ui header">{this.props.name}</h3>
                    <img src={this.props.image} alt={this.props.name} />
                    <div class="killed-by">
                    <h5 class="ui header">Killed: By</h5>
                    <button class="negative ui button">Ryan</button>
                    <button class="negative ui button">John</button>
                    <button class="negative ui button">Olly</button>
                    <button class="negative ui button">Steve</button>
                    
                    </div>
                </div>

         )
    }
}
 
export default Bosscard;