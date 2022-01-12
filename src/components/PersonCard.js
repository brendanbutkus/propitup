import React, {Component} from 'react';

class PersonCard extends Component{




    render(){
        const {firstName,lastName,age,hairColor} = this.props;
        return(
            <div>
                <h1>Last Name: {lastName}</h1>
                <p>First Name: {firstName}</p>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>

            </div>
        )
            
        }
    }


    export default PersonCard;