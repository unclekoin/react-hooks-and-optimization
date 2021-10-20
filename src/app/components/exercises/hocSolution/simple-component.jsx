import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ value, isAuth }) => {
    const [auth, setAuth] = useState();

    useEffect(() => {
        setAuth(isAuth);
    }, []);

    console.log(auth);

    const onLogin = () => {
        localStorage.setItem("user", value);
    };

    const onLogOut = () => {
        localStorage.setItem("user", "");
    };

    const handleStorage = () => {
        localStorage.getItem("user") === value ? onLogOut("user") : onLogin("user");
        setAuth(localStorage.getItem("user") === value);
    };

    return (
        <>
            <button
                onClick={handleStorage}
                className={`btn btn-${auth ? "secondary" : "primary"}`}
            >
                {auth ? "Выйти из системы" : "Войти"}
            </button>
        </>
    );
};

SimpleComponent.propTypes = {
    value: PropTypes.string,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
