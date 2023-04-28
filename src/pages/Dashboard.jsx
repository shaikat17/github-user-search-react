import { useContext } from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import LoadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  const { loading } = useContext(GithubContext);

  if(loading) {
    return <main>
      <Navbar />
      <Search />
      <img src={LoadingImage} className="loading-img" alt="img-loading" />
    </main>
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
