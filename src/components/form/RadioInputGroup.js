import input from "./Input";

function CheckboxInput() {

    let gender = [
        {label: "Male", value: "male",},
        {label: "Female", value: "female",},
        {label: "Other", value: "other",},
    ]

    return (
        <div className="input-group input-group--radio">
            {
                gender.map((item, index) =>
                    <div key={index}>
                        <input name={"gender"} id={item.value} value={item.value} type="radio"/>
                        <label htmlFor={item.value}>{item.label}</label>
                    </div>
                )
            }
        </div>
    );
}


export default CheckboxInput;
