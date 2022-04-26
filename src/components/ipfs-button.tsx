import React, { useState, ReactElement } from "react";
export function IpfsButton(): ReactElement {
	const [state, setState] = useState();
	return (<>
		<a href="https://ipfs.io">
			<div className="rounded-full bg-blue-400 p-1">
				<img className=" h-10" src="./assets/ipfs-logo.png" alt="ipfs logo" />
			</div>
		</a>
	</>);
}
