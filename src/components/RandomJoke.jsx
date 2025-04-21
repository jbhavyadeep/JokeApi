import React,{useEffect, useState} from "react";
import useJokeInfo from "../hooks/useJokeInfo";


function RandomJoke(){
    const { data, fetchJoke } = useJokeInfo();
    const [joke, setJoke] = useState("");
   
    useEffect(()=>{
      if(data?.data?.content){
        setJoke(data.data.content);
      }
    },[data]);

    return (
        <div>
            <h1>{joke}</h1>
      <button
      className="bg-amber-100 p-2 rounded-2xl hover:bg-amber-200"
      onClick={fetchJoke}>Next Joke</button>
        </div>
    )
}

export default RandomJoke;