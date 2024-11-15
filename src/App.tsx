// global
import { UiWrapper } from '@convergepoint/sass-ui-components';
// local
import '@convergepoint/sass-ui-components/dist/style.css';
import AuthSetup from '@/setup/auth/index';

function App() {
  return (
    <UiWrapper>
      <AuthSetup />
    </UiWrapper>
  );
}

export default App;
