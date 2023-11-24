export async function query(data) {
    try {
      console.log(data);
      
      const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: { 
            "Accept": "image/png",
            "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
            "Content-Type": "application/json" 
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      console.log("Hello from here");
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const result = await response.blob();
      return result;
    } catch (error) {
      console.error("API error:", error);
      console.log("hello");
      throw error;
    }
  }
  