// global
import { UiWrapper } from '@convergepoint/sass-ui-components';
import { PortalCompatProvider } from '@fluentui/react-portal-compat';
// local
import '@convergepoint/sass-ui-components/dist/style.css';
import AuthSetup from '@/setup/auth/index';

function App() {
  return (
    <UiWrapper>
      <PortalCompatProvider>
        <AuthSetup />
      </PortalCompatProvider>
    </UiWrapper>
  );
}

export default App;
