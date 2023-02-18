import React, { useContext } from "react";
import { Dropdown } from "@nextui-org/react";
import { AppContext, AppContextData } from "@/store/AppContext";
import { Network, networks } from "@/components/SafeList/Networks";

const NetworkDropdown = () => {
  const { network, setNetwork } = useContext<AppContextData>(AppContext);

  const changeNetwork = (networkItem: Network) => {
    const newNetwork = networks.find((item) => {
      return item.chaindId === +networkItem.currentKey;
    });

    setNetwork(newNetwork);
  };

  return (
    <Dropdown>
      <Dropdown.Button>{network.name}</Dropdown.Button>
      <Dropdown.Menu
        aria-label="Static Actions"
        onSelectionChange={changeNetwork}
        selectionMode="single"
        selectedKeys={networks}
      >
        {networks.map((networkItem: Network) => {
          return (
            <Dropdown.Item key={networkItem.chaindId}>
              {networkItem.name}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NetworkDropdown;
