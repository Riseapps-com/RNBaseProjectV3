const updateIds = <T extends any>(array: Array<T>): Array<T> => {
    array.forEach(item => {
        const chars: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        const idLength: number = 13
        let id: string = ''
        for (let i = 0; i < idLength; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        item.id = id
    })

    return array
}

export default updateIds
