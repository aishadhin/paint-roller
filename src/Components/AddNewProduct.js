import React from "react";

const AddNewProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const orderQuantity = event.target.orderQuantity.value;
    const productQuantity = event.target.productQuantity.value;
    const price = event.target.price.value;

    const theProduct = {
      name,
      description,
      orderQuantity,
      productQuantity,
      price,
    };

    fetch("https://lit-sands-52499.herokuapp.com/product", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };

  return (
    <div className="mx-auto my-12">
      <h2 className="text-2xl text-primary uppercase font-bold">
        add new product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mt-5 flex flex-col justify-center w-full"
      >
        <input
          className="input input-bordered w-full max-w-xs my-1"
          type="text"
          name="name"
          placeholder="Product Name"
        ></input>
        <textarea
          name="description"
          class="textarea textarea-bordered md:w-90 w-[100%]"
          placeholder="Description"
        ></textarea>
        <input
          className="input input-bordered w-full max-w-xs my-1"
          type="text"
          name="orderQuantity"
          placeholder="Minimum order Quantity"
        ></input>
        <input
          className="input input-bordered w-full max-w-xs my-1"
          type="text"
          name="productQuantity"
          placeholder="product Quantity"
        ></input>
        <input
          className="input input-bordered w-full max-w-xs my-1"
          type="text"
          name="price"
          placeholder="Product Price"
        ></input>
        <input
          className="input input-bordered w-full max-w-xs my-1 btn btn-primary text-white"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddNewProduct;
