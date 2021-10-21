import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";

const withAuth = (Component) => (props) => {
    const value = "Ivan Ivanov"; // Предположим, что это данные сохраненные при первом входе, а в последствии получаемые с сервера
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        setIsAuth(localStorage.getItem("user") === value);
    }, []);

    const onLogin = () => {
        localStorage.setItem("user", value);
        setIsAuth(true);
    };

    const onLogOut = () => {
        localStorage.setItem("user", "");
        setIsAuth(false);
    };
    return (
        <CardWrapper>
            <Component
                onLogin={onLogin}
                onLogOut={onLogOut}
                isAuth={isAuth}
                {...props}
            />
        </CardWrapper>
    );
};

export default withAuth;
