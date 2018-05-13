export default class HttpClient {
  constructor() {
    this.baseUri = 'https://jsonplaceholder.typicode.com';
  }

  async get(url) {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseUri}/${url}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
}
