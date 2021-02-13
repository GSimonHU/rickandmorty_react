import axios from "axios";
import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, dependencies);
    return data;
};
