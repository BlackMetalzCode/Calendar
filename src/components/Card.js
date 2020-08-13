import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
class Card extends Component {
  shouldComponentUpdate(){
    return false
  }
  
  render() {
    return (
      <div>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
     />
      </div>
    );
  }
}

export default Card;