import React from "react";

const Blog = () => {
  return (
    <div className="p-12">
      <h2 className="text-center text-3xl mb-12 uppercase font-bold">Blog</h2>
      <div className="bg-primary p-12 rounded text-white my-12">
        <h3 className="text-2xl">
          How will you improve the performance of a React Application?
        </h3>
        <p>
          <ul className="mt-5">
            <li>1. React code-splitting using dynamic import()</li>
            <li>2. Image Compression</li>
            <li>
              3. Maintaining component state locally when possible.
            </li>
            <li>
              4. Prevent unnecessary re-rendering of React components by
              memorizing them.
            </li>
            <li>5. React's windowing or list virtualization.</li>
          </ul>
        </p>
      </div>
      <div className="bg-primary p-12 rounded text-white my-12">
        <h3 className="text-2xl">
          What are the different ways to manage a state in a React application?
        </h3>
        <p>
          <br />
          There are four main types of state.
          <br /> 1. Local state. <br /> 2. Global state.
          <br />
          3. Server state.
          <br />
          4. URL state.
        </p>
      </div>
      <div className="bg-primary p-12 rounded text-white my-12">
        <h3 className="text-2xl">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h3>
        <br />
        <p>let object = arr.find(o => o.name === 'product name');</p>
      </div>
      <div className="bg-primary p-12 rounded text-white my-12">
        <h3 className="text-2xl">How does prototypical inheritance work?</h3>
        <br />
        <p>
          There is only one JavaScript construct and that is objects. Private
          properties are links to prototypes which hold links to other objects.
          Each prototype object has a prototype of its own, and so on until null
          is the prototype of an object.
        </p>
      </div>
      <div className="bg-primary p-12 rounded text-white my-12">
        <h3 className="text-2xl">
          What is a unit test? Why should write unit tests?
        </h3>
        <br />
        <p>
          Unit Testing is a method where test code is written for a web page or
          web application module. Unit testing ensures that all code meets
          quality standards before it's deployed.
        </p>
      </div>
    </div>
  );
};

export default Blog;
