import React, { useContext, useState } from "react";
import { Card, Grid, Loading, Spacer, Button, Text } from "@nextui-org/react";
import FormHeader from "@/components/Common/FormHeader";
import { AppContext } from "@/store/AppContext";
import AccountCard from "@/components/Common/AccountCard";
import Link from "next/link";

type StateLoadType = "idle" | "fetch" | "validate" | "processing" | "ready";

const GenerateSafe = () => {
  const [stateLoad, setStateLoad] = useState("idle");
  const { newSafeForm, safeFactory } = useContext(AppContext);
  const { owners, quorum } = newSafeForm;
  const [safeAddr, setSafeAddr] = useState<string>("");

  const createSafe = async () => {
    const addresses = owners.map((owner) => owner.address);

    try {
      setStateLoad("fetch");

      const tx = await safeFactory.createSafe(addresses, quorum);

      safeFactory.on(
        "SafeCreated",
        (from: string, to: string, value: number) => {
          setSafeAddr(from);
        }
      );

      setStateLoad("validate");

      const response = await tx.wait();

      setStateLoad("processing");

      console.log("response: ", response);

      setStateLoad("ready");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid.Container gap={2} css={{ mt: 40 }} justify="center">
      <Card variant="bordered" css={{ mw: "450px", h: "$400" }}>
        <Card.Body css={{ textAlign: "center", padding: "40px" }}>
          <Grid>
            {stateLoad !== "ready" && stateLoad !== "idle" && (
              <Loading size="xl" type="points" />
            )}
            <Spacer />
          </Grid>
          <FormHeader
            title={
              stateLoad !== "ready"
                ? "Generate new Safe 🔒"
                : "Your Safe was successfully created! 🥳"
            }
            subTitle={""}
            description={""}
          />
          <Spacer y={3} />
          <Text
            css={{ textAlign: "left" }}
            size="$lg"
            color={stateLoad === "fetch" ? "#0072F5" : "#889096"}
          >
            ✓ &nbsp; Your Safe address
            <AccountCard address={safeAddr ?? "Not Created Yet"} />
            <Spacer y={2} />
          </Text>
          <Text
            css={{ textAlign: "left" }}
            size="$lg"
            color={stateLoad === "validate" ? "#0072F5" : "#889096"}
          >
            ✓ &nbsp; Validating transaction
            <Spacer y={2} />
          </Text>
          <Text
            css={{ textAlign: "left" }}
            size="$lg"
            color={stateLoad === "processing" ? "#0072F5" : "#889096"}
          >
            ✓ &nbsp; Processing
            <Spacer y={2} />
          </Text>
          <Text
            css={{ textAlign: "left" }}
            size="$lg"
            color={stateLoad === "ready" ? "#0072F5" : "#889096"}
          >
            ✓ &nbsp; Safe is ready
            <Spacer y={2} />
          </Text>
          <Spacer y={3} />
          <Grid.Container justify="center">
            {stateLoad === "idle" && (
              <Button
                onPress={createSafe}
                style={{
                  background: "#000",
                  color: "#fff",
                  width: "400px",
                  maxWidth: "100%",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Generate
              </Button>
            )}
            {stateLoad === "ready" && (
              <Link href={`/safes/${safeAddr}`}>
                <Button
                  style={{
                    background: "#000",
                    color: "#fff",
                    width: "400px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Start using Safe
                </Button>
              </Link>
            )}
          </Grid.Container>
        </Card.Body>
      </Card>
    </Grid.Container>
  );
};

export default GenerateSafe;