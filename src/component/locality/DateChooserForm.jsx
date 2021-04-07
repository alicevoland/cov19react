import {useState} from "react";

function DateChooserForm({label, initial, min, max, callback}) {

    const [date, setDate] = useState({date: initial});

    const handleChange = function (event) {
        let dateValue;
        if (event.target.value) {
            dateValue = event.target.value;
        } else {
            dateValue = initial;
        }
        if (dateValue !== date.date) {
            setDate({date: dateValue})
            callback(dateValue);
        }
    }

    return (
        <label className={"form-label"}>
            {label}
            <input
                type={"date"} min={min} max={max}
                value={date.date}
                className={"form-control"}
                onChange={handleChange}
            />
        </label>
    );

}

export default DateChooserForm;