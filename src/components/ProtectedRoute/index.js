import React from "react";
import { Route, Redirect } from "react-router-dom";
import { authenticationSelector } from "../../state/users/selectors";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  const isLoggedIn = useSelector(authenticationSelector);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/unauthorized",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;
