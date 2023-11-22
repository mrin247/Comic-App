// api.js
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
      return getDefaultImage();
      // throw error;
    }
  }

  // Helper function to return a default image (replace it with your actual default image URL)
async function getDefaultImage() {
  try {
    const response = await fetch("https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D");
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
}
  