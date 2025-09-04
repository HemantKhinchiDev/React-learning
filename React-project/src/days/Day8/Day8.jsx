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
  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validation for name field
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Validation for message field
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // Agar koi error na ho, toh form submit karo
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!", formData);
      // Yahaan tum data ko server par bhej sakte ho
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="">Select a rating</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Fair</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Very Poor</option>
          </select>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};
