import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        color="blue"
        height={100}
        width={100}
        ariaLabel="three-dots-loading"
      />
    </LoaderWrapper>
  );
};