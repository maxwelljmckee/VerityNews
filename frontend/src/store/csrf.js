import Cookies from 'js-cookie';


export const fetch = async(url, options = {}) => {
  options.method = options.method || 'GET';
  options.headers = options.heades || {};

  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] = 
      options.headers['Content-Type'] || 'application/json';
    options.headers['XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN');
  }

  const res = await window.fetch(url, options);

  const contentType = res.headers.get('Content-Type');
  if (contentType && contentType.includes('application/json')) {
    const data = await res.json();
    res.data = data
  }

  if (res.status >= 400) throw res;

  return res;
}


export const restoreCSRF = () => {
  return fetch('/api/csrf/restore');
}
