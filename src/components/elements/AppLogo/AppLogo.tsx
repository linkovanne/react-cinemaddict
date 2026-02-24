const AppLogo = ({isSmall = false}: { isSmall?: boolean }) => {
    const classes = ['logo'];
    if (isSmall) {
        classes.push('logo--smaller');
    }
    return (
        <section className={classes.join(' ')}>Cinemaddict</section>
    )
}

export default AppLogo;
