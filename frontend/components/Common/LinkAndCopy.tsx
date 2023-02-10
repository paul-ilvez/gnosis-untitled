import React, { useEffect, useState } from "react";
import { Grid, Image, Spacer, Tooltip } from "@nextui-org/react";

const LinkAndCopy = ({ address = "", link = "no link" }) => {
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

  return (
    <Grid.Container
      direction="flex"
      alignItems="center"
      css={{ width: "70px" }}
    >
      <Tooltip content={copy ? "Copied" : "Copy to clipboard"}>
        <Image
          onClick={copyText}
          css={{ cursor: "pointer" }}
          src="./copy.svg"
          width={16}
          height={16}
        />
      </Tooltip>
      <Spacer />
      <Tooltip content={link}>
        <a href={link === "no link" ? "" : `View on goerli.etherscan.io`}>
          <Image src="./link-external.svg" width={16} height={16} />
        </a>
      </Tooltip>
    </Grid.Container>
  );
};

export default LinkAndCopy;
