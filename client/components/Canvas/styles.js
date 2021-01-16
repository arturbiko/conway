import colors from '../../assets/scss/export.scss';

const tokenStyle = () => {
    return {
        tokenAlive: colors.green,
        tokenDead: colors.cream
    }
}

const gridStyle = () => {
    return {
        gridBorder: colors.brown
    }
}

export {
    tokenStyle,
    gridStyle
}
