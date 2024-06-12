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
};

export const getUserPosts = () => {
};

export const createNewUser = () => {
}
