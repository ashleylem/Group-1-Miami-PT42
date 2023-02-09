import { json } from "react-router-dom";
import axios from "axios";


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": 'e4d507f755msh79162ed1d20a69dp126773jsnce4d274e856c',
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    "access-control-allow-origin": "*",
  },
};
const optionsMen = {
  method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/regions/list',
  headers: {
    'X-RapidAPI-Key': '3ad8851207msh432075411cda5cbp133f7bjsn042807104bdb',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
};

async function get_women_categories() {
  const res = await fetch(
    "https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US",
    options
  );
  const data = await res.json();

  return data.navigation[1].children[4].children[3].children[1].children;
}

async function get_men_categories() {
  const res = await fetch(
    "https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US",
    optionsMen
  );
  const data = await res.json();

  return data.navigation[1].children[4].children[3].children[1].children;
}


async function get_product_details(id) {
  const res = await fetch(
    "https://asos2.p.rapidapi.com/products/v3/detail?id=" +
      id +
      "&lang=en-US&store=US&sizeSchema=US&currency=USD",
    options
  )
  const data = await res.json();
  // console.log(data);
  return data;
}




export { get_women_categories, get_product_details, get_men_categories  };
