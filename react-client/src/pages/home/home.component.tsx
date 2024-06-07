import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import reactLogo from './../../assets/react.svg'
import './home.component.css'
import { Button } from '@fluentui/react-components';


function Home() {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  return (
    <>
      <AuthenticatedTemplate>
        {
          activeAccount ?
            <div style={{ textAlign: 'center' }}>
              <div>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h2 id="welcome-text" data-testid="welcome-text">Welcome {instance.getActiveAccount()?.name}!</h2>
              <div className="card">
                {/* <IdTokenData idTokenClaims={activeAccount.idTokenClaims} /> */}
              </div>
            </div>

            :
            null
        }
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div>
          <h2 id="welcome-text" data-testid="welcome-text">Welcome! Let's get started with login first.</h2>
          <Button onClick={() => { instance.loginRedirect()}}>Login</Button>
        </div>
      </UnauthenticatedTemplate>


    </>
  )
}

export default Home
