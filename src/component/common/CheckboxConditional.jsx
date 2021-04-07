const {useState} = require("react");

function CheckboxConditional({message, initial, children}) {

    const [show, setShow] = useState({show: initial});

    const handleCheckboxChange = function (event) {
        setShow((state) => ({...state, show: event.target.checked}));
    }

    const content = show.show ? (<>{children}</>) : (<></>);

    return (
        <div>
            <form>
                <div className={"form-group"}>
                    <div className={"form-check"}>
                        <input
                            type={"checkbox"}
                            checked={show.show}
                            className={"form-check-input"}
                            onChange={handleCheckboxChange}
                        />
                        <label className={"form-check-label"}>{message}</label>
                    </div>
                </div>
            </form>
            {content}
        </div>
    );
}

export default CheckboxConditional;