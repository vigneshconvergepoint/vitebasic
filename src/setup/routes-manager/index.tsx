// global
import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { makeStyles } from "@fluentui/react-components";
import { IconDashboard, IconCreation } from "@convergepoint/sass-icons";
import { Navigation } from '@convergepoint/sass-navigation'

const MainMenus: any = [
  { menu: "Home", icon: <IconDashboard />, key: "Home", pageUrl: "/" },
  { menu: "Reports", icon: <IconCreation />, key: "Home", pageUrl: "/Reports" },
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

  return (
    <BrowserRouter>
      <div className="d-flex">
        <Navigation
          onChangeExpand={setExpanded}
          MainMenus={MainMenus}
        />

        <div className={`${expanded ? totalWidth.expand : totalWidth.collapse}`}>
          <div className="grayBg100 p-1 position-relative">
            <Routes>
              <Route path="/" element={"Home"}></Route>
            </Routes>
            <Routes>
              <Route path="/Reports" element={"Reports"}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Licenseportal;
