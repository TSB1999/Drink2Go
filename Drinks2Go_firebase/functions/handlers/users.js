const { db } = require("../util/admin");

const config = require("../util/config");

const firebase = require("firebase");
firebase.initializeApp(config);

const {
  validateSignUpData,
  validateLogInData,
  reduceUserDetails
} = require("../util/validators");

exports.signup = (req, res) => {
  const newUser = {
    email: req.body.email,
    // phone number
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    username: req.body.username,
    // spotifyID: req.body.spotifyID,
  };

  const { valid, errors } = validateSignUpData(newUser);

  if (!valid) return res.status(400).json(errors);

  let token, userId;
  db.doc(`/users/${newUser.username}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(400).json({ username: "this username is already taken" });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const userCredentials = {
        username: newUser.username,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId,
      };
      return db.doc(`/users/${newUser.username}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ email: "Email is already in use" });
      } else {
        return res
          .status(500)
          .json({ general: "Something went wrong, please try again" });
      }
    });
};

exports.login = (req, res) => {
  const user = {
    email: req.body.email, //email or phone or username
    password: req.body.password,
  };

  const { valid, errors } = validateLogInData(user);

  if (!valid) return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    })
    .catch((err) => {
      console.error(err);
      return res
        .status(403)
        .json({ general: "Incorrect credentials, please try again" });
    });
};

exports.addDrink = (req, res) => {
  const drink = {
    ID: req.body.ID,
    name: req.body.name,
    quantity: 1,
    image: req.body.image,
    price: req.body.price
  };

  let data = []

  const drinkDocument = db.doc(`/drinks/${drink.name}`);

  drinkDocument
    .get()
    .then(doc => {
      if (doc.exists) {
        return drinkDocument.update({ quantity: doc.data().quantity + 1 })
      } else {
        return db.doc(`/drinks/${drink.name}`).set(drink);
      }
    })
    .then((data) => {
      return data
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code })
    });
}

