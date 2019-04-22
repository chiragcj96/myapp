import React , { Component } from 'react'

class AddEvent extends Component {
    state = {
        eventName: null,
        hashtag: null
    }
    handleChange = (e) => {                    // function to handle the form inputs with parameter e as event
        this.setState({
            [e.target.id]: e.target.value,       //the value of each object updates in realtime to input value by matching the id of object
        })
    }
    handleSubmit = (e) => {                    
        e.preventDefault();
        this.props.startEvent(this.state);
        console.log(this.state.eventName)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Event Name: </label>
                    <input type="text" name="" id="eventName" onChange={this.handleChange} />        {/* Add default text input field */}
                    <label> Hashtag: </label>
                    <input type="text" name="" id="hashtag" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddEvent;