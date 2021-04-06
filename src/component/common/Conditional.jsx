function Conditional(props) {
    if (props.showCondition) {
        return (
            <>
                {props.children}
            </>
        )
    } else return (<></>);

}

export default Conditional;