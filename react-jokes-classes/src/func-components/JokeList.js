import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

/** List of jokes. */



const JokeList = ({numJokesToGet = 5})=> {
  /** fetch jokes from localStorage */
  const fetchJokesFromLocal = () => {
    let savedJokes = localStorage.getItem("jokes");
    if (savedJokes === null)
      return [];
     else
       return JSON.parse(savedJokes);
 };

  const [jokes, setJokes] = useState(fetchJokesFromLocal());
  const [isLoading, setIsLoading] = useState(false);

  const  getJokes = async ()=> {
    setIsLoading(data => true);
    try {
      // load jokes one at a time, adding not-yet-seen jokes
      let newJokes = [];
      let seenJokes = new Set(jokes.filter(j => j.locked).map(j => j.id));

      while (newJokes.length < numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" }
        });
        let { ...joke } = res.data;

        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          newJokes.push({ ...joke, votes: 0 , locked:false});
        } else {
          console.log("duplicate found!");
        }
      }

      setJokes(data => {
        let lockedJokes = data.filter(j => j.locked);
        return [...lockedJokes, ...newJokes].sort((a, b) => b.votes - a.votes)});

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
    /** save jokes to localStorage */
    const saveJokesToLocal = () =>{
      localStorage.setItem("jokes", JSON.stringify(jokes));
    };

    saveJokesToLocal();
  }, [jokes]);

  

  /* change vote for this id by delta (+1 or -1) */

  const vote = (id, delta)=> {
    setJokes( jokes => {
       let tmp = jokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j);

        // sort by votes in descending order before rendering
       let sortedJokes = [...tmp].sort((a, b) => b.votes - a.votes);
      return sortedJokes;    
    })};

  /** lock */
  const lock = (id)=>{
    setJokes(data => data.map(j => j.id === id? {...j, locked: !j.locked}: j));
  };


  /** handleResetVotes */
  const handleResetVotes = (evt)=>{
    setJokes(data => data.map(e => ({...e, votes:0}))
    );
  }
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
        <button className="JokeList-resetVotes" onClick={handleResetVotes}>Reset Votes</button>
        <p className="JokeList-instruction">Double click a joke to lock/unlock </p>
        {jokes.map(j => (
          <Joke
            text={j.joke}
            key={j.id}
            id={j.id} 
            votes={j.votes}
            vote={vote}
            lock={lock}
            locked={j.locked}
          />
        ))}
      </div>
      )
  };

  };

   
export default JokeList;
