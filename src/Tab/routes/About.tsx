import { useEffect, useState } from "react";

const About = () => {
  // State to store fetched data
  const [data, setData] = useState(null);

  // Effect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  // Function to fetch data
  const fetchData = async () => {
    try {
      // Make a GET request using the Fetch API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos/1"
      );

      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the JSON data from the response
      const result = await response.json();

      // Update the state with the fetched data
      setData(result.url);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  // Render the component
  return (
    <div>
      {data ? (
        // Display the fetched data
        <p>
          <img src={data} alt="Image" />
        </p>
      ) : (
        // Display a loading message or other UI while data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;
