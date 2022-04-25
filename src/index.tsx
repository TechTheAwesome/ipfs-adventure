import React from 'react'
import { render } from 'react-dom'
import { create, IPFSHTTPClient, multiaddr, CID } from 'ipfs-http-client'
import './index.css';

const readText = async (ipfs: IPFSHTTPClient, cid: CID): Promise<string> => {
  const decoder = new TextDecoder()
  let content = ''
  for await (const chunk of ipfs.cat(cid)) {
	  content += decoder.decode(chunk)
  }

  return content
}

export async function Start () {
  const ipfs = create({
    url: '/ip4/127.0.0.1/tcp/8080'
  })
  const cid = CID.parse('QmSQEMwqzsxB6HQem3tGeNE18jhMdvWDqDgWn6sM47yWWB')
  let result
  console.log(cid)
  if (cid !== null) {
    result = await readText(ipfs,cid);
  }
  console.log(result)
  render(
		<React.StrictMode>
		<h1 className='text-2xl' >Hi from react!</h1>
		<h3 className='text-5xl' >You can only see secret if ipfs is running</h3>
    <div className='text-3xl font-bold underline'>{result}</div>
    <a href="ipfs://bafybeib4lgficmohybo4wild73tjwdxlxtwbihu4yuefnwlcxcagk3fywa">{cid.toV1().toString()}</a>
		</React.StrictMode>
		,
		document.getElementById('root')
  )
}
Start().catch((error) => {
  console.log('Init failed:', error)
})
