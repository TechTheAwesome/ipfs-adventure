import React from "react";
export function IpfsButton() {
  return (<>
    <a href="https://ipfs.io" className="">
      <div className="rounded-full bg-blue-400 p-1">
        <img className=" h-10" src="./assets/ipfs-logo.png" alt="ipfs logo" />
      </div>
    </a>
  </>);
}
