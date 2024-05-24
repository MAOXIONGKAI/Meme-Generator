import React from "react";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMeme, setAllMeme] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  function getRandomMeme() {
    const len = allMeme.length;
    const randInt = Math.round(Math.random() * (len - 1));
    setMeme((prev) => {
      return {
        ...prev,
        randomImage: allMeme[randInt].url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          onChange={handleChange}
          name="topText"
          value={meme.topText}
          className="form-input"
          placeholder="Top Text"
          type="text"
        />
        <input
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
          className="form-input"
          placeholder="Bottom Text"
          type="text"
        />
        <button onClick={getRandomMeme} className="form-button">
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} alt="" />
        <h2 className="meme-topText">{meme.topText}</h2>
        <h2 className="meme-bottomText">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
