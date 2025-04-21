import { useEffect, useState } from "react";

function useJokeInfo() {
  const [data, setData] = useState(null);

  const fetchJoke = () => {
    fetch('https://api.freeapi.app/api/v1/public/randomjokes/joke/random', {
      method: 'GET',
      headers: { accept: 'application/json' }
    })
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchJoke(); // fetch on mount
  }, []);

  return { data, fetchJoke };
}

export default useJokeInfo;
