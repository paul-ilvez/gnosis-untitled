import ErrorModal from "@/components/ErrorModal/ErrorModal";
import { AppContext } from "@/store/AppContext";
import {
  Grid,
  Spacer,
  Card,
  Row,
  Button,
  Loading,
  Text,
} from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";
import { CloseSquare, Send, TickSquare } from "react-iconly";

export default function TransactionButtons({
  transaction,
  quorum,
}: {
  transaction: GnosisTransaction;
  quorum: number;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [execute, setExecute] = useState<boolean>(false);
  const [approve, setApprove] = useState<boolean>(false);

  const { currentSafe } = useContext(AppContext);

  useEffect(() => {
    setApprove(transaction.isConfirmedByUser);
  }, []);

  function isCanBeExecuted(): boolean {
    const numConfirmations = approve
      ? Number(transaction.numConfirmations) + 1
      : transaction.numConfirmations;

    return Number(numConfirmations) >= quorum;
  }

  function renderConfirmRevokeButton(): React.ReactElement {
    if (approve) {
      return (
        <Button
          onPress={handleRevokeConfirmation}
          css={{ w: "140px" }}
          color="error"
          disabled={loading}
          auto
          bordered
          icon={!Loading && <CloseSquare />}
        >
          {loading ? (
            <Loading type="points-opacity" color="currentColor" size="sm" />
          ) : (
            "Revoke"
          )}
        </Button>
      );
    }

    return (
      <Button
        color="success"
        auto
        bordered
        disabled={loading}
        css={{ w: "140px" }}
        icon={<TickSquare />}
        onPress={handleApproveTx}
      >
             {loading ? (
              <Loading type="points-opacity" color="currentColor" size="sm" />
            ) : (
              "Approve"
            )}
      </Button>
    );
  }

  const handleApproveTx = async () => {
    try {
      setLoading(true);
      const tx = await currentSafe.confirmTransaction(BigInt(transaction.id));
      await tx.wait();

      setLoading(false);
      setApprove(true);
    } catch (error) {
      setLoading(false);
      setError(
        "MetaMask Tx Signature: User denied transaction signature or network is fall."
      );
    }
  };

  const handleRevokeConfirmation = async () => {
    try {
      setLoading(true);
      const tx = await currentSafe.revokeConfirmation(BigInt(transaction.id));
      await tx.wait();

      setLoading(false);
      setApprove(false);
    } catch (error) {
      setLoading(false);
      setError(
        "MetaMask Tx Signature: User denied transaction signature or network is fall."
      );
    }
  };

  const handleExecuteTx = async () => {
    try {
      setLoading(true);
      const tx = await currentSafe.executeTransaction(BigInt(transaction.id));
      await tx.wait();

      setLoading(false);
      setExecute(true);
    } catch (error) {
      setLoading(false);
      setError(
        "MetaMask Tx Signature: User denied transaction signature or network is fall."
      );
    }
  };

  if (execute) {
    return (
      <Card.Footer>
        <Row css={{ pt: 10 }}>
          <Text color="green" b>
            Transaction is successfully executed &nbsp; ^_^
          </Text>
        </Row>
      </Card.Footer>
    );
  }

  return (
    <Card.Footer>
      <Row css={{ pt: 10 }}>
        <Grid.Container direction="row" justify="center" alignItems="center">
          {renderConfirmRevokeButton()}
          <Spacer />
          <Button
            icon={!loading && <Send />}
            auto
            css={{ w: "140px" }}
            color="primary"
            disabled={!isCanBeExecuted() || loading}
            onPress={handleExecuteTx}
          >
            {loading ? (
              <Loading type="points-opacity" color="currentColor" size="sm" />
            ) : (
              "Execute"
            )}
          </Button>
        </Grid.Container>
        {error && (
          <ErrorModal errorMessage={error} closeHandler={() => setError("")} />
        )}
      </Row>
    </Card.Footer>
  );
}
