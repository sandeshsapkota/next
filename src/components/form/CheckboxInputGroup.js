import input from "./Input";

function CheckboxInputGroup() {

    let gender = [
        {label: "Psychology", value: "psychology",},
        {label: "Philosophy", value: "philosophy",},
        {label: "Art", value: "art",},
    ]

    return (
        <div className="input-group input-group--checkbox">
            {
                gender.map((item, index) =>
                    <div key={index}>
                        <input id={item.value} value={item.value} type="checkbox"/>
                        <label htmlFor={item.value}>{item.label}</label>
                    </div>
                )
            }
        </div>
    );
}


export default CheckboxInputGroup;
