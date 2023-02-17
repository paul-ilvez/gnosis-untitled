const getLittleAddress = (addr) => {
  return addr.slice(0, 5) + "..." + addr.slice(38);
};

export default getLittleAddress;
