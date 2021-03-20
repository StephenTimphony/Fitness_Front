

export async function checkUser() {
  try {
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ localStorage.getItem("myToken") }`
      },
    })
    const user = await response.json();
    return user;
  } catch (error) {
    throw error;
  }
}


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
    localStorage.setItem("username", userName)
      return user;
  } catch (error) {
    throw error;
  }
  }

  export async function getUserPublicRoutines() {    
         
  try {
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${ localStorage.getItem("username") }/routines`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const routines = await response.json();
    return routines;

  } catch (error) {
    
  }
}

export async function getPublicRoutines() {

  try {
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const routines = await response.json();
    return routines;

  } catch (error) {
    
  }
}

export async function createRoutine({ name, goal, isPublic, id }) {
  console.log(name, goal, isPublic, id )
  let token;
  if (!localStorage.getItem("myToken")) {
    return;
  } else {
    token = localStorage.getItem("myToken");
  }
  try {
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
      method: "POST",
      headers: {
        'Content-type':'application/json',
        'Authorization':`Bearer ${ token }`
      },
      body: JSON.stringify({
        creatorId: id,
        name: name,
        goal:  goal,
        isPublic: isPublic
      })
    })  
    const routine = await response.json();
    return routine;

  } catch (error) {
    
  }
}

export async function deleteRoutine(id) {
  try {
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${ id }`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ localStorage.getItem("myToken")}`
      }
    })
    const routine = await response.json();
    return routine;
  } catch (error) {
    
  }
}

export async function updateRoutine({ name, goal, isPublic, routineId}) {
  console.log(name, goal, isPublic, routineId)
  try {
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${ routineId }`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ localStorage.getItem("myToken")}`
      },
      body: JSON.stringify({
        isPublic: isPublic,
        name: name,
        goal: goal
      })
    })
    const routine = await response.json();
    return routine;
  } catch (error) {
    
  }
}