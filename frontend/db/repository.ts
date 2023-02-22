import ky from 'ky';
import groupBy from "@/libs/groupArrayBy"

const getSafes = async (address) => {
  const qs = process.env.api + `/safes/?populate=deep&fields[0]=chainId&fields[1]=name&fields[2]=balance&fields[3]=address&fields[4]=quorum&filters[signers][address][$eq]=${address}`
  const result = await ky.get(qs).json()
  const safes = result.data
    .map(el=>el.attributes)
    .map(el => {
      return {
        ...el,
        signers: el.signers.data
      }
    })
  return safes
}

const  createSafe = async (safe) => {
  const {address, name, chainId} = safe
  const qs = process.env.api + '/api/safes';
  const body = {
    data: {
      address,
      name,
      chainId,
      balance: "100000000000000",
      signers: [
        "string or id",
        "string or id"
      ]
    }
  }
  await ky.post(qs, {json: body})
}
  export {getSafes, createSafe }