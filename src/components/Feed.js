import { newDrops } from '../gql/queries.js';
import { useQuery } from '@apollo/client';
import { IpfsImage } from 'react-ipfs-image';
import Purchase from './Purchase';
import '../styles/globals.css';

const Feed = () => {
  const { loading, error, data } = useQuery(newDrops);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // const addressArray = data.erc721Drops.map((location) => {
  //   return location.address;
  // });

  // const imageData = data.erc721Drops.map(
  //   (token) => token.editionMetadata
  // );

  function goToCreate() {}

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
                    <IpfsImage
                      hash={editionMetadata.imageURI}
                      className='card-image'
                      width='100px'
                    />
                  </a>
                  <p className='token-name'>{name}</p>
                  <p>{symbol}</p>
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

      {/* <div className='feed'>
        {imageData.map(({ imageURI }) => {
          return (
            <div className='feed-card'>
              <IpfsImage
                hash={imageURI}
                className='card-image'
              />
            </div>
          );
        })}
      </div> */}

      {/* <div className='feed'>
        {data.erc721Drops.map(
          ({ name, address, owner, symbol }) => {
            return (
              <div className='data-card'>
                <p>{name}</p>
                <p>{address}</p>
               
                <p>{symbol}</p>
                <Purchase />
              </div>
            );
          }
        )}
      </div> */}
    </div>
  );
};

export default Feed;

// key={`${editionMetadata.imageURI}-${token.tokenId}`
