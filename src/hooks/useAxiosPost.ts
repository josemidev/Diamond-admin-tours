import { useRequest } from 'ahooks'
import type { Options, Result } from 'ahooks/lib/useRequest/src/types'
import axios from '../api/tours'

const HOST: string = "https://tours-be.fly.dev/api/v1"


function useAxiosPost<TData, TParams extends any[]> (
  pathname: string,
  config: Options<TData, TParams>
): Result<TData, TParams> {
  const { cancel, data, error, loading, mutate, params, refresh, refreshAsync, run, runAsync } =
    useRequest(async (body): Promise<TData> => await axios.post(`${HOST}${pathname}`, body, {}), {
      manual: true,
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
