export default function Meme(){

    //Remember to use the path 'src/...rest of path' to get images
    return(
        <main>
            <form className="form">
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
                <button className="form--button">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}