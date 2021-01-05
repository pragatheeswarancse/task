import React from 'react';
import Logo from '../assets/logo.png'
import play from '../assets/play.svg'
import paush from '../assets/Mask Group 1.svg'
import stop from '../assets/Group 21.svg'

const Form = (props) => {
  return (
        <div>
          <div className="shadow">
              <div className="py-2">
              <div className="pl-56">
              <div className="w-32">
                  <img src={Logo} alt="logo"/>
              </div>
              </div>
              <div className="flex justify-start">
              <div className="pl-36 pt-12">
                  <p className="text text-indigo-900 font-bold">Search Term</p>
                  <div className="shadow-2xl">
                    <input className="border border-indigo-900 rounded px-3 placeholder-black::placeholder" placeholder="Visitor"></input>
                  </div>
              </div>
              <div className="pl-12 pt-12">
                  <p className=" text-indigo-900 font-bold">city</p>
                  <div className="shadow-2xl">
                    <input className="border border-indigo-900 rounded px-3 placeholder-black::placeholder" placeholder="Marshall"></input>
                  </div>
              </div>
              </div>
              <div className="flex justify-start">
              <div className="pl-36 pt-12">
                  <p className="text text-indigo-900 font-bold">Country</p>
                  <div className="shadow-2xl">
                    <input className="border border-indigo-900 rounded px-3 placeholder-black::placeholder" placeholder="USA"></input>
                  </div>
              </div>
              <div className="pl-12 pt-12">
                  <p className=" text-indigo-900 font-bold">Region</p>
                  <div className="shadow-2xl">
                    <input className="border border-indigo-900 rounded px-3 placeholder-black::placeholder" placeholder="Michigan"></input>
                  </div>
              </div>
              </div>
              <div className="flex justify-start pl-44 py-12">
                <div className="px-12">
                  <div className="w-12">
                      <img src={play} alt="play"></img>
                  </div>
                  </div>
                  <div className ="px-12">
                  <div className="w-12">
                      <img src={paush} alt="play"></img>
                  </div>
                  </div>
                  <div className ="pl-12">
                  <div className="w-12">
                      <img src={stop} alt="play"></img>
                  </div>
                  </div>
              </div>
            </div>
            <div className="flex justify-start pb-4">
            <div className="pl-24 pt-1">
                  <button className="px-20 py-2 rounded border border-blue-500 bg-blue-500 text-white">DOWNLOAD</button>
              </div>
              <div className="pl-12 pt-1">
                  <button className="px-24 py-2 rounded border border-blue-500 text-blue-500">SAVE</button>
              </div>
              </div>
          </div>
          
        </div>
    )
}
export default Form;