function Loading(props) {
    if (props.isLoading) {
        return (
            <p>Chargement en cours, veuillez patienter (hébérgement gratuit heroku, peut mettre quelques instants pour
                la première requête)</p>
        )
    } else {
        return (
            <>
                {props.children}
            </>
        )
    }


}

export default Loading;