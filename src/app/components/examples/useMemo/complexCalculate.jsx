import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};

const runFactorial = (n) => {
    console.log("Run Factorial");
    factorial(n);
};

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [state, setState] = useState(false);

    const buttonColor = useMemo(() => ({ color: state ? "primary" : "danger" }), [state]);

    useEffect(() => {
        console.log("render");
    });

    useEffect(() => {
        console.log("render buttonColor");
    }, [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result: {fact}</p>
                <button
                    onClick={() => setValue((prev) => prev + 10)}
                    className="btn btn-primary me-2"
                >
                    Increment
                </button>
                <button
                    onClick={() => setValue((prev) => prev - 10)}
                    className="btn btn-primary"
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <p>State: {state.toString()}</p>
                <button
                    onClick={() => setState((prev) => !prev)}
                    className={`btn btn-${buttonColor.color}`}
                >
                    Change Color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
