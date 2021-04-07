import {useState} from "react";

function DateChooser({label, initial, min, max, callback}) {

    const [date, setDate] = useState({date: initial});


    const handleChange = function (event) {
        setDate({date: event.target.value})
        callback({
            date: event.target.value,
            dateString: event.target.value,
            status: 'ok'
        });
    }

    return (
        <div className={"form-group"}>
            <div className={"form-date"}>
                <form>
                    <label className={"form-date-label"}>
                        {label}
                        <input
                            type={"date"} min={min} max={max}
                            value={date.date}
                            className={"form-date-input"}
                            onChange={handleChange}
                        />
                    </label>
                </form>
            </div>
        </div>
    );

}

export default DateChooser;