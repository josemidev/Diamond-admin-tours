import { useRequest } from 'ahooks'
import type { Options, Result } from 'ahooks/lib/useRequest/src/types'
import axios from '../api/tours'

const HOST: string = "https://api.example.com"


function useAxiosPost<TData, TParams extends any[]> (
  pathname: string,
  config: Options<TData, TParams>
) {
  const { cancel, data, error, loading, mutate, params, refresh, refreshAsync, run, runAsync } =
    useRequest<TData, TParams>(async () => {
      const response = await axios.get<TData>(`${HOST}${pathname}`);
      return response.data;
    }, {
      ...config
    })

  return {
    loading,
    data,
    error,
    params,
    run,
    runAsync,
    refresh,
    refreshAsync,
    mutate,
    cancel
  } as Result<TData, TParams>
}

export default useAxiosPost
