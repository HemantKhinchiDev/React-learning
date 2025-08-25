import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  }); // state yaha aayegi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }; // event handlers yaha aayenge
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }
    else if(formData.name.trim() === ""){
      alert("Name must be filled with characters");
      return;
    }
    else if(!formData.email.includes("@") || !formData.email.includes(".")){
      alert("Email must contain @ and .");
      return;
    }
    else if (
  formData.password.length < 6 ||
  !/\d/.test(formData.password) ||
  !/[a-z]/.test(formData.password) ||
  !/[A-Z]/.test(formData.password) ||
  !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
) {
  alert(
    "Password must be at least 6 characters, contain a number, a lowercase, an uppercase, and a special character"
  );
  return;
}

    else{
      console.log("Final Form Data:", formData);
    }
  };
  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
