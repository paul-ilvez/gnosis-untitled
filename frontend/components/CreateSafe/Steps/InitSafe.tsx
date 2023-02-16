import React, {useContext, useRef, useState} from "react";
import {
  Button,
  Card,
  Dropdown,
  Grid,
  Image,
  Input,
  Link,
  Spacer,
  Text,
  Tooltip,
} from "@nextui-org/react";
import FormHeader from "@/components/Common/FormHeader";
import StepButtons from "@/components/LoadSafe/StepButtons";
import { AppContext } from "@/store/AppContext";
import {nextScreen, prevScreen} from "@/store/slices/screenHanlderSlice";

const InitSafe = () => {
  const appCtx = useContext(AppContext);
  const [error, setError] = useState('')
  const inputNameRef = useRef()

  console.log(appCtx.appData)

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setError('')

    if (inputNameRef.current.value.length === 0) {
      return setError("name must be filled")
    }

    appCtx.setCreateSafeStatusHandler({status: "owners"})

  }

  return (
    <Grid.Container gap={2} css={{ mt: 40 }} justify="center">
      <Card variant="bordered" css={{ mw: "450px", h: "$400" }}>
        <Card.Body css={{ textAlign: "center", padding: "40px" }}>
          <FormHeader
            title={"Create new Safe"}
            subTitle={"Select network and name your Safe"}
            description={"Select the network on which to create your Safe"}
          />
          <Spacer y={2} />
          <Grid.Container justify="space-between" alignItems="center">
            <Text color="primary" b>
              Network
            </Text>
            <Dropdown>
              <Dropdown.Button>{appCtx.appData.network.name}</Dropdown.Button>
              <></>
            </Dropdown>
          </Grid.Container>
          <Grid.Container direction="column">
            <form onSubmit={handleFormSubmit}>
              <Spacer y={2} />
              <Input status={error ? 'error' : ""} css={{ width: '300px' }} labelPlaceholder="Name" type='text' ref={inputNameRef} />
              <Spacer y={6} />
              <Text>
                By continuing you consent to the <br />{" "}
                <Link href="#" color="text" isExternal>
                  <b>terms of use</b>
                </Link>
                &nbsp; and &nbsp;
                <Link href="#" color="text" isExternal>
                  <b>privacy policy</b>
                </Link>
                .
              </Text>
              <Spacer />
              <Grid.Container justify="space-between">
                <Link href='/'>
                  <Button
                      css={{ width: "100px" }}
                      bordered
                      color="#000"
                      auto
                  >
                    Back
                  </Button>
                </Link>
                <button
                  style={{
                    background: "#000",
                    color: "#fff",
                    width: "300px",
                    maxWidth: "260px",
                    borderRadius: '10px',
                     cursor: 'pointer'
                  }}
                >
                  Next
                </button>
              </Grid.Container>
              <Spacer />
              {error &&  <Text color="error">
                {error}
              </Text>}
            </form>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Grid.Container>
  );
};

export default InitSafe;
