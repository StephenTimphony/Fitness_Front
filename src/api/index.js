

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
    throw error;
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
    throw error;
  }
}

export async function createRoutine({ name, goal, isPublic, id }) {
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
    throw error;
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
    throw error;
  }
}

export async function updateRoutine({ name, goal, isPublic, routineId}) {

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
    throw error;
  }
}

export async function getAllActivities() {

  try {
    const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const activities = await response.json();
    return activities;

  } catch (error) {
    throw error;
  }
}

export async function addActivityToRoutine({ routineid, activityId, count, duration }) {
 
  try {
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${ routineid }/activities`, {
      method: "POST",
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        "activityId": activityId,
        count: count,
        duration: duration
      })
    })
    const activity = await response.json();
    return activity;
  } catch (error) {
    throw error;
  }
}

export async function editActivity({ routine_activity_id, count, duration }) {

  try {
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${ routine_activity_id }`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ localStorage.getItem('myToken') }`
      },
      body: JSON.stringify({
        count: count,
        duration: duration
      })
    })
    const activity = await response.json();
    return activity;
  } catch (error) {
    
  }
}

export async function deleteActivityFromRoutine({ routine_activity_id }) {

  try {
    const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${ routine_activity_id }`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ localStorage.getItem('myToken') }`
      }
    })
    const activity = await response.json();
    return activity;
  } catch (error) {
    
  }
}

