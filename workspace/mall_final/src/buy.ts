
import { getProvider } from '@decentraland/web3-provider'
import { getUserAccount } from '@decentraland/EthereumController'
import * as ethconnect  from 'eth-connect'
import Marketabi from "./abi/NFTMarket"
import MGabi from "./abi/MG"
import VWabi from "./abi/VW"


const marketContract = "0xad1c6055f45941CF85c40887ea55f9B2Cf200CDa"
const NFTContract = "0x8DF8C41A4A84F5f9257a019e1d31c16808709d35"
const MGcoinContract = "0x514066a543d8Df91680b140d1d5190396cA37Eeb"
const VirtualWarranty = "0x1bCD612f4AA65daB8acB5421705AB4C586313D9A"

export default async function Buy(TokenId: number, Price: number) {
    
    log(TokenId)

    const provider = await getProvider()
    const address = await getUserAccount()
    log(address)
    const requestManager = new ethconnect.RequestManager(provider)

    const market = new ethconnect.ContractFactory(requestManager, Marketabi)
    const instance = await market.at(marketContract)

    const mg = new ethconnect.ContractFactory(requestManager, MGabi)
    const mgc = await mg.at(MGcoinContract)

    const vw = new ethconnect.ContractFactory(requestManager, VWabi)
    const vwi = await vw.at(VirtualWarranty)


    const hash = await mgc.approve(marketContract, Price * 1000000000000000000, { from: address })
       
    log(hash) 
    const ll = await instance.createMarketSale(NFTContract, TokenId, { from: address })
        
    const warrantybuy = await vwi.onSale(TokenId,365, {from: address} )
    log(warrantybuy)
    
    

}

