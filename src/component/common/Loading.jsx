function Loading({isLoading, message, children}) {
    if (isLoading) {
        if (message) {
            return (
                <p>{message}</p>
            );
        } else {
            return (
                <p>Chargement en cours, veuillez patienter (hébérgement gratuit heroku, peut mettre quelques instants
                    pour
                    la première requête)</p>
            );
        }
    } else {
        return (
            <>
                {children}
            </>
        )
    }


}

export default Loading;