interface buttonProp {
    //in order to use the button component as <Button>Hello</Button>, you must use children, not any other name 
    children: string; 
    //question mark makes this field optional
    //compiler will throw error if color is not any of the ones listed below
    color?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark" | "link"; 
    onButtonClick: () => void;
}

// color = 'primary' makes default color of button to primary
function Button({children, color = "primary", onButtonClick}: buttonProp) {
    return <button className={"btn btn-" + color} onClick={onButtonClick}>{children}</button>;
}

export default Button;
