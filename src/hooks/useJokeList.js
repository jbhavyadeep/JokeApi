import { useEffect, useState } from "react";

function useJokeList() {
  const [data, setData] = useState(null);

  const url = `https://api.freeapi.app/api/v1/public/randomjokes?limit=5&query=&inc=categories%252Cid%252Ccontent&page=1`;
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: { accept: 'application/json' }
    })
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.error(error));; // fetch on mount
  }, []);

  const fetchNextList = (query, page) => {
    const url = `https://api.freeapi.app/api/v1/public/randomjokes?limit=5&query=${query}&inc=categories%252Cid%252Ccontent&page=${page}`;

    fetch(url, {
      method: 'GET',
      headers: { accept: 'application/json' }
    })
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.error(error));
  };

  return { data, fetchNextList };

}

export default useJokeList;