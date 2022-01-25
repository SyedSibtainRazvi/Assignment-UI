import React, {useState} from 'react';
import "./Message.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import MoodIcon from '@material-ui/icons/Mood';
import GifIcon from '@material-ui/icons/Gif';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { IconButton } from '@material-ui/core';

function Message() {

    const[input,setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <div className='message_box'>
        <div className='message_top'>
      <form>
      <AccountCircleIcon style={{fontSize:"40px",position:"absolute", color:"grey"}}/>
      <input
      value={input} 
      onChange={(e) => setInput(e.target.value)}
      className= 'message_box_input' placeholder={`What's on your mind Syed?`} />
      </form>
      <MoodIcon style={{fontSize:"30px", color:"grey"}}/>
      </div>

     <div className='message_box_mid'>
      <div className='message_box_option'>
        <CameraAltIcon style={{color:"blue"}}/>
        <h4>Camera</h4>
      </div>
      <div className='message_box_option'>
        <MoodIcon style={{color:"yellow"}}/>
        <h4>Activity</h4>
      </div>
      </div>

      <div className='message_box_mid'>
      <div className='message_box_option'>
        <GroupIcon style={{color:"pink"}}/>
        <h4>Tag Friends</h4>
      </div>
      <div className='message_box_option'>
        <LocationOnIcon style={{color:"red"}}/>
        <h4>Check In</h4>
      </div>
      </div>

      <div className='message_box_mid'>
      <div className='message_box_option'>
        <GifIcon style={{color:"green"}}/>
        <h4>Gif</h4>
      </div>
      <div className='message_box_option'>
        <CalendarTodayIcon style={{color:"orange"}}/>
        <h4>Tag Event</h4>
      </div>
      </div>

      <button onClick={handleSubmit} type="submit">
          Hidden Submit
      </button>

  </div>
  )
}

export default Message;
