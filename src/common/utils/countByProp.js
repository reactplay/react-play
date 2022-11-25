


export default function countByProp(obj, key, value) {
    return obj.reduce((acc, item) => item?.[key] === value ? ++acc : acc, 0)
}