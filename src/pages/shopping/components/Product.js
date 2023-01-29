import React from 'react'
import GetProduct from '../fetchers/product';
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams();
  const product = GetProduct(id);
  return (
    <div className="container px-4 px-lg-5 my-3">
                    <div className="row mx-auto">
                        <div className="col d-flex align-items-center ">
                            <img
                                className="card-img-top mb-5 mb-md-0 img-fluid "
                                src={
                                    'data:image/png;base64,' +
                                    product.image.file
                                }
                                alt={product.image.name}
                            />
                        </div>
                        <div className="col">
                            <h1 className="display-5 fw-bolder d-flex justify-content-end">
                                {product.name}
                            </h1>
                            <div className="fs-5 mb-5 d-flex justify-content-end">
                                <span>{product.price} zł</span>
                            </div>
                            <p className="lead">
                                {product.description}
                            </p>
                            <div className="d-flex justify-content-begin">
                                <form>
                                    <button
                                        className="btn btn-outline-dark flex-shrink-0"
                                        type="button"
                                    >
                                        <i className="bi-cart-fill me-1"></i>
                                        Dodaj do koszyka
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Product