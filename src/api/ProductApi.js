
export const fetchProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');    
    return response.json();
  };
  
export const fetchCategories = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/categories');  
  return response.json();
};