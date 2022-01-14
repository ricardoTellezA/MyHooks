import React, { useState,useRef } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setstate({
      data: null,
      loading: true,
      error: null,
    });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setstate({
              data,
              loading: false,
              error: null,
            });
          }
        }, 2000);
      });
  }, [url]);

  return state;
};

export default useFetch;
