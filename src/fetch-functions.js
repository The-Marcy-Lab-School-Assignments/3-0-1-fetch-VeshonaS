const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => {
      const object = {
        "ok":res.ok,
        "status":res.status,
        "url":res.url
        }
        return object
     });
    //   if (!res.ok){
    //     console.error('check the url')
    //   } 
    // // })
    //   .then(data => data)
    //   .catch(error => `Fetch error: ${error.message}`)
};


export const getUsers = () => {
  return fetch(userUrl)
  .then((response)=> {
    if (!response.ok){
      return console.log(`Failed response. ${response.status} ${response.statusText}`)
    }
    return response.json()
  })
  .then(data => {
    return data 
  })
}

export const getUserPosts = (userId , maxNumPosts = 3 ) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  .then(response => {
    return response.json()
  })
  .then( data => {
 return data.splice(0 , maxNumPosts)
  })

};

export const createNewUser = (newUserData) => {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newUserData)
  }
  return fetch('https://jsonplaceholder.typicode.com/users', options )
  .then(response => 
   { return response.json()
   })
}
