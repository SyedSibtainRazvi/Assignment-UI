import React from "react";
import './App.css';
import Header from "./Header";
import Message from "./Message";
import Timeline from "./Timeline";


function App() {
  return (
    <div className="app">

     {/* Header */}
     <Header />

     {/* App body */}
     <Message />

     {/* Feed */}
     <Timeline 
     profilePic="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
     message= "Amazing"
     timeStamp="This is a time stamp"
     userName="Syed"
     image="https://media.istockphoto.com/photos/slave-hands-broken-chains-with-bird-flying-picture-id1296601764?b=1&k=20&m=1296601764&s=170667a&w=0&h=0hjKKZZYp2Wl1BRxopegdWrJwTwi1Vlbs_aXdmhhr_o="
     />

<Timeline 
     profilePic="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
     message= "Amazing"
     timeStamp="This is a time stamp"
     userName="Syed"
     image="https://media.istockphoto.com/photos/slave-hands-broken-chains-with-bird-flying-picture-id1296601764?b=1&k=20&m=1296601764&s=170667a&w=0&h=0hjKKZZYp2Wl1BRxopegdWrJwTwi1Vlbs_aXdmhhr_o="
     />

<Timeline 
     profilePic="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
     message= "Amazing"
     timeStamp="This is a time stamp"
     userName="Syed"
     image="https://media.istockphoto.com/photos/slave-hands-broken-chains-with-bird-flying-picture-id1296601764?b=1&k=20&m=1296601764&s=170667a&w=0&h=0hjKKZZYp2Wl1BRxopegdWrJwTwi1Vlbs_aXdmhhr_o="
     />




    </div>
  );
}

export default App;
