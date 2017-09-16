export const isUrl = (str) => {
    return str.match(/^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/)
}

export const postUrl = (url, data) => {

    const body = {url: data}

    return post(url, body)
        .then(
            response => response.json(),
            error => null
        )
        
}


const post = (url, data) => {

    return fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

}