import React from "react";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import SimpleComponent from "./simple-component";
import withAuth from "./with-auth";

const HOCSolution = () => {
    const ComponentWithAuth = withAuth(SimpleComponent);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Simple Component</SmallTitle>
                <Divider />
                <ComponentWithAuth />
            </CardWrapper>
        </>
    );
};

export default HOCSolution;
