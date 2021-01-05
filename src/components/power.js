import React from 'react';

const Power = (props) => {
  return (
    <div>
        <div className="pt-24 pb-6 px-24">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="py-2 px-18 flex justify-start gap-x-6">
            <div className="border-none shadow-2xl px-4 rounded">
            <div className="relative pt-1">
                <div className="flex justify-start">
                   <p>CPU</p>
                   <p className="pl-40">80%</p>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex w-56 rounded bg-blue-200">
                <div  className="shadow-none w-44 flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
            </div>
            </div>
            <div className="pl-6">
            <div className="border-none shadow-2xl px-4 py-2 rounded">
            <div className="relative pt-1">
                <div className="flex justify-start">
                   <p>RAM</p>
                   <p className="pl-40">100%</p>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex w-56 rounded bg-red-200">
                <div  className="shadow-none w-56 flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"></div>
                </div>
            </div>
            </div>
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default Power;
