export const isUrl = (str) => {
    console.log(str)
    return str.match(/^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/)
}