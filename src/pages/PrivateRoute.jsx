import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import LoadingImage from "../images/preloader.gif";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user, isLoading, error } = useAuth0();
  const isUser = isAuthenticated && user;

  if(isLoading) return <img src={LoadingImage} className="loading-img" alt="img-loading" />
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }

  if (isUser) return children;

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
