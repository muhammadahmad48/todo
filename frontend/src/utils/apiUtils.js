import { getCookie } from "cookies-next";

const apiUrl=process.env.NEXT_PUBLIC_API_URL;
// src/utils/apiUtils.js
export const fetchData = async (url, options = {}) => {
    try {
      const access_token=await getCookie("access_token")
      if(access_token){
        options.headers['Authorization'] = `Bearer ${access_token}`;
      }

      const response = await fetch(`${apiUrl}${url}`, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();

    } catch (error) {
      
        console.error('Fetching data failed:', error);

        throw error;  // rethrow the error to be handled by the caller
    
    }
  };
  