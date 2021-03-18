export async function registerUser(userName, userPassword) {
    try{ 
      const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: userName,
            password: userPassword
        })
      }) 
      const user = await response.json();
      console.log(user)
      localStorage.setItem('myToken', user.token);
        return user;
    } catch (error) {
      throw error;
    }
  }

  export async function getUserPublicRoutines() {
    
         
    try {
      const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/albert/routines', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const routines = await response.json();
      return routines;

    } catch (error) {
      
    }
  }