//this primarily concerns UI, hence is stateless component, hence no need of class(viz. used for data i/o), only functional
import React from 'react';

const Event = ({events, deleteEvent}) =>  {                      //passing props as a parameter to the function, props can be more than one separating by comma, here it is {users}
    const eventList = events.map(event => {               //here we map through each individual user and store in the array userList
        return(
            <div className="event" key = {event.id}>
                <div> {event.eventName} : {event.hashtag} </div>
                <button onClick={() => {deleteEvent(event.id)}}>Delete</button>
            </div>
        )
    })
    return(
        <div className="event-list">                 {/* here we output the whole list of users */}
            { eventList }
        </div>
    )
}
export default Event                                 //Nested it to the Root component i.e. App.js