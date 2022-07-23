import { newDrops } from '../gql/queries.js';
import { useQuery } from '@apollo/client';
import { IpfsMedia } from 'react-ipfs-image';
import Purchase from './Purchase';
import '../styles/globals.css';

const Feed = () => {
  const { loading, error, data } = useQuery(newDrops);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <div>{console.log(data)}</div>

      <div className='feed'>
        {data.erc721Drops.map(
          ({
            name,
            address,
            owner,
            symbol,
            editionMetadata,
            salesConfig,
          }) => {
            if (editionMetadata != null)
              return (
                <div
                  className='data-card'
                  key={`${editionMetadata.imageURI}-${name}`}
                >
                  <a
                    href={
                      'https://create.zora.co/editions/' +
                      address
                    }
                    target='_blank'
                  >
                    <IpfsMedia
                      hash={editionMetadata.imageURI}
                      className='card-image'
                      width='100px'
                    />
                  </a>
                  {/* <p className='token-name'>{name}</p> */}
                  {/* <p>{symbol}</p> */}
                  {/* <p>{address}</p> */}
                  {/* <p>{salesConfig.publicSalePrice}</p> */}
                  {/* <Purchase
                    address={address}
                    price={salesConfig.publicSalePrice}
                  /> */}
                </div>
              );
          }
        )}
      </div>
    </div>
  );
};

export default Feed;

// key={`${editionMetadata.imageURI}-${token.tokenId}`
