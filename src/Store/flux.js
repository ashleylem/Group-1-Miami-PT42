
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      isAuthenticated: "false",
      wishlist: [],
    },
    actions: {
      sign_up: async (name, email, password, username) => {
        fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/signup",
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
          `https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/login`,
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
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/wishlist",
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
        setStore({ isAuthenticated: true });
        return data;
      },
      get_user_wishlist: async () => {
        const token = localStorage.getItem("jwt-token");
        const userId = localStorage.getItem("user-id");
        const response = await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/wishlist/" +
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
        return data;
      },
      delete_item: (product_id) => {
        const token = localStorage.getItem("jwt-token");
        const userId = localStorage.getItem("user-id");
        const store = getStore();
        const response = fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/wishlist/" +
            userId +
            "/" +
            product_id,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const deleteItem = store.wishlist.filter(
          (item) => item.product_id !== product_id
        );
        setStore({ wishlist: deleteItem });
        console.log("click");
        window.location.reload();
        return response;
      },
      add_to_cart: async (a) => {
        const token = localStorage.getItem("jwt-token");
        const resp = await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/Cart",
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
        setStore({ isAuthenticated: true });
        return data;
      },
      get_user_cart: async () => {
        const token = localStorage.getItem("jwt-token");
        const userId = localStorage.getItem("user-id");
        const response = await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/Cart/" +
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
        return data;
      },
      delete_cart_item: (product_id) => {
        const token = localStorage.getItem("jwt-token");
        const userId = localStorage.getItem("user-id");
        const store = getStore();
        const response = fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/Cart/" +
            userId +
            "/" +
            product_id,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        window.location.reload();
        return response;
      },
      clear_cart: () => {
        const token = localStorage.getItem("jwt-token");
        const userId = localStorage.getItem("user-id");
        const store = getStore();
        const response = fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/Cart/" +
            userId + '/delete' ,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
                "Access-Control-Allow-Origin": "*",
              },
            }
        );
        return response;
      },
      add_review: async (form) => {
        await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/uploads/videos",
          {
            method: "POST",
            body: form,
            
          }
        );

      },
      add_to_purchases: async (a) => {
        const token = localStorage.getItem("jwt-token");
        const resp = await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/purchased",
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
        return data;
      },
      get_purchases: async () => {
        const response = await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/purchased",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        // console.log(data);

        return data;
      },
      get_user_videoInfo: async ()=>{
        const userId= localStorage.getItem("user-id")
        const response = await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/uploads/videosInfo/"+userId,
          {
            method: "GET",
          }
        );

        const data = await response.json();
        return data;
      },
      get_user_video: async (videoId)=>{
        const response = await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/uploads/videos/"+videoId,
          {
            method: "GET",
            headers: {
              "Content-Type": "video/mp4",
            },
          }
        );
        // const videoBlob = await response.blob();
        // const videoUrl = URL.createObjectURL(videoBlob);
        // console.log(videoUrl)


        return response.url;
      },
      add_product: async (form) => {
        await fetch(
          "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/products",
          {
            method: "POST",
            body: form,
            
          }
        )

    },
    get_user_products: async () => {
      const userId= localStorage.getItem("user-id")
      const response=await fetch(
        "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us85.gitpod.io/products/"+userId,
        {
          method: "GET",   
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      const data = await response.json()
      console.log(data)
      return data.products

  }
    },
  };
};

export default getState;
