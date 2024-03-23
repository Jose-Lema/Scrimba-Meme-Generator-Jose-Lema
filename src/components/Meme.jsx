import memesData from "../memesData";

export default function Meme(){

    let url;
    function getMemeImage(){
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        url = memesArray[randomNumber].url
        console.log(url);
        return url;
    }

    //Remember to use the path 'src/...rest of path' to get images
    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}