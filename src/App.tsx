// @ts-ignore
import {IconChevronRight, IconChevronLeft} from "@convergepoint/sass-icons";
// @ts-ignore
import { UiWrapper } from "@convergepoint/sass-ui-components";
import { PortalCompatProvider } from "@fluentui/react-portal-compat";
import '@convergepoint/sass-ui-components/dist/style.css';

function App() {
  return (
    <UiWrapper>
      <PortalCompatProvider>
    <h1 className="grayColor600">hai!</h1>
    <ul>
      <li><IconChevronRight/></li>
      <li><IconChevronLeft/></li>
    </ul>
    </PortalCompatProvider>
    </UiWrapper>
  )
}

export default App
