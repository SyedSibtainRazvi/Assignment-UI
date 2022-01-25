import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Timeline.css"

function Timeline({profilePic, image, userName, timeStamp, message}) {
  return (
  <div className="timeline">
    <div className='post'>
      <Avatar src={profilePic}  className='post_pic'/>
      <div className='post_data'>
        <h4>{userName}</h4>
        <p>Time stamp</p>
      </div>
    </div>
    <div className='post_content'>
      <p>{message}</p>
    </div>
    <div className='post_image'>
      <img src={image} alt= ""/>
    </div>

  </div>
  )
}

export default Timeline;
