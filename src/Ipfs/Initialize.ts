import { create, IPFSHTTPClient } from "ipfs-http-client";
var client: undefined | IPFSHTTPClient = undefined;
export function InitIpfs() {
	if(client) return;
	client = create({
		url: 'http://localhost:5001/api/v0',
		timeout: '1m'
	});
}

export function GetClient() {
	if(!client) InitIpfs();

	return client;
}