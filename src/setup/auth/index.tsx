// global
import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
} from '@azure/msal-react';
import { PortalCompatProvider } from '@fluentui/react-portal-compat';

// local
import ErrorBoundary from '@/setup/app-context-manager/errorBoundary/index';
import { getContext } from '@/setup/auth/auth.js';
import Authenticated from '@/setup/auth/login/index';
import Licenseportal from '@/setup/routes-manager/index';
function AuthSetup() {

  return (
    <MsalProvider instance={getContext()}>
      <AuthenticatedTemplate>
        <PortalCompatProvider>
          <ErrorBoundary>
            <Licenseportal />
          </ErrorBoundary>
        </PortalCompatProvider>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <Authenticated />
      </UnauthenticatedTemplate>
    </MsalProvider>
  );
}

export default AuthSetup;
