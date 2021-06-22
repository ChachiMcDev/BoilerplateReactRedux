import React from 'react';
import ReactDOM from 'react-dom';

import { AddOption } from '../components/AddOption'


const obj = { 
    name: 'vikram',
    getName() {
        return this.name;
    }
};

const getName = obj.getName;



class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: props.options
        }

    }
    //lifecycle component
    //lifecycle only available to classes not stateless functions
    componentDidMount(prevProps, prevState){

        try {
            const options = JSON.parse(localStorage.getItem('OPTIONS'));
            
            if(options){
                this.setState(()=>({options}));
            }

        } catch(e){
            //do nothing
        }           
    }

    componentDidUpdate(prevProps, prevState){
        console.log('saving data')
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('OPTIONS', json);
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
 
    handleDeleteOption(optionToRemove){
       
        console.log('hugem', optionToRemove)
        this.setState((prevState)=>({options: prevState.options.filter((option)=>{
            return optionToRemove !== option
        })}))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }
        this.setState((prevState)=> ({options: prevState.options.concat(option)}));
       // this.setState((prevState) => {
       //     return {
       //         options: prevState.options.concat(option)
       //     }
       // })

    }

    render() {
        
        const subTitle = 'Put  your life in the hands of the computer yo yo!'

        return (<div>
            <Header subTitle={subTitle} />
            <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
            <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}

            />
            <AddOption handleAddOption={this.handleAddOption} />

        </div>);
    }
}

IndecisionApp.defaultProps = {
    options: []
}

//creating stateless functional components
const Header = (props)=>{
    
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
            
        </div>
    )
}

//example of default props
Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {

    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do?</button>
        </div>
    )
}

const Options = (props)=>{

    return(<div>
            <button onClick= {props.handleDeleteOptions}>Remove All Items</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map((val, index)=>{
                return <Option 
                handleDeleteOption={props.handleDeleteOption} 
                key={index} 
                optionText={val}
                indexKey={index} />
            })}
        </div>
    );
}


const Option = (props)=>{

    return(
        <div>
        <p>{props.optionText}</p>
        <button onClick={(e)=>{props.handleDeleteOption(props.optionText)}}>Remove</button>
    </div>
    );
}


// 
//class AddOption extends React.Component {
//    constructor(props) {
//        super(props)
//        this.handleAddOption = this.handleAddOption.bind(this)
//        this.state = {
//            error: undefined
//        }
//    }
//    handleAddOption(event) {
//        event.preventDefault();
//        const option = event.target.elements.option.value.trim();
//        const error = this.props.handleAddOption(option);
//
//        //shorthand for returning object with key name same as value variable name
//        this.setState(()=>({error}));
//        
//        if(!error){
//            event.target.elements.option.value = '';
//        }     
//    }
//    render() {
//        return (
//            <div>
//            {this.state.error && <p>{this.state.error}</p>}
//                <form onSubmit={this.handleAddOption}>
//                    <input type="text" name="option" />
//                    <button className="button">Add Option</button>
//                </form>
//            </div>
//
//        );
//    }
//}
//

































ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//class Header extends React.Component {
//    render() {
//
//        return (
//            <div>
//                <h1>{this.props.title}</h1>
//                <h2>{this.props.subTitle}</h2>
//            </div>
//        );
//    }
//}
//



//class Action extends React.Component {
//
//    render() {
//        return (<div>
//            <button
//                onClick={this.props.handlePick}
//                disabled={!this.props.hasOptions}
//                className="button">What Should I do?
//             </button>
//        </div>);
//    }
//}
//


//class Options extends React.Component {
//
//    render() {
//
//        return (<div>
//            <button onClick={this.props.handleDeleteOptions}>Remove All items</button>
//            {this.props.options.map((val, index) => {
//                return <Option key={index} optionText={val} />
//            })}
//
//        </div>)
//
//    }
//}
//

//class Option extends React.Component {
//    remove() {
//        alert('remove line item')
//    }
//    render() {
//        return (
//            <div>
//                <p>{this.props.optionText}</p>
//                <button onClick={this.remove}>Remove</button>
//            </div>
//
//
//        )
//
//    }
//}
//


//
//const User = (props)=>{
//    return(
//        <div>
//            <p>Name: {props.name}</p>
//            <p>Age: {props.age} </p>
//        </div>
//    );
//};
//
//




