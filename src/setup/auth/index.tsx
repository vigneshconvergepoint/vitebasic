// global
import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
} from '@azure/msal-react';

// local
import ErrorBoundary from '@/setup/app-context-manager/errorBoundary/index';
import { getContext } from '@/setup/auth/auth.js';
import Authenticated from '@/setup/auth/login/index';
import Licenseportal from '@/setup/routes-manager/index';
function AuthSetup() {

  return (
    <MsalProvider instance={getContext()}>
      <AuthenticatedTemplate>
        <ErrorBoundary>
          <Licenseportal />
        </ErrorBoundary>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <Authenticated />
      </UnauthenticatedTemplate>
    </MsalProvider>
  );
}

export default AuthSetup;
