import React from "react";

function FormContainer({children}) {

    return (
        <div className={"form-row"}>

            {children}

        </div>
    );
}

export default FormContainer;