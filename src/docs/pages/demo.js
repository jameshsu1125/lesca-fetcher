import { Button, ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import Fetch, { contentType } from '../../../lib';

const installConfig = {
  hostUrl: 'https://jsonplaceholder.typicode.com',
  contentType: contentType.JSON,
};
const postBody = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

Fetch.install(installConfig);

const Demo = () => {
  const [postRespone, setPostRespone] = useState({});
  useEffect(() => {}, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>
      1. Fetch install config
      <pre>
        <code>{JSON.stringify(installConfig)}</code>
      </pre>
      2. post body
      <pre>
        <code>{JSON.stringify(postBody)}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            Fetch.post('/posts', {
              title: 'foo',
              body: 'bar',
              userId: 1,
            })
              .then((e) => {
                setPostRespone(e);
              })
              .catch((e) => {
                alert(e);
              });
          }}
        >
          Post
        </Button>
        <Button
          onClick={() => {
            Fetch.get('/todos/1').then((e) => {
              setPostRespone(e);
            });
          }}
        >
          get
        </Button>
      </ButtonGroup>
      <pre>
        <code>{JSON.stringify(postRespone)}</code>
      </pre>
    </div>
  );
};
export default Demo;
