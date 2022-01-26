import React, {useState} from 'react';
import "./Giphy.css";

function Giphy() {
    const Url = "https://api.giphy.com/v1/gifs/search?api_key=cjEpZ2KsSIsYpddBsNhbjQCwkE6Rv72D&q=help&limit=25&offset=0&rating=g&lang=en"
    const [search, setSearch] = useState("");
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchGif = () => {
        if (search.length > 0){
            setLoading(true);
            fetch(Url +search)
            .then((res)=>{
                setLoading(false);
                return res.json();
            })
            .then((result) => {
                setGifs(result.data.map((gif) => {
                    return gif.images.fixed_height.url;
                }))

            })
            .catch(() =>{
                setLoading(false);
                alert("Something went wrong")
            })
        }
    }

  return (

<div>
   <div className='header'>
        <input
            type ="text"
            placeholder='Search Gifs'
            value= {search}
            onChange={(e) =>
            setSearch(e.target.value)}
        />
        <button onClick={searchGif}>
            Search
        </button>
    </div>
    <div className='result'>
        <div className='loading'>
            <div className='loader'>
        </div>
    </div>
    <div className='list'>
        {
            gifs.map((gif) => {
                return (
                    <div className='item'>
                        <img src={gif} />
                    </div>
                )
            })
        }
    </div>
    </div>
</div>
  )
};

export default Giphy;
