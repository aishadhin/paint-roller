import React from "react";

const AddNewProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const img = event.target.img.value;
    const orderQuantity = event.target.orderQuantity.value;
    const productQuantity = event.target.productQuantity.value;
    const price = event.target.price.value;

    const theProduct = {
      name,
      description,
      img,
      minQty: orderQuantity,
      avilableQty: productQuantity,
      priceUnit:price,
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
      <h2 className="text-2xl font-bold uppercase text-primary">
        add new product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-full mt-5"
      >
        <input
          className="w-full max-w-xs my-1 input input-bordered"
          type="text"
          name="name"
          placeholder="Product Name"
        ></input>
        <input
          className="w-full max-w-xs my-1 input input-bordered"
          type="url"
          name="img"
          placeholder="Add Image URL"
        ></input>
        <textarea
          name="description"
          class="textarea textarea-bordered md:w-90 w-[100%]"
          placeholder="Description"
        ></textarea>
        <input
          className="w-full max-w-xs my-1 input input-bordered"
          type="text"
          name="orderQuantity"
          placeholder="Minimum order Quantity"
        ></input>
        <input
          className="w-full max-w-xs my-1 input input-bordered"
          type="text"
          name="productQuantity"
          placeholder="product Quantity"
        ></input>
        <input
          className="w-full max-w-xs my-1 input input-bordered"
          type="text"
          name="price"
          placeholder="Product Price"
        ></input>
        <input
          className="w-full max-w-xs my-1 text-white input input-bordered btn btn-primary"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddNewProduct;

/*
Object
avilableQty: 180
description: "Mini roller is ideal for doors, moldings, trim and cabinets. Applies a lint-free, sprayed-like finish. For alkyd enamels, urethanes, varnishes, stains, primers, specialty coatings. For super-smooth, smooth and semi-smooth surfaces."
img: "https://m.media-amazon.com/images/I/71tO92QjB+L._AC_UL320_.jpg"
minQty: 10
name: "Finish Roller"
priceUnit: 16
*/