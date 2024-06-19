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

export default function app(appDiv) {
  // fetch('https://jsonplaceholder.typicode.com/users')
  const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } = setupPageBasics(appDiv)
  checkResponseStatus().then((status) => renderStatus(statusDiv, status ));
  getUsers().then(users => renderUsers(usersUl,users ));
  usersUl.addEventListener('click', (e) => {
    if (e.target.matches('button')){ 
      e.target.dataset.userId = userID
      getUserPosts(userID).then(post => renderPosts(postsUl, post))
    }})
  
//  getUserPosts().then(status => renderPosts(postsUl, status))
//  createNewUser().then(status => renderNewUser(newUserDiv, status ))
}