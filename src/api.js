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
    }
  }

  // Helper function to return a default image (replace it with your actual default image URL)
async function getDefaultImage() {
  try {
    const response = await fetch("https://media.istockphoto.com/id/1392182937/vector/no-image-available-photo-coming-soon.jpg?s=612x612&w=0&k=20&c=3vGh4yj0O2b4tPtjpK-q-Qg0wGHsjseL2HT-pIyJiuc=");
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
}
  