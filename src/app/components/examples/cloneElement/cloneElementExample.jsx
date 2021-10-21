import React from "react";
import TextField from "../../common/form/textField";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const CloneElementExample = () => {
    const field = <TextField label="Email" name="email" />;
    const handleChange = (target) => {
        console.log("changed:", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, { onChange: handleChange, label: "Cloned Email" })}
        </CardWrapper>
    );
};

export { CloneElementExample };
