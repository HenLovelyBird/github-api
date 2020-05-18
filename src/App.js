import React, { useState } from 'react';
import './App.css';
import Resume from './Components/ResumePage';

function App() {
  const [username, setUsername] = useState("")
  const [userInfo, setUserInfo] = useState(null)
  const [userRepos, setUserRepos] = useState({})

  const githubUserBaseURL = "https://api.github.com/users/"

  const fetchUserInfo = async () => {
    const res = await fetch(
      githubUserBaseURL + username
    );
    const data = await res.json();
    setUserInfo(data)
    console.log(data);
    fetchUserRepos();
  };

  //get all repos from a user(https://api.github.com/users/henlovelybird/repos)
  const fetchUserRepos = async () => {
    const res = await fetch(githubUserBaseURL + username + "/repos");
    const repos = await res.json();
    setUserRepos(repos.map(element => element.name));
    console.log(repos)
    repos.forEach(element => {
      fetch(githubUserBaseURL + element + "/languages")
    });
  }


  return (
    <>

      <div className="main-container">
        <div><h1>My Github Resumè</h1></div>
        <div>
          <div>
            <div id="input-name-div">
              <h3>Github Username</h3>
            </div>
            <div>
              <input
                id="name-input"
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div id="button-div">
              <button id="generate-btn" onClick={fetchUserInfo}>
                Generate
            </button>
            </div>
          </div>
        </div>

        {userInfo && <Resume userInfo={userInfo} userRepos={userRepos} />}


      </div>

    </>
  );
}

export default App;
