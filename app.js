// Init gitgub
const gitgub = new Github();
// Init ui
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup',(e)=>{
    // Get input value
    const userText = e.target.value;

    if(userText !==''){
      // Make http call
      gitgub.getUser(userText)
        .then(data=> {
          if(data.profile.message === 'Not Found'){
            // show alert
            ui.showAlert('User not found','alert alert-danger');
          }else{
            // show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
            // console.log(data);
          }
          // console.log(data);
        })
          
 
    }else{
      // clear Profile
      ui.clearProfile();
    }
    
})

















