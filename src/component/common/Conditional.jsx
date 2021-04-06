function Conditional({showCondition, children}) {
    if (showCondition) {
        return (
            <>
                {children}
            </>
        )
    } else return (<></>);

}

export default Conditional;