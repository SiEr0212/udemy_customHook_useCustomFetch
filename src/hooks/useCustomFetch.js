import React, { useState, useEffect } from "react";

export default function useCustomFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const customFetch = async (url) => {
    try {
      let response = await fetch(url);
      let resData = await response.json();
      setData({ resData });
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      customFetch(url);
    }, 3000);
  }, [url]);

  return [data, loading, error];
}
