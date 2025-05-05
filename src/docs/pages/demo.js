import { Button, ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import Fetcher, { contentType, formatType } from '../../../lib';

const installConfig = {
  hostUrl: 'https://jsonplaceholder.typicode.com',
  contentType: contentType.JSON,
  formatType: formatType.JSON,
};
const postBody = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

Fetcher.install(installConfig);

Fetcher.setHeader({
  user: 'test',
  password: '123456',
});

const Demo = () => {
  const [postRespone, setPostRespone] = useState({});
  useEffect(() => {}, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>
      1. Fetcher install config
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
            Fetcher.post('/posts', {
              title: 'foo',
              body: 'bar',
              userId: 1,
            })
              .then((e) => {
                console.log(e);
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
            Fetcher.get('/todos/1').then((e) => {
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
