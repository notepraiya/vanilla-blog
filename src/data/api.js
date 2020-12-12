const dataApi = {
  profileUri: 'https://api.jsonbin.io/b/5fd3081682e9306ae600212b',
  postsUri: '',

  // getProfile function return a Promise of JSON
  // {
  //   "picture": "https://github.com/notepraiya/vanilla-blog/raw/master/public/johnwick.jfif",
  //   "name": {
  //     "first": "John",
  //     "last": "Wick"
  //   },
  //   "email": "john.wick@gmail.com"
  // }
  getProfile: function () {
    return fetch(this.profileUri).then(res => res.json());
  },

  getPosts: function () {},
};

export default dataApi;
