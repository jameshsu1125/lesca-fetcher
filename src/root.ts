import Fetcher, { contentType, formatType, mergePath } from '.';

const createApp = () => {
  return new Promise<HTMLElement>(async (resolve) => {
    const app = document.createElement('div');
    app.innerHTML = 'Hello, World!';
    Fetcher.install({
      hostUrl: 'https://uatservice.kgifund.com.tw/mine/api/',
      contentType: contentType.JSON,
      formatType: formatType.JSON,
    });

    const response = await Fetcher.post('member/sign-in', {
      credential: 'Ab123456789',
      email: 'test@test.com',
    });

    console.log(response);

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
