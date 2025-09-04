import { useState } from "react";

export const Day8 = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
           {" "}
      <form>
               {" "}
        <div>
                    <label htmlFor="name">Name:</label>         {" "}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
                 {" "}
        </div>
               {" "}
        <div>
                    <label htmlFor="message">Message:</label>         {" "}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
                 {" "}
        </div>
               {" "}
        <div>
                    <label htmlFor="rating">Rating:</label>         {" "}
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
                        <option value="">Select a rating</option>           {" "}
            <option value="5">5 - Excellent</option>           {" "}
            <option value="4">4 - Good</option>           {" "}
            <option value="3">3 - Fair</option>           {" "}
            <option value="2">2 - Poor</option>           {" "}
            <option value="1">1 - Very Poor</option>         {" "}
          </select>
                 {" "}
        </div>
                <button type="submit">Submit Feedback</button>     {" "}
      </form>
         {" "}
    </div>
  );
};
