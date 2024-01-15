import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: undefined,
    loading: false,
    error: null
  });

  const getFetch = async () => {
    setState({
      ...state,
      loading: true
    });
    const response = await fetch(url);
    const data = await response.json();

    setState({
      data: data,
      loading: false,
      error: null
    })
  };

  useEffect(() => {
    getFetch();
  }, [url])
  
  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  }
}
