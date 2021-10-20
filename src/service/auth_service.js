import {
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
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
