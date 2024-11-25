// global
import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { makeStyles } from "@fluentui/react-components";
// import { IconReport, IconHome } from "@convergepoint/sass-icons";
import { IconReport, IconHome } from "@convergepoint/icons";
import { Navigation, TopNavBar } from '@convergepoint/sass-navigation';
import { useMsal } from "@azure/msal-react";
// local
import Home from "@/pages/homepage/index";

const MainMenus: any = [
  { menu: "Home", icon: <IconHome />, key: "Home", pageUrl: "/" },
  { menu: "Reports", icon: <IconReport />, key: "Reports", pageUrl: "/Reports" },
];

const useTotalWidth = makeStyles({
  expand: {
    width: "calc(100% - 220px)",
    "@media screen and (min-width: 1024px) and (max-width: 1200px)": {
      width: "calc(100% - 200px)",
    },
    "@media screen and (min-width: 768px) and (max-width: 1024px)": {
      width: "calc(100% - 180px)",
    },
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  },
  collapse: {
    width: "calc(100% - 100px)",
  },
})

function Licenseportal() {
  const [expanded, setExpanded] = React.useState(false);
  const totalWidth = useTotalWidth();
  const { instance, accounts } = useMsal();

  const handleLogoutPopup = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: '/',
    });
    console.log('User has logged out successfully');
  };

  return (
    <BrowserRouter>
      <main className="d-flex">
        <Navigation
          onChangeExpand={setExpanded}
          MainMenus={MainMenus}
        />

        <div className={`${expanded ? totalWidth.expand : totalWidth.collapse}`}>
          <TopNavBar
            portalName={"License Portal"}
            userName={accounts[0].name}
            logout={handleLogoutPopup}
          />
          <div className="grayBg100 position-relative">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Reports" element={"Reports"}></Route>
              <Route path="/Administration" element={"Administration"}></Route>
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default Licenseportal;
