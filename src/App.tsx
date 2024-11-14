// global
import {IconChevronRight, IconChevronLeft, IconFolderOpen, IconCreation, IconDashboard} from "@convergepoint/sass-icons";
import { UiWrapper } from "@convergepoint/sass-ui-components";
import { PortalCompatProvider } from "@fluentui/react-portal-compat";
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from "@azure/msal-react";
// local
import "@convergepoint/sass-ui-components/dist/style.css"
import Authenticated from "@/setup/auth/index";
import {getContext} from "@/setup/auth/auth.js";
function App() {
  return (
    <UiWrapper>
       <MsalProvider instance={getContext()}>
          <AuthenticatedTemplate>
            <PortalCompatProvider>
              <h1 className="grayColor600">hai from vite!!</h1>
                <ul>
                  <li><IconChevronRight/></li>
                  <li><IconChevronLeft/></li>
                  <li><IconFolderOpen/></li>
                  <li><IconCreation/></li>
                  <li><IconDashboard/></li>
                </ul>
            </PortalCompatProvider>
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <Authenticated/>
          </UnauthenticatedTemplate>
       </MsalProvider>
    </UiWrapper>
  )
}

export default App
