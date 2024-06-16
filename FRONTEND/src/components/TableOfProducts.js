// import React from 'react';
// import Table from 'react-bootstrap/Table';

// const TableOfProducts = ({ products }) => {
//   return (
//     <Table striped>
//       <thead>
//         <tr>
//           <th>Product Name</th>
//           <th>Quantity</th>
//           <th>Sold Quantity</th>
//           <th>Remaining Quantity</th>
//           <th>Price</th>
//           <th>Supplier Name</th>
//         </tr>
//       </thead>
//       <tbody>
//         {products.map((product, index) => (
//           <tr key={index}>
//             <td>{product.name}</td>
//             <td>{product.quantity}</td>
//             <td>{product.sold_quantity}</td>
//             <td>{product.remaining_quantity}</td>
//             <td>{product.price}</td>
//             <td>{product.supplier_name}</td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

// export default TableOfProducts;



import React from 'react';
import Table from 'react-bootstrap/Table';

const TableOfProducts = ({ products = [] }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Sold Quantity</th>
          <th>Remaining Quantity</th>
          <th>Price</th>
          <th>Supplier Name</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.soldQuantity}</td>
              <td>{product.remainingQuantity}</td>
              <td>{product.price}</td>
              <td>{product.supplierName}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>No products found</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TableOfProducts;