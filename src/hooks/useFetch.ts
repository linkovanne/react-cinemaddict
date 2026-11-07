import {useCallback, useState} from "react";

type ICallback = (signal: AbortSignal) => Promise<void>;

export const useFetch = (callBack: ICallback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetch = useCallback(async (signal: AbortSignal, ...args: any[]) => {
        try {
            setIsLoading(true);
            setError(null);
            // @ts-ignore
            await callBack(signal, ...args)
        } catch (e: any) {
            if (!signal.aborted) {
                setError(e?.message || 'Something went wrong');
            }
        } finally {
            if (!signal.aborted) {
                setIsLoading(false)
            }
        }
    }, [callBack]);

    return {fetch, isLoading, error};
}
