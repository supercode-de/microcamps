const ButtonBig = (props) => {
    const btnPropsStyle = {
        color: props.btnColor,
        backgroundColor: props.btnBgcolor
    }
    return (
        <>
            <a className="btn" href={props.href} style={btnPropsStyle}>
                {props.btnText}
            </a>
        </>
    );
}

export default ButtonBig;