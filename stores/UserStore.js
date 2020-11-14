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
      trackDetails: {},
    });
  }
}

export default new UserStore();
