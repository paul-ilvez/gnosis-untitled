import { AppContext } from "@/store/AppContext";
import { useContext, useEffect } from "react";

export const useLoadSafe = (contractAddress: string) => {
    const {
        account,
        currentMenuSection,
        currentSafe,
        setCurrentSafe,
        connected,
        signer,
      } = useContext(AppContext);

  useEffect(() => {
    if (!connected) {
      setErrorMessage("Blockchain Wallet is not connected");      return;
    }


    if (
      contractAddress?.length != 42 ||
      contractAddress.substring(0, 2) != "0x"
    ) {
      setErrorMessage("Incorrect address");
      return;
    }

    (async () => {
      if (signer == null) {
        return;
      }

      try {
        const tempContract = new Contract(
          contractAddress,
          GnosisUntitledAbi,
          signer
        ) as unknown as GnosisUntitled;

        setCurrentSafe(tempContract);
        setQuorum(Number(await tempContract.quorum()));
        const txCount = Number(
          (await tempContract.getTransactionCount()) as BigInt
        );
        const tempTxs: GnosisTransaction[] = [];
        const tempHistory: GnosisTransaction[] = [];

        for (let i = 0; i < txCount; i++) {
          const tx = await tempContract.getTransaction(BigInt(i));
          const isConfirmedByUser = await tempContract.isConfirmed(
            BigInt(i),
            account
          );
          const newTx: GnosisTransaction = {
            id: i,
            to: tx[0],
            value: tx[1],
            data: tx[2],
            executed: tx[3],
            numConfirmations: tx[4],
            type: Number(tx[5]),
            date: new Date(Number(tx[6]) * 1000),
            isConfirmedByUser,
          };
          if (!newTx.executed) {
            tempTxs.push(newTx);
            continue;
          }

          tempHistory.push(newTx);
        }
        setTxs(tempTxs);
        setHistory(tempHistory);
      } catch (e) {
        setErrorMessage("Unknown error");
        console.error(e);
      }
    })();
  }, [query, connected, signer]);
};
