import React from "react";
import { Link } from "react-router-dom";

let SideBar = () => {
  return (
    <>
    {/* 290w */}
      <div className="p-5 shadow-lg w-[240px] h-[500px] overflow-y-scroll  bg-gray-100 border border-gray-200 ">
        <div className="p-6">
          <h2 className="font-medium text-gray-400 pb-4" >BROWSE</h2>
         <Link to="/release"><h1 className="font-bold pb-4" >New Releases</h1> </Link> 
          <h1 className="font-bold pb-4">Top Charts</h1>
          <Link to="/topPlaylist"><h1 className="font-bold pb-4">Top Playlists</h1></Link>
         <Link to="/podcasts"> <h1 className="font-bold pb-4">Podcasts</h1></Link>
          <Link to="/topArtist"><h1 className="font-bold pb-4">Top Artists</h1></Link>
          <Link to="/radio">  <h1 className="font-bold pb-4">Radio</h1> </Link> 
        </div>

        <div className="p-6">
          <h2 className="font-medium text-gray-400 pb-4">LIBRARY</h2>
         <Link to="/history"> <h1 className="font-bold pb-4" >History</h1></Link>
          <h1 className="font-bold pb-4" >Songs</h1>
          <h1 className="font-bold pb-4">Albums</h1>
          <h1 className="font-bold pb-4">Podcasts</h1>
          <h1 className="font-bold pb-4">Artists</h1>
        </div>
      </div>
    </>
  );
};

export default SideBar;
