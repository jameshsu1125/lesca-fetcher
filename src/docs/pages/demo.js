import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import Fetch, { contentType } from '../../../lib';

Fetch.install({
  hostUrl: 'https://jsonplaceholder.typicode.com',
  contentType: contentType.JSON,
});

const Demo = () => {
  useEffect(() => {}, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            Fetch.post('/posts', {
              title: 'foo',
              body: 'bar',
              userId: 1,
            }).then((e) => {
              console.log(e);
            });
          }}
        >
          click
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
