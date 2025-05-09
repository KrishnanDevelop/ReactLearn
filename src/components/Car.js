function Car(props) {    
    const {brandName} = props
    const text = `this is a ${props.brandName} Car function`;
    const headStyle = {
        textAlign:"center",
        textTransform: "capitalize",
        background: "linear-gradient(to top, orange, white, green)",
        color: "white"
    }
    return (
        <>
            <h1 style={headStyle}>{text}</h1>
        </>
    );
}
export default Car