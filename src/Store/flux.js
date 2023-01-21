const getState = ({ getStore, getActions, setStore }) => {
  return {
    store:{
      wishlist:[]
    },
    actions: {
      sign_up: async (name, email, password, username) => {
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
        const resp = await fetch(
          `https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username, password: password }),
          }
        );

        // if (!resp.ok) {throw Error("There was a problem in the login request")};

        if (resp.status === 401) {
          throw Error("Invalid credentials");
        } else if (resp.status === 400) {
          throw Error("Invalid email or password format");
        }
        const data = await resp.json();
        // save your token in the localStorage
        //also you should set your user into the store using the setStore function
        localStorage.setItem("jwt-token", data.token);
        localStorage.setItem("user-id", data.userId);
        setStore({ isAuthenticated: true });

        return data;
      },
      add_to_wishlist: async (a) => {
        const token = localStorage.getItem("jwt-token");
        const resp = await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/wishlist",
          {
            method: "POST",
            body: JSON.stringify(a),
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        const data = await resp.json();
        setStore({
          wishlist: data,
        });
        return data;
      },
      get_user_wishlist: async () => {
        const token = localStorage.getItem("jwt-token");
        const userId = localStorage.getItem("user-id");
        const response = await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/wishlist/" +
            userId,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        return data;
      },
      delete_item:  (product_id) => {
        const token = localStorage.getItem("jwt-token");
        const userId = localStorage.getItem("user-id");
        const store= getStore()
        const response =  fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us83.gitpod.io/wishlist/" +
            userId +
            "/" +
             product_id ,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const deleteItem = store.wishlist.filter((item)=>item.product_id !== product_id);
        setStore({wishlist: deleteItem})
        console.log("click")
        window.location.reload()
        return response

      },
    },
  };
};

export default getState;
