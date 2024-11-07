import { getCookie } from "cookies-next";

const apiUrl=process.env.NEXT_PUBLIC_API_URL;
// src/utils/apiUtils.js
export const fetchData = async (url, options = {}) => {
    try {
      const access_token=await getCookie("access_token")
      if(!options.headers || !options.method){
        options={
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      }
      if(access_token){
        options.headers['Authorization'] = `Bearer ${access_token}`;
      }

      let response = await fetch(`${apiUrl}${url}`, options);
      if (!response.ok) {
        let errorMessage;
      
        // Check for common status codes and customize messages
        switch (response.status) {
          case 400:
            errorMessage = 'Bad request. Please check the data you entered.';
            break;
          case 401:
            errorMessage = 'Unauthorized. Please log in to continue.';
            break;
          case 404:
            errorMessage = 'Resource not found. Please check the URL.';
            break;
          case 500:
            errorMessage = 'Internal server error. Please try again later.';
            break;
          default:
            errorMessage = 'An unexpected error occurred. Please try again.';
        }

        throw new Error(errorMessage);
      }
      
      return await response.json();

    } catch (error) {
      
        console.error('Fetching data failed:', error);

        throw error;  // rethrow the error to be handled by the caller
    
    }
  };
  