exports.getDrinks = (req, res) => {
  let userData1 = [];
  db.collection("drinks")
    .get()
    .then((data) => {
      userData1.liked = [];
      data.forEach((doc) => {
        userData1.push({
          ID: doc.data().ID,
          name: doc.data().name,
          image: doc.data().image,
          quantity: doc.data().quantity,
          price: doc.data().price
        });
      });
      return res.json(userData1);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

// //Add user details
// exports.addUserDetails = (req, res) => {
//   let userDetails = reduceUserDetails(req.body);

//   db.doc(`/users/${req.user.meloID}`)
//     .update(userDetails)
//     .then(() => {
//       return res.json({ message: "Details added succesfully" });
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(500).json({ error: err.code });
//     });
// };

// //Get user liked
// exports.getUserLiked = (req, res) => {
//   let userData1 = {};
//   db.collection("likes")
//     .where("meloID", "==", req.user.meloID)
//     .get()
//     .then((data) => {
//       userData1.liked = [];
//       data.forEach((doc) => {
//         userData1.liked.push({
//           postID: doc.data().postID,
//           meloID: doc.data().meloID,
//           trackID: doc.data().trackID,
//           username: req.user.meloID,
//         });
//       });
//       return res.json(userData1);
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(500).json({ error: err.code });
//     });
// };

// exports.getUserBookmarked = (req, res) => {
//   let userData1 = {};
//   db.collection("bookmarks")
//     .where("meloID", "==", req.params.meloID)
//     .get()
//     .then((data) => {
//       userData1.bookmarked = [];
//       data.forEach((doc) => {
//         userData1.bookmarked.push({
//           postID: doc.data().postID,
//           meloID: doc.data().meloID,
//           trackID: doc.data().trackID,
//         });
//       });
//       return res.json(userData1);
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(500).json({ error: err.code });
//     });
// };

// exports.getUserSuggested = (req, res) => {
//   let userData1 = {};
//   db.collection("suggested")
//     .where("recipient", "==", req.params.meloID)
//     .get()
//     .then((data) => {
//       userData1.suggested = [];
//       data.forEach((doc) => {
//         userData1.suggested.push({
//           postID: doc.data().postID,
//           sender: doc.data().sender,
//           trackID: doc.data().trackID,
//           type: doc.data().type,
//           recipient: doc.data().recipient,
//         });
//       });
//       return res.json(userData1);
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(500).json({ error: err.code });
//     });
// };

// //Get any user's details
// exports.getUserDetails = (req, res) => {
//   let userData = {};
//   db.doc(`/users/${req.params.meloID}`)
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         userData.user = doc.data();
//         return db
//           .collection("posts")
//           .where("meloID", "==", req.params.meloID)
//           .orderBy("createdAt", "desc")
//           .get();
//       } else {
//         return res.status(404).json({ error: "User not found" });
//       }
//     })
//     .then((data) => {
//       userData.posts = [];
//       data.forEach((doc) => {
//         userData.posts.push({
//           body: doc.data().body,
//           createdAt: doc.data().createdAt,
//           meloID: doc.data().meloID,
//           likeCount: doc.data().likeCount,
//           commentCount: doc.data().commentCount,
//           trackID: doc.data().trackID,
//           spotifyID: doc.data().spotifyID,
//           suggestCount: doc.data().suggestCount,
//           status: doc.data().status,
//           following: doc.data().following,
//           followers: doc.data().followers,
//           postID: doc.id,
//         });
//       });
//       return res.json(userData);
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(500).json({ error: err.code });
//     });
// };

// //Get own user details
// exports.getAuthenticatedUser = (req, res) => {
//   let userData = {};
//   db.doc(`/users/${req.user.meloID}`)
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         userData.credentials = doc.data();
//         return db
//           .collection("follow")
//           .where("recipient", "==", req.user.meloID)
//           .get();
//       }
//       return; //checkout later eslint
//     })
//     .then((data) => {
//       // db.doc(`/follow/${req.user.meloID}`)
//       //   .get()
//       //   .then((doc) => {
//       //     if (doc.exists) {
//       //       userData.follows = doc.data();
//       //       return db
//       //         .collection("likes")
//       //         .where("meloID", "==", req.user.meloID)
//       //         .get();
//       //     }
//       //     return; //checkout later eslint
//       //   })
//       userData.followers = [];
//       data.forEach((doc) => {
//         userData.followers.push(doc.data());
//       })
//       return db
//         .collection("follow")
//         .where("sender", "==", req.user.meloID)
//         .get();
//     })
//     .then((data) => {
//       userData.following = [];
//       data.forEach((doc) => {
//         userData.following.push(doc.data());
//       })
//       return db
//         .collection("likes")
//         .where("meloID", "==", req.user.meloID)
//         .get();
//     })
//     .then((data) => {
//       userData.likes = [];
//       data.forEach((doc) => {
//         userData.likes.push(doc.data());
//       });
//       return db
//         .collection("notifications")
//         .where("recipient", "==", req.user.meloID)
//         .orderBy("createdAt", "desc")
//         .limit(10)
//         .get();
//     })
//     .then((data) => {
//       userData.notifications = [];
//       data.forEach((doc) => {
//         userData.notifications.push({
//           recipient: doc.data().recipient,
//           sender: doc.data().sender,
//           createdAt: doc.data().createdAt,
//           postID: doc.data().postID,
//           type: doc.data().type,
//           read: doc.data().read,
//           notificationID: doc.id,
//         });
//       });
//       return res.json(userData);
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(500).json({ error: err.code });
//     });
// };

// exports.markNotificationsRead = (req, res) => {
//   let batch = db.batch();
//   req.body.forEach((notificationID) => {
//     const notification = db.doc(`/notifications/${notificationID}`);
//     batch.update(notification, { read: true });
//   });
//   batch
//     .commit()
//     .then(() => {
//       return res.json({ message: "Notifications marked read" });
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(500).json({ error: err.code });
//     });
// };

// exports.getAllUsersDetails = (req, res) => {
//   let userData = {};
//   db.collection("users")
//     .get()
//     .then((data) => {
//       userData.users = [];
//       data.forEach((doc) => {
//         userData.users.push({
//           createdAt: doc.data().createdAt,
//           meloID: doc.data().meloID,
//           trackID: doc.data().trackID,
//           spotifyID: doc.data().spotifyID,
//           recentlyPlayed: doc.data().recentlyPlayed,
//         });
//       });
//       return res.json(userData);
//     })
//     .catch((err) => {
//       console.error(err);
//       return res.status(500).json({ error: err.code });
//     });
// };

// exports.followUser = (req, res) => {
//   const followDocument = db
//     .collection('follow')
//     .where("sender", '==', req.user.meloID)
//     .where('recipient', '==', req.params.recipient)
//     .limit(1);

//   const userDocument = db.doc(`/users/${req.params.recipient}`);

//   let userData;

//   userDocument
//     .get()
//     .then(doc => {
//       if (doc.exists) {
//         userData = doc.data();
//         userData.followID = doc.id
//         return followDocument.get()
//       } else {
//         return res.status(404).json({ error: 'Post not found' })
//       }
//     })
//     .then(data => {
//       if (data.empty) {
//         return db
//           .collection('follow')
//           .add({
//             recipient: req.params.recipient,
//             sender: req.user.meloID,
//             followed_at: new Date().toISOString()
//           })
//           .then(() => {
//             userData.followCount++
//             return userDocument.update({ followCount: userData.followkCount })
//           })
//           .then(() => {
//             return res.json(userData);
//           })
//       } else {
//         return res.status(400).json({ error: 'User already followed' })
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({ error: err.code })
//     });
// }

// exports.unfollowUser = (req, res) => {
//   const followDocument = db
//     .collection('follow')
//     .where("sender", '==', req.user.meloID)
//     .where('recipient', '==', req.params.recipient)
//     .limit(1);

//   const userDocument = db.doc(`/users/${req.params.recipient}`);

//   let followData;

//   userDocument
//     .get()
//     .then(doc => {
//       if (doc.exists) {
//         followData = doc.data();
//         followData.followID = doc.id
//         return followDocument.get()
//       } else {
//         return res.status(404).json({ error: 'User not found' })
//       }
//     })
//     .then(data => {
//       if (data.empty) {
//         return res.status(400).json({ error: 'User not followed' })
//       } else {
//         return db.doc(`/follow/${data.docs[0].id}`).delete()
//           .then(() => {
//             followData.following--;
//             return userDocument.update({ following: followData.likeCount })
//           })
//           .then(() => {
//             return res.json({ postData })
//           })
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).json({ error: err.code })
//     });
// }