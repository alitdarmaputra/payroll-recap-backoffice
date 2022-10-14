import axios from "axios"
import { useEffect } from "react";

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export const useExternalScripts = ({ url }) => {
    useEffect(() => {
        const body = document.querySelector("body");
        const script = document.createElement("script");

        script.setAttribute("src", url);
        body.appendChild(script);

        return () => {
           body.removeChild(script);
        };
    }, [url]);
};