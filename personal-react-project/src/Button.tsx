interface buttonProp {
    label: string;
    onButtonClick: () => void;
}

function Button({label, onButtonClick}: buttonProp) {
    return <button className="btn btn-primary" onClick={onButtonClick}>{label}</button>;
}

export default Button;

//to possibly dynamically add button color and to account for when color is not specified
//{"btn btn-" + color === null ? "primary" : color}