import React, { useRef, useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [state, setState] = useState(false);

    const toggleState = () => {
        setState(!state);
    };

    useEffect(() => {
        renderCount.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <h5>Render Count: {renderCount.current}</h5>
            <button onClick={toggleState} className="btn btn-primary">
                Toggle State
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
