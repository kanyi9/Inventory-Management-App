// import React, { useState } from 'react';

// const AddProducts = () => {
//   const [productName, setProductName] = useState('');
//   const [quantity, setQuantity] = useState(0);
//   const [soldQuantity, setSoldQuantity] = useState(0);
//   const [remainingQuantity, setRemainingQuantity] = useState(0);
//   const [price, setPrice] = useState(0);
//   const [supplierName, setSupplierName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to submit the form data to your backend API
//     console.log('Form submitted:', {
//       productName,
//       quantity,
//       soldQuantity,
//       remainingQuantity,
//       price,
//       supplierName,
//     });
//   };

//   return (
//     <div className="container">
//       <h1>Add Product</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Product Name:</label>
//           <input
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Quantity:</label>
//           <input
//             type="number"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Sold Quantity:</label>
//           <input
//             type="number"
//             value={soldQuantity}
//             onChange={(e) => setSoldQuantity(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Remaining Quantity:</label>
//           <input
//             type="number"
//             value={remainingQuantity}
//             onChange={(e) => setRemainingQuantity(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Supplier Name:</label>
//           <input
//             type="text"
//             value={supplierName}
//             onChange={(e) => setSupplierName(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProducts;





import React, { useState } from 'react';
import axios from 'axios';

const AddProducts = ({ onProductAdded }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [soldQuantity, setSoldQuantity] = useState(0);
  const [remainingQuantity, setRemainingQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [supplierName, setSupplierName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      quantity,
      soldQuantity,
      remainingQuantity,
      price,
      supplierName,
    };

    axios.post('http://localhost:3000/products/', newProduct)
     .then(response => {
        onProductAdded(response.data);
        setProductName('');
        setQuantity(0);
        setSoldQuantity(0);
        setRemainingQuantity(0);
        setPrice(0);
        setSupplierName('');
      })
     .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Sold Quantity:</label>
          <input
            type="number"
            value={soldQuantity}
            onChange={(e) => setSoldQuantity(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Remaining Quantity:</label>
          <input
            type="number"
            value={remainingQuantity}
            onChange={(e) => setRemainingQuantity(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Supplier Name:</label>
          <input
            type="text"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;