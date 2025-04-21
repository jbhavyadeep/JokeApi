import React, { useState, useEffect } from "react";
import useJokeList from "../hooks/useJokeList";

function JokeList() {
    const { data, fetchNextList } = useJokeList();
    const [jokeList, setJokeList] = useState([]);
    const categories = ["", "science", "movie", "drink", "people", "cat", "dog", "tiger"];
    const [query, setquery] = useState("");
    useEffect(() => {
        let ouptut = [];
        if (data?.data?.data) {
            for (let i = 0; i < data?.data?.data.length; i++) {
                ouptut.push(data?.data?.data[i]["content"]);
            }
            //console.log(ouptut);
            //console.log(query);
            setJokeList(ouptut);
        }
    }, [data])

    const nextPage = () => {
        if (data?.data?.nextPage === true) {
            fetchNextList("", data?.data?.page + 1);
        }
    }

    const prevPage = () => {
        if (data?.data?.previousPage === true) {
            fetchNextList("", data?.data?.page - 1);
        }
    }
    const selectcat = (queries) => {
        setquery(queries);
        fetchNextList(queries, 1)
    }

    return (
        <div className="m-2 p-2">
            <div className="flex-wrap flex ">
                <h3
                    className="font-bold font-sans text-2xl self-center-safe"> Select Joke category: </h3>
                <select
                    value={query}
                    onChange={(e) => selectcat(e.target.value)}
                    className="rounded-lg font-medium px-1 py-1 font-sans cursor-pointer outline-none bg-slate-100"

                >
                    {
                        categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))
                    }

                </select>
            </div>

            <div
            >
                <ul>
                    {
                        jokeList.map((joke) => (
                            <li
                                className="text-2xl font-serif font-bold m-5 p-2 bg-blue-100 rounded-2xl shadow-2xl" key={joke}>
                                <p>{joke}</p>
                            </li>
                        ))
                    }

                </ul>
            </div>

            <button
                className="bg-slate-500 p-2 rounded-xl m-2 text-white hover:bg-slate-400 cursor-pointer"
                onClick={() => prevPage()}
            >
                Previous Page
            </button>
            <button
                onClick={() => nextPage()}

                className="bg-slate-500 p-2 rounded-xl m-2 text-white hover:bg-slate-400 cursor-pointer"
            >
                Next Page
            </button>
        </div>

    )
}

export default JokeList;