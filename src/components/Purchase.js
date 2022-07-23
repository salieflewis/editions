import { ethers, BigNumber } from 'ethers';
import ERC721Drop from '../ERC721Drop.json';

import {
  useContractWrite,
  useContractRead,
  useProvider,
} from 'wagmi';
import provider from '../index.js';

const Purchase = (address, price) => {
  const provider = useProvider(); // Alchemy
  console.log(price);

  const { data, isError, isLoading, write } =
    useContractWrite({
      addressOrName: address,
      contractInterface: ERC721Drop,
      functionName: 'purchase',
      args: [price],
    });

  //   const { data, error, isLoading } = useContractRead({
  //     addressOrName:
  //       '0x2df53f0f4ad5e26fb71e67d39889ecfac984dd1c',
  //     contractInterface: ERC721Drop,
  //     functionName: 'name',
  //   });

  console.log(data);

  return <button onClick={() => write()}>mint</button>;
};

export default Purchase;

// address in the right format
// how to  pass  arguments properly, improper gas estimation

// onClick={() => write()}
