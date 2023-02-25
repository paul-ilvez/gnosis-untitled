import { Card, Row, Text, Spacer, Grid, Table } from "@nextui-org/react";
import { ethers } from "ethers";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "@/store/AppContext";
export default function AssetsToken() {
  const {
    provider,
    currentSafe,
    connected,
  }: {
    currentSafe: GnosisUntitled;
  } = useContext(AppContext);

  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    if (currentSafe == null || !connected) {
      return;
    }
    (async () => {
      if (provider == null || !connected) {
        return;
      }

      const tempAddress = currentSafe.target;
      const tempBalance = Number(await provider.getBalance(tempAddress));

      setBalance(tempBalance);
    })();
  }, [currentSafe, provider, connected]);

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Column>Assets</Table.Column>
          <Table.Column>Balance</Table.Column>
          <Table.Column>Value</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>Testnet ETH</Table.Cell>
            <Table.Cell>
              {ethers.formatEther(balance.toString())} ETH
            </Table.Cell>
            <Table.Cell>{Number(ethers.formatEther(balance.toString())) * 1597.98}$</Table.Cell> 
            {/* TODO add a real price feed  */}
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}
