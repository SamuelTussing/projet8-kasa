import React from 'react';
import { useState, useEffect } from "react";


export default function Fetch() {

   const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
    fetch("/logements.json")
    .then((response) => {
    if (response.ok) {
        return response.json();
    }
    throw response;
    })
    .then((data) =>{
       setData(data)
        console.log("setData", data)
    })
    .catch((error) => {
        console.error("error fetching", error);
        setError(error);
    })
    .finally(() => {
        setLoading(false);
    });
}, []  );
if (loading) return "Loading ....";
if (error) return "Error ! "
}