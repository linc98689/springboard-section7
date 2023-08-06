import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

/** List of jokes. */

const JokeList = ({numJokesToGet = 5})=> {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [doesNeedFetch, setDoesNeedFetch ] = useState(true);

  const  getJokes = async ()=> {
    setIsLoading(data => true);
    try {
      // load jokes one at a time, adding not-yet-seen jokes
      let newJokes = [];
      let seenJokes = new Set();

      while (newJokes.length < numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" }
        });
        let { ...joke } = res.data;

        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          newJokes.push({ ...joke, votes: 0 });
        } else {
          console.log("duplicate found!");
        }
      }
      setJokes(data => newJokes);
      setIsLoading(data => false);
    } catch (err) {
      console.error(err);
    }
  };

  /* empty joke list, set to loading state, and then call getJokes */

  const generateNewJokes = ()=> {
    getJokes();
  }

  // useEffect
  useEffect(()=>{
    getJokes();
  }, []);

  

  /* change vote for this id by delta (+1 or -1) */

  const vote = (id, delta)=> {
    setJokes( jokes => {
       let tmp = jokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j);

       let sortedJokes = [...tmp].sort((a, b) => b.votes - a.votes);
      return sortedJokes;    
    })};

  /* render: either loading spinner or list of sorted jokes. */

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    )
  } 
  else {
      return (
        <div className="JokeList">
        <button
          className="JokeList-getmore"
          onClick={generateNewJokes}
        >
          Get New Jokes
        </button>

        {jokes.map(j => (
          <Joke
            text={j.joke}
            key={j.id}
            id={j.id}
            votes={j.votes}
            vote={vote}
          />
        ))}
      </div>
      )
  };

  };

   
export default JokeList;
