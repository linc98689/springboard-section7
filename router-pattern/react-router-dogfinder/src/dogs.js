import whiskey from "./images/whiskey.jpeg";
import duke from "./images/duke.jpeg";
import perry from "./images/perry.jpeg";
import tubby from "./images/tubby.jpeg";

const dogsByName = {
            whiskey: 
          {
            age: 5,
            src: whiskey,
            facts: [
              "Whiskey loves eating popcorn.",
              "Whiskey is a terrible guard dog.",
              "Whiskey wants to cuddle with you!"
            ]
          },
          duke: {
            age: 3,
            src: duke,
            facts: [
              "Duke believes that ball is life.",
              "Duke likes snow.",
              "Duke enjoys pawing other dogs."
            ]
          },
          perry:
          {
            age: 4,
            src: perry,
            facts: [
              "Perry loves all humans.",
              "Perry demolishes all snacks.",
              "Perry hates the rain."
            ]
          },
          tubby: {
            age: 4,
            src: tubby,
            facts: [
              "Tubby is really stupid.",
              "Tubby does not like walks.",
              "Angelina used to hate Tubby, but claims not to anymore."
            ]
          }
      }
  
const toArray = ()=>{
    const names = Object.keys(dogsByName);
    return names.map(name =>(
        {name, ...dogsByName[name]}
    ))
};

const dogs = toArray();

export {dogs, dogsByName} ;     
