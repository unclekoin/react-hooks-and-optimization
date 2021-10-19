import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [state, setState] = useState("one");

    const toggleState = () => {
        setState((prevState) => prevState === "one" ? "two" : "one");
    };

    useEffect(() => {
        prevState.current = state;
    }, [state]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <h5>Current State: {state}</h5>
            <h5>Previous State: {prevState.current}</h5>
            <button onClick={toggleState} className="btn btn-primary">
                Toggle State
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
