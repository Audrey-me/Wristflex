import React, { useState } from "react";

function AddProducts() {
  const [formData, setFormData] = useState({
    prodName: "",
    prodPrice: "",
    prodImage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("prodName", formData.prodName);
    form.append("prodPrice", formData.prodPrice);
    form.append("prodImage", formData.prodImage);
    try {
      const res = await fetch("http://localhost:5000/api/wristflex/products", {
        method: "POST",
        body: form,
      });
      alert("product sent successfully")
      const data = await res.json();
      console.log(data);
      // do something with the response data
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="text-center leading-9 mt-6" onSubmit={handleSubmit}>
      <div className="space-x-2">
        <label htmlFor="prodName">Product Name:</label>
        <input
          type="text"
          name="prodName"
          value={formData.prodName}
          onChange={handleChange}
          className="focus:outline-none px-2 border boder-solid"
        />
      </div>
      <div className="space-x-2 mt-2">
        <label htmlFor="prodPrice">Product Price:</label>
        <input
          type="text"
          name="prodPrice"
          value={formData.prodPrice}
          onChange={handleChange}
          className="focus:outline-none px-2 border boder-solid"
        />
      </div>
      <div className="space-x-2 mt-2">
        <label htmlFor="prodImage">Product Image:</label>
        <input
          type="text"
          name="prodImage"
          value={formData.prodImage}
          onChange={handleChange}
          className="focus:outline-none px-2 border boder-solid"
        />
      </div>
      <button type="submit" className="focus:outline-none mt-4 px-2 border boder-solid">Add Product</button>
    </form>
  );
}
 
export default AddProducts