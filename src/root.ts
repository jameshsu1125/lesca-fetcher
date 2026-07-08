import Fetcher, { contentType, formatType, mergePath } from '.';

const createApp = () => {
  return new Promise<HTMLElement>(async (resolve) => {
    const app = document.createElement('div');
    app.innerHTML = 'Hello, World!';

    Fetcher.setOptions({ credentials: 'include' });
    Fetcher.install({
      contentType: contentType.JSON,
      formatType: formatType.JSON,
      hostUrl: 'https://jsonplaceholder.typicode.com/todos/1',
    });

    Fetcher.get('/api');

    resolve(app);
  });
};

export default createApp;

const appElement = document.getElementById('app');
if (appElement && appElement.children.length === 0) {
  createApp().then((app) => {
    appElement.appendChild(app);
  });
}
