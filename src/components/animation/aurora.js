var AuroraBackgroundProvider = require('@nauverse/react-aurora-background')

const Aurora = () => {
    return (
        <AuroraBackgroundProvider useRandomness={true} animDuration={20}>
            Hello world
        </AuroraBackgroundProvider>
    )
}

export default Aurora