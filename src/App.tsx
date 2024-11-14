// global
import {IconChevronRight, IconChevronLeft, IconFolderOpen} from "@convergepoint/sass-icons";
import { UiWrapper } from "@convergepoint/sass-ui-components";
import { PortalCompatProvider } from "@fluentui/react-portal-compat";
// local
import "@convergepoint/sass-ui-components/dist/style.css"
function App() {
  return (
    <UiWrapper>
      <PortalCompatProvider>
        <h1 className="grayColor600">hai from vite!!</h1>
        <ul>
          <li><IconChevronRight/></li>
          <li><IconChevronLeft/></li>
          <li><IconFolderOpen/></li>
        </ul>
    </PortalCompatProvider>
    </UiWrapper>
  )
}

export default App
