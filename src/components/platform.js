import React, { useState } from "react";
import New from "../assets/lt.jpg";
import Zomato from "../assets/zomato.svg";
import Bms from "../assets/bms.svg";
const Platform = (props) => {
  const [url, setUrl] = useState("");

  const handleFetch = () => {
    console.log(url);

    var dummy = url.split(",");

    console.log(dummy);

    var params = {
      project: "iheartjane",
      spider: "iheartjane_spider",
      domains: dummy,
      // domains: ['https://www.iheartjane.com/stores/1003/mapleglen-care-center-medical'],
    };

    var formBody = [];
    for (var property in params) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    if (url) {
      var option = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: formBody,
      };

      console.log(option);
      fetch("http://165.22.35.237:6800/schedule.json", option)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("successfull");
        });
    } else {
    }
  };

  const handleInput = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="pt-32 pb-6 pl-3">
      <div className="border-none shadow-2xl px-4 py-2 rounded">
        <div className="relative pt-1">
          <div className="flex justify-start">
            <p>Proxy</p>
            <p className="pl-40">100Mbps</p>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex w-60 rounded bg-purple-200">
            <div className="shadow-none w-32 flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="shadow-lg p-5">
          <div>
            <p>Other Platform</p>
            <input
              className="px-6 py-1 border"
              placeholder="Search"
              onChange={handleInput}
            ></input>
            <div className="mt-3 ml-20">
              <button
                className="border bg-blue-500 px-10 text-white"
                onClick={handleFetch}
              >
                Run
              </button>
            </div>
          </div>
          <ul>
            <li className="pt-5">
              <div className="flex justify-start pt-5 bg-purple-900 rounded-lg px-2">
                <div className="">
                  <div className="w-24 p-5">
                    <img src={New} alt="play"></img>
                  </div>
                </div>
                <p className="font-bold text-sm text-white pt-5">Foursquare</p>
                <p className="font-bold text-sm text-white pt-5 pl-2">11K</p>
                <p className="font-bold text-sm text-white pt-5 pl-2">3K/H</p>
              </div>
            </li>
            <div className="pt-4">
              <li className="pt shadow-lg">
                <div className="flex justify-start pt-5  rounded-lg px-2">
                  <div className="">
                    <div className="w-24 p-5">
                      <img src={Zomato} alt="play"></img>
                    </div>
                  </div>
                  <p className="font-bold text-sm  pt-5">Zomato</p>
                  <p className="font-bold text-sm  pt-5 pl-2">11K</p>
                  <p className="font-bold text-sm  pt-5 pl-2">3K/H</p>
                </div>
              </li>
            </div>
            <div className="pt-4">
              <li className="pt shadow-lg">
                <div className="flex justify-start pt-5  rounded-lg px-2">
                  <div className="">
                    <div className="w-24 p-5">
                      <img src={Bms} alt="play"></img>
                    </div>
                  </div>
                  <p className="font-bold text-sm  pt-8">BookMyShow</p>
                  <p className="font-bold text-sm  pt-8 pl-2">11K</p>
                  <p className="font-bold text-sm  pt-8 pl-2">3K/H</p>
                </div>
              </li>
            </div>
            <div className="pt-4">
              <li className="pt shadow-lg">
                <div className="flex justify-start pt-5  rounded-lg px-2">
                  <div className="">
                    <div className="w-24 p-5">
                      <img src={New} alt="play"></img>
                    </div>
                  </div>
                  <p className="font-bold text-sm  pt-5">Trip Advisor</p>
                  <p className="font-bold text-sm  pt-5 pl-2">10K</p>
                  <p className="font-bold text-sm  pt-5 pl-2">4K/H</p>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Platform;