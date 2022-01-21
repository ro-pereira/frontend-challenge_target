function useRequests () {
    async function get(route) {
        try {
          const response = await fetch(`http://localhost:3001/${route}`, {
            method: "GET",
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            throw new Error(data.message);
          }

          return data;
        } catch (error) {
        return error.message;
        }
      }

      async function patch(route, body) {
        try {
          const response = await fetch(`http://localhost:3001/${route}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            throw new Error(data.message);
          }
    
          return data;
        } catch (error) {
          return error.message;
        }
      }

      async function post(route, body) {
        try {
          const response = await fetch(`http://localhost:3001/${route}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            throw new Error(data.message);
          }
    
          return data;
        } catch (error) {
          console.log(error)
        }
      }

      return {
        get,
        patch,
        post
      }
}


export default useRequests;