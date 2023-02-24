const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      isAuthenticated: "false",
      wishlist: [],
    },
    actions: {
      sign_up: async (name, email, password, username) => {
        fetch(
          "https://ashleylem.pythonanywhere.com/signup",
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
        localStorage.setItem('showIntro', true)
      },
      login: async (username, password) => {
        const resp = await fetch(
          `https://ashleylem.pythonanywhere.com/login`,
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
      get_user_info: async () => {
        const userId = localStorage.getItem("user-id");
        const response = await fetch(
          "https://ashleylem.pythonanywhere.com/" +
            userId,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        // console.log(data)
        return data;
      },
      get_info:async (user_id) => {
        
        const response = await fetch(
          "https://ashleylem.pythonanywhere.com/profile/" +
            user_id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        // console.log(data)
        return data;
      },

      add_user_picture: async (form) => {
        const userId = localStorage.getItem("user-id");
        await fetch(
          "https://ashleylem.pythonanywhere.com/" +
            userId +
            "/picture",
          {
            method: "POST",
            body: form,
          }
        );
        window.location.reload();
      },
      edit_user_picture: async (form)=>{
        const userId = localStorage.getItem("user-id");
        await fetch(
          "https://ashleylem.pythonanywhere.com/profile/picture/replace/" +userId ,
          {
            method: "POST",
            body: form,
          }
        );
        window.location.reload();

      },
      add_to_wishlist: async (a) => {
        const token = localStorage.getItem("jwt-token");
        const resp = await fetch(
          "https://ashleylem.pythonanywhere.com/wishlist",
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
          "https://ashleylem.pythonanywhere.com/wishlist/" +
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
          "https://ashleylem.pythonanywhere.com/wishlist/" +
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
          "https://ashleylem.pythonanywhere.com/Cart",
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
          "https://ashleylem.pythonanywhere.com/Cart/" +
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
          "https://ashleylem.pythonanywhere.com/Cart/" +
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
          "https://ashleylem.pythonanywhere.com/Cart/" +
            userId +
            "/delete",
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
        let response = await fetch(
          "https://ashleylem.pythonanywhere.com/uploads/videos",
          {
            method: "POST",
            body: form,
            
          }
        );
       
      },
      add_to_purchases: async (a) => {
        const token = localStorage.getItem("jwt-token");
        const resp = await fetch(
          "https://ashleylem.pythonanywhere.com/purchased",
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
          "https://ashleylem.pythonanywhere.com/purchased",
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
      get_user_videoInfo: async () => {
        const userId = localStorage.getItem("user-id");
        const response = await fetch(
          "https://ashleylem.pythonanywhere.com/uploads/videosInfo/" +
            userId,
          {
            method: "GET",
          }
        );

        const data = await response.json();
        return data;
      },
      get_user_video: async (videoId) => {
        const response = await fetch(
          "https://ashleylem.pythonanywhere.com/uploads/videos/" +
            videoId,
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
      get_all_uploads: async ()=>{
        const response= await fetch("https://ashleylem.pythonanywhere.com/uploads/videos",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;

      },
      add_product: async (form) => {
        await fetch(
          "https://ashleylem.pythonanywhere.com/products",
          {
            method: "POST",
            body: form,
          }
        );
        window.location.reload();
      },
      get_user_products: async () => {
        const userId = localStorage.getItem("user-id");
        const response = await fetch(
          "https://ashleylem.pythonanywhere.com/products/" +
            userId,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        // console.log(data)
        return data.products;
      },
      get_category_products: async (category)=>{
        const response =await fetch('https://ashleylem.pythonanywhere.com/products/category/'+category,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const data= await response.json()
        return data
      },
      get_subcategory_products: async (category, subcategory)=>{
        const response =await fetch('https://ashleylem.pythonanywhere.com/products/category/'+category+"/"+subcategory,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const data= await response.json()
        return data
      },
      get_product_info: async (product_id)=>{
        const response= await fetch('https://ashleylem.pythonanywhere.com/products/'+ product_id,{
          method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
        })
        const data= await response.json()
        return data
      },
      product_info: async (product_id)=>{
        const response= await fetch('https://ashleylem.pythonanywhere.com/product/'+ product_id,{
          method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
        })
        const data= await response.json()
        console.log(data)
        return data
      },
      add_to_sales: async (form)=>{
        const response = await fetch(
          "https://ashleylem.pythonanywhere.com/sales",
          {
            method: "POST",
            body: form,
            
          }
        );
      },
      get_sales: async(userId)=>{
        const response = await fetch(
          "https://ashleylem.pythonanywhere.com/sales/"+userId,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            
          }
        );
        const data = await response.json();
        return data;
      },
      get_accessories: async()=>{
        const response= await fetch( "https://ashleylem.pythonanywhere.com/accessories", {
          method:'GET',
          headers: {
            "Content-Type": "application/json",
          },
        })
        const data = await response.json();
        return data;
      }
    },
  };
};

export default getState;
