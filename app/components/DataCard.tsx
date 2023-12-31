'use client'
import { log } from 'console'
import React from 'react'
import { GasTypes } from '@/types/GasTypes'
type DataCardProps = {
    name: string
    address: string
    gasTypes: Array<Object>

}
const DataCard = ({ name, address, gasTypes }: DataCardProps) => {
    const filteredData = gasTypes.filter((gasType: any) => gasType.TipoCombustivel === GasTypes.GASOLEO_SIMPLES || gasType.TipoCombustivel === GasTypes.GASOLEO_ESPECIAL)

    return (
        <>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                    {name}
                </h5>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{address}</p>
                <ul className="my-4 space-y-3">
                    {filteredData.map((gasType: any, index: number) => {
                        return (
                            <li key={index}>
                                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                    <span className="flex-1 ms-3 whitespace-nowrap">{gasType.TipoCombustivel}</span>
                                    <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">{gasType.Preco}</span>
                                </a>
                            </li>

                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default DataCard