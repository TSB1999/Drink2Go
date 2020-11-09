import { extendObservable } from "mobx";

/**
 * UserStore
 */
class UserStore {
  constructor() {
    extendObservable(this, {
      username: "",
      authCode: "",
      loading: true,
      isLoggedIn: false,
      userDetails: {},
      spotifyUserDetails: {},
      allPosts: [],
    });
  }
}

export default new UserStore();
