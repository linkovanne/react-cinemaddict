import {useCallback, useState} from "react";

type ICallback = () => void;

export const useFetch = (callBack: ICallback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetch = useCallback(async (...args: any[]) => {
        try {
            setIsLoading(true);
            // @ts-ignore
            await callBack(...args)
        } catch (e: any) {
            debugger
            setError(e?.message || 'Something went wrong');
        } finally {
            setIsLoading(false)
        }
    }, [callBack]);

    return {fetch, isLoading, error};
}
