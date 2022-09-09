import Moralis from 'moralis'

const appId  = import.meta.env.VITE_MORALIS_SERVER_ID
const serverUrl = import.meta.env.VITE_MORALIS_SERVER_URL
console.log(serverUrl)

const moralis = Moralis.start({ serverUrl, appId  })

export default moralis