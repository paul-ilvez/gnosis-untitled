import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Grid,
  Image,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import FormHeader from "@/components/Common/FormHeader";
import { v4 as uuidv4 } from "uuid";
import { AppContext, AppContextData } from "@/store/AppContext";
import { isAddress } from "ethers";

export type FormOwners = {
  id: string;
  name: string;
  address: string;
};

const SetOwners = () => {
  const { setCreateSafeStatusHandler, setNewSafeForm, newSafeForm } =
    useContext<AppContextData>(AppContext);

  useEffect(() => {
    if (newSafeForm.owners.length === 0) {
      setNewSafeForm({
        ...newSafeForm,
        owners: [
          {
            id: uuidv4(),
            name: "",
            address: "",
          },
        ],
      });
    }
  }, []);

  const [error, setError] = useState("");

  const tresholdInputRef = useRef<HTMLInputElement>();

  const createNewOwner = () => {
    const newOwners: FormOwners[] = [
      ...newSafeForm.owners,
      {
        id: uuidv4(),
        name: "",
        saddress: "",
      },
    ];

    setNewSafeForm({ ...newSafeForm, owners: newOwners });
  };

  const removeOwnerHandler = (id: string) => {
    const newOwners: FormOwners[] = newSafeForm.owners.filter(
      (owner) => owner.id !== id
    );
    setNewSafeForm({ ...newSafeForm, owners: newOwners });
  };

  const setOwnerData =
    (id: string, field: "name" | "address") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newOwners: FormOwners[] = newSafeForm.owners.map((owner) => {
        if (owner.id === id) {
          return {
            ...owner,
            [field]: e.target.value,
          };
        }
        return owner;
      });

      setNewSafeForm({ ...newSafeForm, owners: newOwners });
    };

  const submitForm = (e) => {
    e.preventDefault();
    setError("");

    const emptyOwners: FormOwners[] = newSafeForm.owners.filter(
      (owner) => owner.name.length !== 0 && isAddress(owner.address)
    );

    if (!emptyOwners.length || !newSafeForm.quorum) {
      return setError("Please fill all owners and check treshold input");
    }

    setCreateSafeStatusHandler({ status: "review" });
  };

  return (
    <Grid.Container gap={2} css={{ mt: 40 }} justify="center">
      <Card variant="bordered" css={{ mw: "450px", h: "$400" }}>
        <Card.Body css={{ textAlign: "center", padding: "40px" }}>
          <FormHeader
            title={"Create new Safe"}
            subTitle={"Owners and confirmations"}
            descrtiption={"Optional: Provide a name for each owner."}
          />
          <Spacer y={2} />
          <form onSubmit={submitForm}>
            {newSafeForm.owners.map((owner, i) => {
              return (
                <>
                  <Spacer />
                  <Grid.Container justify={"space-between"} alignItems="center">
                    <Text b>owner {i + 1}</Text>
                    {i !== 0 && (
                      <Grid onClick={() => removeOwnerHandler(owner.id)}>
                        <Image css={{ cursor: "pointer" }} src="/trash.svg" />
                      </Grid>
                    )}
                  </Grid.Container>
                  <Card css={{ padding: "30px 15px" }}>
                    <Input
                      status={error && !owner.name ? "error" : ""}
                      onInput={setOwnerData(owner.id, "name")}
                      value={owner.name}
                      labelPlaceholder="Owner Name"
                    />
                    <Spacer y={2} />
                    <Input
                      status={error && !isAddress(owner.address) ? "error" : ""}
                      onInput={setOwnerData(owner.id, "address")}
                      value={owner.address}
                      labelPlaceholder="Owner Address or ENS"
                    />
                    {error && !isAddress(owner.address) && (
                      <Text color="error">is not address</Text>
                    )}
                  </Card>
                </>
              );
            })}
            <Button onClick={createNewOwner} light auto>
              + Add new owner
            </Button>
            <Spacer y={2} />
            <Grid css={{ textAlign: "left" }}>
              <Text size="$2xl" b>
                Treshold
              </Text>
              <Text size="$md" color="#9E9E9E">
                Any transaction requires the confirmation of:
              </Text>
              <Spacer />
              <Input
                max={newSafeForm.owners.length}
                status={error && !newSafeForm.quorum ? "error" : ""}
                placeholder={1}
                value={newSafeForm.quorum}
                onChange={(e) =>
                  setNewSafeForm({ ...newSafeForm, quorum: e.target.value })
                }
                label="Number"
                type="number"
              />
              <Spacer />
            </Grid>
            <Grid.Container justify="space-between">
              <Button
                onClick={() => setCreateSafeStatusHandler({ status: "init" })}
                css={{ width: "100px" }}
                bordered
                color="#000"
                auto
              >
                Back
              </Button>
              <button
                style={{
                  background: "#000",
                  color: "#fff",
                  width: "300px",
                  maxWidth: "260px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Next
              </button>
            </Grid.Container>
            {error && (
              <>
                <Spacer y={2} />
                <Text color="error">{error}</Text>
              </>
            )}
          </form>
        </Card.Body>
      </Card>
    </Grid.Container>
  );
};

export default SetOwners;
