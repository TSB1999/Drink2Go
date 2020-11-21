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
      endPost: false,
    });
  }
}

export default new UserStore();
