import React, { useEffect, useState } from "react";
import useJokeInfo from "../hooks/useJokeInfo";


function RandomJoke() {
  const { data, fetchJoke } = useJokeInfo();
  const [joke, setJoke] = useState("");

  useEffect(() => {
    if (data?.data?.content) {
      setJoke(data.data.content);
    }
  }, [data]);

  return (
    <div>
      <h1
        className="text-2xl font-serif font-bold m-5 p-2 bg-blue-100 rounded-2xl shadow-2xl">{joke}</h1>
      <button
        className="bg-slate-600 p-2 m-1 rounded-2xl hover:bg-slate-400 text-white cursor-pointer"
        onClick={fetchJoke}>Next Joke</button>
    </div>
  )
}

export default RandomJoke;