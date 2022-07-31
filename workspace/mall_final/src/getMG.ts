import { getProvider } from '@decentraland/web3-provider'
import { getUserAccount } from '@decentraland/EthereumController'
import * as ethconnect  from 'eth-connect'
import MGabi from "./abi/MG"


const MGcoinContract = "0x514066a543d8Df91680b140d1d5190396cA37Eeb"




export default async function getMG() {
    
    const provider = await getProvider()
    const address = await getUserAccount()
    const requestManager = new ethconnect.RequestManager(provider)

    const mg = new ethconnect.ContractFactory(requestManager, MGabi)
    const mgc = await mg.at(MGcoinContract)

    const hash = await mgc.mintToken({ from: address })

    
}