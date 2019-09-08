interface Imgs {
    flag: number
    region: number
    africa: number
    americas: number
    asia: number
    europe: number
    oceania: number
    back_arrow: number
    logo_white: number
}

const imgs: Imgs = {
    flag: require('./flag/flag.png'),
    region: require('./region/region.png'),
    africa: require('./africa/africa.png'),
    americas: require('./america/america.png'),
    asia: require('./asia/asia.png'),
    europe: require('./europe/europe.png'),
    oceania: require('./oceania/oceania.png'),
    back_arrow: require('./back_arrow/back_arrow.png'),
    logo_white: require('./logo_white/logo_white.png')
}

export default imgs
