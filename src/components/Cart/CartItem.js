import React from 'react';

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-md-2">
                <img
                    src={img}
                    style={{ width: '5rem', height: '5rem' }}
                    className="img-fluid"
                    alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-md-2">
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-md-2">
                <span className="d-lg-none">price : $</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-md-3 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span
                            className="btn btn-black mx-0"
                            onClick={() => decrement(id)}
                        >
                            -
                        </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span
                            className="btn btn-black mx-0"
                            onClick={() => increment(id)}
                        >
                            +
                        </span>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="col-10 mx-auto col-md-1">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash" />
                </div>
            </div>
            <div className="col-10 mx-auto col-md-2">
                <strong> item total : $ {total}</strong>
            </div>
        </div>
    );
}
