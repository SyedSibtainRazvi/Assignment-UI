import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Timeline.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ReplyIcon from '@material-ui/icons/Reply';

function Timeline({profilePic, image, userName, timeStamp, message}) {
  return (
  <div className="timeline">
    <div className='post'>
      <Avatar src={profilePic}  className='post_pic'/>
      <div className='post_data'>
        <h4>{userName}</h4>
        <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
      </div>
    </div>
    <div className='post_content'>
      <p>{message}</p>
    </div>
    <div className='post_image'>
      <img src={image} alt= ""/>
    </div>


    <div className='post_icons'>
      <div className='post_interaction'>
        <ThumbUpIcon />
        <p>Like</p>
        </div>
        <div className='post_interaction'>
        <ReplyIcon />
        <p>Share</p>
      </div>
      
    </div>

  </div>
  )
}

export default Timeline;
