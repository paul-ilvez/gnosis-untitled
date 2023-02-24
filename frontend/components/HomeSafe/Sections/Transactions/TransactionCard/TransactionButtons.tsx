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
  numConfirmations,
  setNumConfirmations,
}: {
  transaction: GnosisTransaction;
  quorum: number;
  numConfirmations: Number;
  setNumConfirmations: Function;
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
    return numConfirmations >= quorum;
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
        icon={!loading && <TickSquare />}
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
      setNumConfirmations(numConfirmations + 1);
      console.log({numConfirmations});
      
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleRevokeConfirmation = async () => {
    try {
      setLoading(true);
      const tx = await currentSafe.revokeConfirmation(BigInt(transaction.id));
      await tx.wait();

      setLoading(false);
      setApprove(false);
      setNumConfirmations(numConfirmations - 1);
    } catch (error) {
      setLoading(false);
      setError(error.message);
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
      setError(error.message);
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
