import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const [width, setWidth] = useState("");

    const handleClick = () => {
        console.log(inputRef.current.clientWidth);
        inputRef.current.focus();
    };

    const handleWidth = () => {
        setWidth((prevState) => !prevState ? "100px" : "");
    };

    useEffect(() => {
        inputRef.current.style.width = width;
    });

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                id="email"
                className="form-control mb-3"
            />
            <button onClick={handleClick} className="btn btn-primary me-2">
                Focus Input
            </button>
            <button onClick={handleWidth} className="btn btn-secondary">
                Change Width
            </button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
