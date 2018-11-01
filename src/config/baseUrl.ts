const host = window.location.host;
let baseUrl = 'http://rap2api.taobao.org/app/mock/115753/';
if (host === 'test.com') {
  baseUrl = 'http://test.com';
} else if (host === 'y.com') {
  baseUrl = 'http://y.com';
}

export default baseUrl;
