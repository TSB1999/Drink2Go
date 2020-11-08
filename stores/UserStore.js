import { extendObservable } from "mobx";

/**
 * UserStore
 */
class UserStore {
  constructor() {
    extendObservable(this, {
      authCode: "",
      loading: true,
      isLoggedIn: false,
      spotifyUserDetails: {},
      allPosts: [],
    });
  }
}

export default new UserStore();
