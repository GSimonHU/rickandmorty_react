import axios from "axios";
import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(url)
            .then((response) => {
                setIsLoading(false);
                setData(response.data);
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
            });
    }, dependencies);
    return [isLoading, data];
};
