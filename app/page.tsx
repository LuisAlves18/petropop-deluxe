'use client'
import React from 'react'
import useSWR, { mutate } from "swr";
import Loading from './loading';
import DataCard from './components/DataCard';
const HomePage = () => {
  const fetcher = (url: string, options?: RequestInit) => fetch(url, options).then((res) => res.json());
  const id = [process.env.NEXT_PUBLIC_DEFAULT_STATIONS_TO_FETCH]
  let { data, isLoading, error } = useSWR(`/api/getStationData?stationId=${id}`, fetcher)

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row items-center gap-10">
        {data.map((station:any, index: number)=>{
          return(
          <div key={index}>
          <DataCard name={station.address.name} address={station.address.address} gasTypes={station.gasTypes}/>
          </div>
          )
        })}
      </div>
    </main>
  )
}

export default HomePage