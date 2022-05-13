import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import Code from '../components/code';
import { name } from '../config';

const codes = [
  {
    title: '1. Installation',
    code: `npm install ${name} --save`,
    type: 'text',
  },
  {
    title: '2. install',
    code: `import Fetch, { contentType } from '${name}';

Fetch.install({
  hostUrl: 'https://jsonplaceholder.typicode.com',
  contentType: contentType.JSON,
});`,
    type: 'js',
  },
  {
    title: '3. post',
    code: `Fetch.post('/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1,
}).then((e) => {
 console.log(e);
});`,
    type: 'js',
  },
  {
    title: '4. get',
    code: `Fetch.get('/todos/1').then((e) => {
  console.log(e);
});
    `,
    type: 'js',
  },
];

const Usage = () => {
  useEffect(() => {}, []);
  return (
    <div className='Usage'>
      <h2>Usage</h2>
      {codes.map((e) => (
        <div key={e.title}>
          <h3>{e.title}</h3>
          <Code code={e.code} theme={e.type} />
        </div>
      ))}
      <ButtonGroup variant='contained'>
        <Button>click</Button>
      </ButtonGroup>
    </div>
  );
};
export default Usage;
