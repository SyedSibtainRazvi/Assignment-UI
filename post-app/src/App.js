import React, {useEffect, useState} from "react";
import './App.css';
import Header from "./Header";
import Message from "./Message";
import Timeline from "./Timeline";
// import Giphy from "./Giphy";
import db from "./firebase";


function App() {
    const [posts, setPosts] = useState([]);
    // const[openGiphy, setOpenGiphy] = useState(false);

    useEffect(() => {
      db.collection('posts').orderBy('timeStamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    }, []);

  return (
    <div className="app">

     <Header />

     <Message />

     {posts.map((post) => (
       <Timeline
       key={post.id}
       profilePic={post.data.profilePic}
       message={post.data.message}
       timeStamp={post.data.timeStamp}
       userName={post.data.userName}
       image={post.data.image}
       />
     ))}
    </div>
  );
}

export default App;
