class KakaoAuth {
  constructor(key) {
    this.key = key;
    this.kakaoScript = document.createElement("script");
    this.kakaoScript.src = "https://developers.kakao.com/sdk/js/kakao.js";
    document.head.appendChild(this.kakaoScript);

    this.kakaoScript.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(this.key);
      }
    };
  }

  login(onSuccess, onFail) {
    window.Kakao.Auth.login({ success: onSuccess, fail: onFail });
  }

  logout() {
    window.Kakao.Auth.logout();
  }
}

export default KakaoAuth;
