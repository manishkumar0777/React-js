
import { useState ,useEffect} from "react";

export default function Main() {

    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState({
        topText : "a",
        bottomText : "b",
        imageUrl : "https://i.imgflip.com/3eqjd8.jpg"
    });

    //getting the random images from array
    function getImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const randomMemeUrl = allMemes[randomNumber].url;

        setMeme((prev) => ({
            ...prev,
            imageUrl : randomMemeUrl
        }))
    }


    //handling input change
    const handleChange = (event) => {
        const {value, name} = event.currentTarget;
        setMeme(prev => ({
            ...prev,
            [name] : value

        }))
        
    }

    //fetching the image and meme
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

    return(
        <main>
            <div className="form">
                <label>Top Text
                    <input 
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>
                <label>Bottom Text
                    <input 
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img className="meme-img" src={meme.imageUrl}/>
                <span className="top" >{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}