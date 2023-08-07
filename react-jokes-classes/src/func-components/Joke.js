import React from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

const Joke = ({ id, vote, votes, text } ) => {
    const handleDoubleClick = (evt)=>{
      if(evt.detail === 2)
        console.log("triggered");
    };

    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={evt => vote(id, +1)}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={evt => vote(id, -1)}>
            <i className="fas fa-thumbs-down" />
          </button>

          {votes}
        </div>

        <div className="Joke-text"><button onClick={handleDoubleClick}>{text}</button>
        <span className="Joke-icon Joke-icon-hidden"><i className="fas fa-lock" ></i></span></div>
      </div>
    );
  }

export default Joke;
