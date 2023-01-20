async function get_wishlist(){
    // await fetch('https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/wishlist', {
    //     method: "POST",
    //     body: JSON.stringify([]),
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*"

    //     },
    // })
    const response = await fetch('https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/wishlist',{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
    })
    const data = await response.json();
    return data
}

// async function add_to_wishlist(a){
//   const resp= await fetch('https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/wishlist',{
//         method: 'POST', 
//         body: JSON.stringify(a),
//         headers: {
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Origin": "*"
//         },
       
//     })
//     const data= await resp.json()
//     return data
// }
// const login = async (username, password) => {
//      const resp = await fetch(`https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/login`, { 
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ username: username, password: password }) 
//      })

//      if(!resp.ok) throw Error("There was a problem in the login request")

//      if(resp.status === 401){
//           throw("Invalid credentials")
//      }
//      else if(resp.status === 400){
//           throw ("Invalid email or password format")
//      }
//      const data = await resp.json()
//      // save your token in the localStorage
//     //also you should set your user into the store using the setStore function
//      localStorage.setItem("jwt-token", data.token);
//      return data
// }

// const signup=async (name, email, password, username)=>{
//   const resp = await fetch(`https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/signup`, { 
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email: email, username: username, password: password, name: name }) 
// })
//   const data= await resp.json()
//   return data
// }

export { get_wishlist, }