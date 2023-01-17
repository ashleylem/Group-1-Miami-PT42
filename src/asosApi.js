    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e4d507f755msh79162ed1d20a69dp126773jsnce4d274e856c',
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
	}
    };

async function get_product_list(){
    const res = await fetch('https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US', options)
    const data = await res.json()
    
    return data
}

async function get_women_bestsellers (){
    const res = await fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=16661&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
    const data = await res.json()
   
    return data.products
}

export {get_product_list, get_women_bestsellers}