import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

import withLogin from "./with-login";
import withPropsStyles from "./with-props-styles";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropSyles = withPropsStyles(Component);
    const ComponentFullFeatures = withPropsStyles(ComponentWithAuth);

    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <ComponentWithPropSyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <ComponentFullFeatures />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
