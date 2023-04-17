import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./helpers/random";
import axios from "axios";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-[url(/images/start.png)] mx-auto py-4 min-h-screen">
      <div className="-translate-y-[40%]">
        <img
          className="mx-auto animate-spin-slow "
          src="/images/portal.png"
          alt=""
        />
      </div>

     
      <div>
        <img
          className="mx-auto  absolute sm:w-[40%] sm:left-[30px] top-5 md:left-[30%] md:animate-pulse sm:animete-pulse  lg:left-[30%] 2xl:left-[52%] "
          src="/images/logo.png"
          alt=""
        />
      </div>

      <form className="" onSubmit={handleSubmit}>
        <div className="flex justify-center py-2 mt-[-120px] ">
          <input
            className="border-green-400  bg-black text-[#938686] font-bold sm:px-10 px-1 py-2 w-[65%]  border-[2px]"
            id="locationId"
            placeholder="Type a location id ..."
            type="text"
          />

          <button className="text-white border-green-500 bg-green-800/50 border-[2px] py-[8px] px-1 sm:px-10 md:px-4  ">
            Search
            <i className=" px-1  -translate-y-[-5px] mx-auto  bx bx-search-alt-2 "></i>
          </button>
        </div>

        <div className="mt-16">
          <h2 className="text-green-400 text-center font-bold text-xl">
            Welcome to the crazy universe!
          </h2>
        </div>
      </form>
      <Location location={location} />
      <ResidentList location={location} />
    </div>
  );
}

export default App;
