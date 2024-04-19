import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { FrontendApi, Configuration, Session, Identity } from "@ory/client";

interface AuthProps {
  roles?: string[];
}

const basePath = "http://127.0.0.1:4455";
const ory = new FrontendApi(
  new Configuration({
    basePath,
    baseOptions: {
      withCredentials: true,
    },
  })
);

export const Auth: React.FC<AuthProps> = () => {
  const [session, setSession] = useState<Session | undefined>();
  const [logoutUrl, setLogoutUrl] = useState<string | undefined>();
  /* const location = useLocation(); */

  // Returns either the email or the username depending on the user's Identity Schema
  const getUserName = (identity?: Identity) =>
    identity?.traits.email || identity?.traits.username;

  // Second, gather session data, if the user is not logged in, redirect to login
  useEffect(() => {
    ory
      .toSession()
      .then(({ data }) => {
        // User has a session!
        setSession(data);
        ory.createBrowserLogoutFlow().then(({ data }) => {
          // Get also the logout url
          setLogoutUrl(data.logout_url);
        });
      })
      .catch((err) => {
        console.error(err);
        // Redirect to login page
        window.location.replace(`${basePath}/login`);
      });
  }, []);

  if (!session) {
    // Still loading
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={""} className="App-logo" alt="logo" />
        <p>Welcome to Ory, {getUserName(session?.identity)}.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          // Our logout link
          <a href={logoutUrl}>Logout</a>
        }
      </header>
    </div>
  );
};
