import {
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  fetchSignInMethodsForEmail,
  signInWithRedirect,
} from "firebase/auth";

class AuthService {
  constructor(firebaseApp) {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
    this.twitterProvider = new TwitterAuthProvider();
  }

  login(providerName) {
    const provider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, provider);
    // .catch((error) => {
    //   if (error.code === "auth/account-exists-with-different-credential") {
    //     fetchSignInMethodsForEmail(error.email).then((providers) => {
    //       if (providers[0] === "google.com") {
    //         return signInWithRedirect(this.googleProvider);
    //       }
    //     });
    // }
    // });
  }

  logout() {
    signOut(this.firebaseAuth);
  }

  onAuthChange(onUserChanged) {
    onAuthStateChanged(this.firebaseAuth, (user) => onUserChanged(user));
  }

  getProvider = (providerName) => {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      case "Twitter":
        return this.twitterProvider;
      default:
        throw new Error("Not found");
    }
  };
}

export default AuthService;
