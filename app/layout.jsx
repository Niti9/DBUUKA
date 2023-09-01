import  '../styles/global.css';
import { Children } from "react";

// import Nav from "@components/Nav";
import Nav from '../components/Nav';
// import Provider from "@components/Provider";
import Provider from '../components/Provider';

export const metadata = {
  title: "ok",
  description: "Discover & Share AI Prompts"
};

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        {/* provider for authentication */}
        <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
            <Nav/>
            {children}
        </main>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
