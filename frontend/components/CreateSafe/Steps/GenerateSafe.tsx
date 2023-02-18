import React, { useContext, useEffect, useState } from "react";
import { Card, Grid, Loading, Spacer, Button, Text } from "@nextui-org/react";
import FormHeader from "@/components/Common/FormHeader";
import walletProvider from "@/abi/walletProvider";
import { Contract } from "ethers";
import { AppContext, AppContextData } from "@/store/AppContext";
import AccountCard from "@/components/Common/AccountCard";
import Link from "next/link";

type StateLoadType = "idle" | "fetch" | "validate" | "processing" | "ready";

const GenerateSafe = () => {
  const [stateLoad, setStateLoad] = useState("idle");
  const { newSafeForm, safeFactory } = useContext<AppContextData>(AppContext);
  const { owners, quorum } = newSafeForm;
  const [safeAddr, setSafeAddr] = useState<string>("");

  const createSafe = async () => {
    console.log(newSafeForm);

    const addresses = owners.map((owner) => owner.address);

    try {
      setStateLoad("fetch");

      const signer = await walletProvider.getSigner();
      const safeFactoryWithSigner: Contract = safeFactory.connect(signer);

      console.log("safeFactoryWithSigner: ", safeFactoryWithSigner);

      const tx = await safeFactoryWithSigner.createSafe(addresses, quorum);
      console.log("tx started: ", tx);

      // safeFactoryWithSigner.on("SafeCreated", (from, to, value, event) => {
      //   let info = {
      //     from: from,
      //     to: to,
      //     value: value,
      //     data: event,
      //   };
      //   console.log(">>> SAFE CREATED !!! <<<");

      //   console.log(JSON.stringify(info, null, 4));
      // });

      safeFactoryWithSigner.on(
        "SafeCreated",
        (from: string, to: string, value: number) => {
          setSafeAddr(from);
        }
      );

      // const filter = {
      //   address: "0x1Ef5550D3b9b9e8637A0B7b8F44B739D96F3dB59",
      //   topics: [
      //     // the name of the event, parnetheses containing the data type of each event, no spaces
      //     utils.id("SafeCreated(address,address,uint256)"),
      //   ],
      // };
      // walletProvider.on(filter, (log, event) => {
      //   console.log({ log, event });

      //   // do whatever you want here
      //   // I'm pretty sure this returns a promise, so don't forget to resolve it
      // });

      setStateLoad("validate");

      const response = await tx.wait();

      setStateLoad("processing");

      console.log("response: ", response);

      setStateLoad("ready");

      // const firstSafe = await safeFactory.getSafe(0);
      // console.log("1st safe: ", firstSafe);
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
            • Your Safe address
            <AccountCard address={safeAddr ?? "Not Created Yet"} />
            <Spacer y={2} />
          </Text>
          <Text
            css={{ textAlign: "left" }}
            size="$lg"
            color={stateLoad === "validate" ? "#0072F5" : "#889096"}
          >
            • Validating transaction
            <Spacer y={2} />
          </Text>
          <Text
            css={{ textAlign: "left" }}
            size="$lg"
            color={stateLoad === "processing" ? "#0072F5" : "#889096"}
          >
            • Processing
            <Spacer y={2} />
          </Text>
          <Text
            css={{ textAlign: "left" }}
            size="$lg"
            color={stateLoad === "ready" ? "#0072F5" : "#889096"}
          >
            • Safe is ready
            <Spacer y={2} />
          </Text>
          <Spacer y={3} />
          <Grid.Container justify="center">
            {stateLoad === "idle" && (
              <Button
                onClick={createSafe}
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
              <Link href="/home-safe">
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
