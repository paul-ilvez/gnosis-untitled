import ky from 'ky';
import {ethers} from "ethers";
import groupBy from "@/libs/groupArrayBy"

class Account {
    address
    safes
    constructor(address: string) {
        this.address = address
    }


    loadSafes = async () => {
        const qs = process.env.api + `/safes/?populate=deep&fields[0]=chainId&fields[1]=name&fields[2]=balance&fields[3]=address&filters[signers][address][$eq]=${this.address}`
        const result = await ky.get(qs).json()
        this.safes = groupBy('chainId')(result.data.map(el=>el.attributes))
    }
}

export default Account