import { getProvider } from '@decentraland/web3-provider'
import { getUserAccount } from '@decentraland/EthereumController'
import { RequestManager,ContractFactory } from 'eth-connect'
import Marketabi from "./abi/NFTMarket"


const marketContract = "0x6C34B7010664620BaD119Cb1DA6F40ebD377c2e7"
const NFTContract = "0xb4619339d309119892a01f29c8b0afad68f72d71"
const MGcoinContract = "0xe8889E3F0fB380F554abA8F1EF4F269b35601516"

export default async function Buy(TokenId:number ) {
    
    log(TokenId)

    const provider = await getProvider()
    const requestManager = new RequestManager(provider)

    const market = new ContractFactory(requestManager, Marketabi)
    const instance = await market.at(marketContract)

    log(instance)
    const address = await getUserAccount()
    log(address)




}