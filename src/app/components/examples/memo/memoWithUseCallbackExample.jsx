import React, { useEffect, useState, memo, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button onClick={onLogOut} className="btn btn-primary">
            Log Out
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const areEqual = (prevState, nextState) => {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
};

const MemoLogOutButton = memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                onClick={() => setState(!state)}
                className="btn btn-primary me-2"
            >
                Update State
            </button>
            <MemoLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
