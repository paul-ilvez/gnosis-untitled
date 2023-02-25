import { Card, Text, Spacer, Row } from "@nextui-org/react";
import { useContext, useEffect } from "react";
import AssetsNft from "./AssetsNft";
import AssetsToken from "./AssetsToken";
import AssetsHeaderButtons from "./AssetsHeaderButton";
import { AppContext } from "@/store/AppContext";

const headerButtons = [
  {
    id: 1,
    type: "Token",
  },
  {
    id: 2,
    type: "NFT",
  },
];

export default function Assets() {
  const { assetsSection } = useContext(AppContext);

  const sectionMap: { [key: string]: JSX.Element } = {
    Token: <AssetsToken />,
    NFT: <AssetsNft />,
  };

  return (
    <Card
      variant="bordered"
      css={{ minHeight: "499px", mw: "720px", borderRadius: "39px" }}
    >
      <Card.Header>
        <Spacer y={2} />
        <Row justify="flex-start">
          {headerButtons.map((button, i) => (
            <AssetsHeaderButtons key={i} type={button.type} />
          ))}
        </Row>
      </Card.Header>
      <Card.Divider />
      <Card.Body>{sectionMap[assetsSection.type]}</Card.Body>
    </Card>
  );
}
