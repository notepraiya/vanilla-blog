const dataApi = {
  getProfile: function () {
    return fetch(
      'https://api.jsonbin.io/b/5fd3081682e9306ae600212b'
    ).then(res => res.json());
  },
};

export default dataApi;
