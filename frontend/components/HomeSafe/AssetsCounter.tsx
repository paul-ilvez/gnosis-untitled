import { Row, Text } from "@nextui-org/react";
import { formatEther, parseEther } from "ethers";
import LinkAndCopy from "../Common/LinkAndCopy";

export default function AssetsCounter({ balance }) {
  const tokens = formatEther(balance + "");

  return (
    <Row align="center" justify="center">
      <Text b size={14} color="#666666" css={{ mr: "$5" }}>
        Tokens
        <Text b size={20} css={{ ml: "$5" }}>
          {tokens}
        </Text>
      </Text>
      <Text b size={14} color="#666666" css={{ mr: "$10" }}>
        NFT
        <Text b size={20} css={{ ml: "$5" }}>
          0
        </Text>
      </Text>
      <LinkAndCopy />
    </Row>
  );
}
