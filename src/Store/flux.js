const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      isAuthenticated: false,
      wishlist: [],
      
    },
    actions: {
      sign_up: async (name, email, password, username) => {
        const store = getStore();
        fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/signup",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              username: username,
              password: password,
              name: name,
            }),
          }
        );
      },
      login: async (username, password) => {
        const store = getStore();
        const resp = await fetch(
          `https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username, password: password }),
          }
        );

        if (!resp.ok) throw Error("There was a problem in the login request");

        if (resp.status === 401) {
          throw "Invalid credentials";
        } else if (resp.status === 400) {
          throw "Invalid email or password format";
        }
        const data = await resp.json();
        // save your token in the localStorage
        //also you should set your user into the store using the setStore function
        localStorage.setItem("jwt-token", data.token);
        localStorage.setItem("user-id", data.userId);
        setStore({isAuthenticated: true})
        
        return data;
      },
      add_to_wishlist: async (a) => {
        const token = localStorage.getItem('jwt-token')
       
        const store = getStore();
        const resp = await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/wishlist",
          {
            method: "POST",
            body: JSON.stringify(a),
            headers: {
              "Content-Type": "application/json",
              "Authorization": 'Bearer'+ ' ' + token
            },
          }
        );
        const data = await resp.json();
        setStore(
          {
          wishlist: data,
        })
        console.log(store)
        return data;
      },
    },
    
  };
};

export default getState;
