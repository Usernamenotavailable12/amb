document.addEventListener("DOMContentLoaded", () => {
  if (!getCookie("cookieConsent")) {
    requestAnimationFrame(createCookieConsentBanner);
  }
});

function createCookieConsentBanner() {
  const container = document.createElement("div");
  container.className = "amb-cookie-container";
  container.innerHTML = `
    <div class="cookieConsent">
      <div class="cookieConsentContainer">
        <p>საიტი იყენებს Cookie ფაილებს. დახურვის ღილაკზე დაჭერით თქვენ ეთანხმებით Cookie ფაილების გამოყენების წესებს და პირობებს. <a href="https://www.ambassadoribet.com/cookie-policy" target="_blank">Cookie პოლიტიკა.</a></p>
        <button class="acceptCookies">დახურვა</button>
      </div>
    </div>
  `;
  document.body.appendChild(container);

  container.querySelector(".acceptCookies").addEventListener("click", () => {
    setCookie("cookieConsent", "true", 365);
    container.style.display = "none";
  });

  addCookieConsentStyles();
}

function addCookieConsentStyles() {
  const styles = `
    .amb-cookie-container {
      position: fixed;
      bottom: 10px;
      width: 100%;
      z-index: 10000;
      display: flex;
      justify-content: center;
    }
    .cookieConsent {
      background: rgba(0,0,0,.9);
      color: #fff;
      padding: 15px;
      font-family: 'Noto Sans Ambassadori';
      border-radius: 5px;
      max-width: 960px;
    }
    .cookieConsentContainer {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
    }
    .cookieConsentContainer p {
      margin: 0;
      font-size: 10px;
    }
    .cookieConsentContainer a {
      color: #cf167d;
      text-decoration: none;
    }
    .cookieConsentContainer .acceptCookies {
      background: #cf167d;
      border: none;
      color: #fff;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 10px;
      font-family: 'Noto Sans Ambassadori';
      border-radius: 5px;
    }
    @media (max-width: 1200px) {
      .cookieConsentContainer {
        flex-direction: column;
      }
    }
    @media (max-width: 768px) {
      .amb-cookie-container {
        bottom: 0;
      }
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.id = "style-cookie";
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookie = document.cookie.match(`(^|;)\\s*${name}=\\s*([^;]+)`);
  return cookie ? cookie[2] : null;
}
