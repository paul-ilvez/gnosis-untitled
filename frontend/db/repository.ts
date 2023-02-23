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

const  createSafeDb = async (safe) => {
  console.log(safe)
  const {address, chainId, quorum, signers} = safe
  const qs = process.env.api + '/safes';
  //проверить есть сигнерсы в базе и если есть - взять их id?
  //если кого-то нет - создать


  const body = {
    data: {
      address,
      name: "Без имени",
      chainId,
      // signers: [
      //   "string or id",
      //   "string or id"
      // ]
    }
  }
  await ky.post(qs, {json: body})
}

const getSafe = async (address) => {
  const qs = process.env.api + `/safes?populate=deep,2&fields[0]=chainId&fields[1]=name&fields[2]=balance&fields[3]=address&fields[4]=quorum&filters[address][$eq]=${address}`;
  const result = await ky.get(qs).json()
  const tempSafe = result.data[0].attributes
  const safe = {...tempSafe, signers: tempSafe.signers.data.map(el=> el.attributes)}
  return safe
}

export {getSafe, getSafes, createSafeDb }
