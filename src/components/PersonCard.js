import React, {Component} from 'react';
// import Counter from './components/Counter';

class PersonCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
            // counter will have to be replaced with age, so do i import personCard into Counter
        };
    }

    changeAge =() =>{
        console.log("clicked!");
        // this.state.counter +=1;

        this.setState({age: this.state.age + 1});

        // this.setState({counter: })
    }




    render(){
        const {firstName,lastName,age,hairColor} = this.props;
        return(
            <div>
                <h1>Last Name: {lastName}</h1>
                <p>First Name: {firstName}</p>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick ={this.changeAge}>Birhtday button for {firstName} {lastName}</button>
                {/* <Counter/> */}
            </div>
        )
            
        }
    }


    export default PersonCard;