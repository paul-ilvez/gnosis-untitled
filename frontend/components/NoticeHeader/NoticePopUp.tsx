import {
  Button,
  Card,
  Container,
  Image,
  Modal,
  Popover,
  Row,
  Text,
} from "@nextui-org/react";

const NoticePopUp = () => {
  return (
    <Popover placement="bottom-right">
      <Popover.Trigger>
        <Button auto bordered css={{ border: "$accents0" }}>
          <Image width={24} height={24} src="/ring.svg" alt="ring" />
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Notifications</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </Popover.Content>
    </Popover>
  );
};

export default NoticePopUp;
