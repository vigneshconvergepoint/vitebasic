import { PublicClientApplication, EventType } from "@azure/msal-browser";
const msalConfig = {
auth: {
    clientId: "f9371469-a50e-4208-ac3c-948afce85a86",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
},
cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
},
system: {
    iframeHashTimeout: 10000,
}
}

const msalInstance = new PublicClientApplication(msalConfig);
let ACCESS_TOKEN=null;
if (
  !msalInstance.getActiveAccount() &&
  msalInstance.getAllAccounts().length > 0
) {
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}
msalInstance.addEventCallback((event) => {
  if (
    (event.eventType === EventType.LOGIN_SUCCESS ||
      event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
      event.eventType === EventType.SSO_SILENT_SUCCESS) &&
    event.payload.account 
  ) {
    msalInstance.setActiveAccount(event.payload.account);
    ACCESS_TOKEN = event.payload.accessToken;
  }
});

export const getContext = () => {
  return msalInstance
}
