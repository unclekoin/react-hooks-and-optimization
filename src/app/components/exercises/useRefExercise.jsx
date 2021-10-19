import React, { useRef, useEffect, useState } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";

const UseRefExercise = () => {
    const blockRef = useRef();
    const [state, setState] = useState(false);

    const handleState = () => {
        setState(!state);
    };

    useEffect(() => {
        const style = blockRef.current.style;
        const block = blockRef.current;

        if (blockRef.current.clientWidth === 60) {
            style.width = "80px";
            style.height = "150px";
            block.textContent = "Text";
        } else {
            style.width = "60px";
            style.height = "40px";
            block.textContent = "Block";
        }
    });

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменисят содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <Divider />
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded mb-3"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Block</small>
            </div>
            <button onClick={handleState} className="btn btn-primary">
                Change Block
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
