import React from 'react';
import "./Header.css";
import CreateIcon from '@material-ui/icons/Create';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SvgIcon from '@material-ui/core/SvgIcon';



function Header() {
    return <div className='header'> 
       <div className='primary_header'>
           <div className='header_tabs'>
               <CreateIcon />
               <h4>Compose Post</h4>
           </div>
           <div className='header_tabs'>
               <PhotoCameraIcon />
               <h4>Photo/Video Album</h4>
           </div>
           <div className='header_tabs'>
               <VideocamIcon />
               <h4>Live Video</h4>
           </div>

           <IconButton>
               <CloseIcon />
           </IconButton>
       </div>
    </div>
}

export default Header;