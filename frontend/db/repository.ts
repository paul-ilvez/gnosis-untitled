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
  const {address, chainId, quorum, owners} = safe

  const qs = process.env.api + '/safes';

  const signersIds = owners.map( async (owner) => {
    const id = await getOwner(owner.address)
    if (id) {
      return id
    } else {
      const id = await createOwner(owner.address)
      return id
    }
  })

  await Promise.all(signersIds).then(async (data) => {
    const body = {
      data: {
        address,
        name: "Без имени",
        chainId: String(chainId),
        quorum,
        signers: data.map(id=>{
          return {id}
        })
      }
    }
    await ky.post(qs, {json: body})
  })


}

const getSafe = async (address) => {
  const qs = process.env.api + `/safes?populate=deep,2&fields[0]=chainId&fields[1]=name&fields[2]=balance&fields[3]=address&fields[4]=quorum&filters[address][$eq]=${address}`;
  const result = await ky.get(qs).json()
  const tempSafe = result.data[0].attributes
  const safe = {...tempSafe, signers: tempSafe.signers.data.map(el=> el.attributes)}
  return safe
}

const getOwner = async (address: string) => {
  const qs = process.env.api + `/owners?fields[0]=address&filters[address][$eq]=${address}`;
  const result = await ky.get(qs).json()

  if (result?.data?.length > 0) {
    return  result.data[0].id
  }
  return null
}

const createOwner = async (address: string) => {
  const qs = process.env.api + '/owners';
  const body = {
    data: {
      address
    }
  }

  await ky.post(qs, {json: body})
  const id = await getOwner(address)
  return id
}

export {getSafe, getSafes, createSafeDb }
