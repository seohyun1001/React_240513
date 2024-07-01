import React, { useEffect, useRef, useState } from "react";
import Product from "../../models/Product"
import ProductService from "../../service/productService";
import ProductSave from "../../components/ProductSave";

const Admin = () => {

  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(new Product('','', 0));
  const saveComponent = useRef ();
  const [errorMassage, setErrorMessage] = useState('');
  const deleteComponent = useRef();

  useEffect(() => {
    ProductService.getAllProducts().then((response) => {
      setProductList(response.data);
    })
  }, []);

  const createProductRequest = () => {
    saveComponent.current?.showProductModal();
  }

  return (
    <div className="container">
      <div className="card mt-5">

        {errorMassage && <div className="alert alert-danger">{errorMassage}</div>}
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <h3>모든 제품들</h3>
            </div>
            <div className="col-6 text-end">
              <button className="btn btn-primary" onClick={createProductRequest}>새 제품</button>
            </div>
          </div>
        </div> {/* card-header end */}

        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((item, ind) => (
                <tr key={item.id}>
                  <th scope='row'>{ind + 1}</th>
                  <td>{item.name}</td>
                  <td>{`${item.price} 원`}</td>
                  <td>{new Date(item.createTime).toLocaleString()}</td>
                  <td>
                    <button className="btn btn-primary me-1">수정</button>
                    <button className="btn btn-danger">삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div> {/* card-end */}
      <ProductSave ref={saveComponent}/>
    </div> // container end
  )
}

export default Admin;