function A(props) {
    return (
        <a target={"_blank"} rel={"noreferrer"} href={props.to}>{props.children}</a>
    );
}

export default A;
