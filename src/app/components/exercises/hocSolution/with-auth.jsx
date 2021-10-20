import React from "react";
import CardWrapper from "../../common/Card";

const withAuth = (Component) => (props) => {
  const value = "Ivan Ivanov";
  const isAuth = localStorage.getItem("user") === value;
    return (
        <CardWrapper>
            <Component value={value} isAuth={isAuth} {...props} />
        </CardWrapper>
    );
};

export default withAuth;
