import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";

// Вариант 1
const ListComponent = ({ children }) => {
    return (
        <ol>
            {React.Children.map(children, (child) => {
                return <li>{child}</li>;
            })}
        </ol>
    );
};

ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

// Вариант 2
const ListComponentTwo = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return (
            <div className="d-flex ps-3">
                <span className="me-2">{index + 1}</span>
                {child}
            </div>
        );
    });
};

ListComponentTwo.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenSolution = () => {
    return (
        <CardWrapper>
            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
            <Divider />
            <ListComponentTwo>
                <Component />
                <Component />
                <Component />
            </ListComponentTwo>
        </CardWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenSolution;
