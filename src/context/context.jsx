import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

// create context api
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  // request loading
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);

//   error
const [error, setError] = useState({show: false, msg: ""})

  // check rate limit
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        // remaining = 0
        setRequests(remaining)
        if(remaining === 0) {
            // throw an error
toggleError(true, 'Sorry, You have exeed your hourly rate limit!')
        }
      })
      .catch((err) => console.log(err));
  };
  // error
  const toggleError = (show = false, msg = '') => {
    setError({show, msg})
  }
  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers, requests, error }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
