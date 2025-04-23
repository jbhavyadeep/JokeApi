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
        <div className="m-4 p-6 bg-white rounded-2xl shadow-xl">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                {/* Category Selection */}
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <h3 className="font-bold text-2xl text-gray-800">Select Joke Category:</h3>
                    <select
                        value={query}
                        onChange={(e) => selectcat(e.target.value)}
                        className="rounded-lg font-medium px-3 py-2 cursor-pointer outline-none bg-slate-200 hover:bg-slate-300 transition duration-200"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Search Input */}
                <div className="flex w-full md:w-auto">
                    <input
                        id="search"
                        type="text"
                        placeholder="Search Joke"
                        className="bg-white/90 text-gray-700 rounded-l-lg px-4 py-2 border border-slate-300 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button
                        onClick={() => fetchNextList(document.getElementById("search").value, 1)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-r-lg transition duration-200"
                    >
                        Find
                    </button>
                </div>
            </div>

            {/* Joke List */}
            <ul className="space-y-4">
                {jokeList.map((joke, index) => (
                    <li
                        key={index}
                        className="text-lg md:text-xl font-serif font-semibold p-4 bg-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                    >
                        {joke}
                    </li>
                ))}
            </ul>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-4 mt-8">
                <button
                    onClick={prevPage}
                    className="bg-slate-600 text-white font-medium px-5 py-2 rounded-xl hover:bg-slate-500 transition"
                >
                    Previous Page
                </button>
                <button
                    onClick={nextPage}
                    className="bg-slate-600 text-white font-medium px-5 py-2 rounded-xl hover:bg-slate-500 transition"
                >
                    Next Page
                </button>
            </div>
        </div>


    )
}

export default JokeList;