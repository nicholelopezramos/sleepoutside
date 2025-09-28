const baseURL = import.meta.env.VITE_SERVER_URL

async function convertToJson(res) {
  // I prefer async/await here for cleaner flow and consistent error handling.
  if (!res.ok) {
    // I want a helpful error message if the fetch fails.
    throw new Error(`HTTP ${res.status} while fetching ${res.url}`);
  }
  return res.json();
}

export default class ProductData {
  constructor() {
    
  }

  async getData(category) {
    const response = await fetch(`${baseURL}products/search/${category} `);
    const data = await convertToJson(response);
    return data.Result;
  }

  async getProductById(id) {
    // I will need this for the product detail page in the next step.
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }
}