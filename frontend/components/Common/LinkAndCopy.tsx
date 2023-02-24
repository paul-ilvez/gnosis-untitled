import React, { useContext, useEffect, useState } from "react";
import { Grid, Image, Spacer, Tooltip } from "@nextui-org/react";
import { AppContext } from "@/store/AppContext";
import { add } from "@noble/hashes/_u64";

const LinkAndCopy = ({ address = "", tx = false }) => {
  const { network } = useContext(AppContext);

  const [copy, setCopy] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }, [copy]);

  const copyText = () => {
    navigator.clipboard.writeText(address);
    setCopy(true);
  };

  if (!address) return null;

  return (
    <Grid.Container
      alignItems="center"
      css={{ width: "70px" }}
    >
      <Tooltip content={copy ? "Copied" : "Copy to clipboard"}>
        <Image
          onClick={copyText}
          css={{ cursor: "pointer", mr: 5 }}
          src="/copy.svg"
          alt="copy"
          width={16}
          height={16}
        />
      </Tooltip>
      <Tooltip content={"View on etherscan"}>
        <a
          style={{ cursor: "pointer", marginLeft: "5px" }}
          target="_blank"
          href={`${network.blockExplorer}${tx ? "tx" : "address"}/${address}`} rel="noreferrer"
        >
          <Image
            alt="etherscan"
            src="/link-external.svg"
            width={16}
            height={16}
          />
        </a>
      </Tooltip>
    </Grid.Container>
  );
};

export default LinkAndCopy;
