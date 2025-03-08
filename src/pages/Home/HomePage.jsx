import React from 'react';

import styled from 'styled-components';
import icon from '../../assets/add.svg';
import { Button } from '../../components/common/Button/Button';

const HomePage = () => {
  return (
    <Box>
      <br />
      <br />
      {/* Primary-56 / props Default =>  type = p w = 100% , h = 56 */}

      <FilledButton>
        Click me
      </FilledButton>

      <br />

      <Button type='o' w='180' h='56'>
        Click me
      </Button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Button w='180' disabled>
        Click me
      </Button>

      <br />
      <br />

      {/* Secondary-40 */}
      <Button type='s' h='40'>
        Click me
      </Button>

      <br />
      {/* Secondary-40 */}
      <Button type='s' w='180' h='40' disabled>
        Click me
      </Button>
      <br />
      <br />
      {/* Outlined-56 */}
      <Button type='o' w='180'>
        <img src={icon} alt='' />
        <span>Click me</span>
      </Button>
      <br />
      <Button type='o' w='180' h='36'>
        <img src={icon} alt='' />
        <span>Click me</span>
      </Button>
      <br />
      <Button type='o' w='180' h='36' disabled>
        <img src={icon} alt='' />
        <span>Click me</span>
      </Button>
      <br />
      <Button type='o' w='36' h='36' disabled>
        <img src={icon} alt='' />
      </Button>
      <br />
      <Button type='o' w='180' disabled>
        Click me
      </Button>
      <br />
      <Button type='o' w='180' h='40'>
        Click me
      </Button>
      <br />
      <Button type='o' w='180' h='36'>
        Click me
      </Button>
      <br />
      <Button type='o' w='180' h='28'>
        Click me
      </Button>
      <br />
    </Box>
  );
};

export default HomePage;


const Box = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  padding:0 40px;
`;