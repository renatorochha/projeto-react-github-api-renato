import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/72894592?v=4" alt="Avatar of user"/>
            <h1>Renato Rocha</h1>
            <h3>Username:</h3>
          <span>Rocha</span>
          <div>
            <h4>Followers</h4>
            <span>5</span>            
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>            
          </div>
          <div>
            <h4>Followings</h4>
            <span>5</span>            
          </div>
        </div>
      </Layout>
    </main>
  );
}

export default App;
