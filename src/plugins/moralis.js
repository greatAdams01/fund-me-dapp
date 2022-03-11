import Moralis from 'moralis'

const appId  = import.meta.env.VITE_MORALIS_SERVER_ID
const serverUrl = import.meta.env.VITE_MORALIS_SERVER_URL

Moralis.start({ serverUrl, appId  })

export default Moralis