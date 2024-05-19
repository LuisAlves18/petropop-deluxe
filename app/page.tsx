
'use client'
import React, { useState } from 'react'
import useSWR, { mutate } from "swr";
import Loading from './loading';
import DataCard from './components/DataCard';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import CheckboxForm from './components/GasTypeForm'; // Adjust the path according to your file structure
import { GasTypes } from '@/types/GasTypes';




const HomePage = () => {
  const fetcher = (url: string, options?: RequestInit) => fetch(url, options).then((res) => res.json());
  const id = [process.env.NEXT_PUBLIC_DEFAULT_STATIONS_TO_FETCH]
  let { data, isLoading, error } = useSWR(`/api/getStationData?stationId=${id}`, fetcher)
  const { data: session, status } = useSession();



  const [checkboxFormData, setFormData] = useState<any | null>(null);

  const handleFormSubmit = (data: any) => {
    const formDataFilteredData = Object.keys(Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value)
    ))

     const formFilteredDataParser = formDataFilteredData.map((string:string) => {
      switch(string){
        case "GASOLEO_SIMPLES":
          return GasTypes.GASOLEO_SIMPLES
        case "GASOLEO_ESPECIAL":
          return GasTypes.GASOLEO_ESPECIAL
        case "GASOLINA_SIMPLES":
          return GasTypes.GASOLINA_SIMPLES
        case "GASOLINA_ESPECIAL":
          return GasTypes.GASOLINA_ESPECIAL
        default:
          return

      }
    });

    setFormData(formFilteredDataParser);
    

  };
  if (isLoading) {
    return (
      <Loading />
    )
  }
  return (
    <div className="flex min-h-screen flex-col lg:flex-row items-center justify-between p-24">
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {data.map((station: any, index: number) => {
          const filteredGastTypes= station.gasTypes.filter((gasType: any) =>checkboxFormData?.includes(gasType.TipoCombustivel));
          return (
            <div key={index}>
              <DataCard name={station.address.name} address={station.address.address} gasTypes={filteredGastTypes!} />
            </div>
          )
        })}
      </div>
      <CheckboxForm onFormSubmit={handleFormSubmit} />
      {checkboxFormData && (
        <div className="mt-4 p-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold">Form Data:</h2>
          <pre className="mt-2 text-blue-300">{JSON.stringify(checkboxFormData, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default HomePage