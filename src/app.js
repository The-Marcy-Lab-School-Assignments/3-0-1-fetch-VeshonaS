import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';
/** FEEDBACK: Great job getting most test cases to pass! */
export default function app(appDiv) {
  // fetch('https://jsonplaceholder.typicode.com/users')
  const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } = setupPageBasics(appDiv)
  checkResponseStatus().then((status) => renderStatus(statusDiv, status ));
  getUsers().then(users => renderUsers(usersUl,users ));
  usersUl.addEventListener('click', (e) => {
    if (e.target.matches('button')){ 
      /** FEEDBACK: You were so close! You should save the user's id in a variable! Like so: 
       * const userID = e.target.dataset.userId
       */
      e.target.dataset.userId = userID
      getUserPosts(userID).then(post => renderPosts(postsUl, post))
    }})
  /** FEEDBACK: You are on the right track! You got this! */
//  getUserPosts().then(status => renderPosts(postsUl, status))
//  createNewUser().then(status => renderNewUser(newUserDiv, status ))
}