import React from 'react'

function Content() {
  return (
    <div className="container-fluid px-4 mt-114px">
    <div className="row g-3 my-2">
        <div className="col-md-3">
        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
            <h3 className="fs-2">720</h3>
            <p className="fs-5">Products</p>
            </div>
            <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3" />
        </div>
        </div>
        <div className="col-md-3">
        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
            <h3 className="fs-2">4920</h3>
            <p className="fs-5">Sales</p>
            </div>
            <i className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3" />
        </div>
        </div>
        <div className="col-md-3">
        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
            <h3 className="fs-2">3899</h3>
            <p className="fs-5">Delivery</p>
            </div>
            <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3" />
        </div>
        </div>
        <div className="col-md-3">
        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
            <h3 className="fs-2">%25</h3>
            <p className="fs-5">Increase</p>
            </div>
            <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3" />
        </div>
        </div>
    </div>
    <div className="row my-5">
        <h3 className="fs-4 mb-3">Recent Orders</h3>
        <div className="col">
        <table className="table bg-white rounded shadow-sm  table-hover">
            <thead>
            <tr>
                <th scope="col" width={50}>
                #
                </th>
                <th scope="col">Product</th>
                <th scope="col">Customer</th>
                <th scope="col">Price</th>
                <th scope="col">Price</th>
                <th scope="col">Price</th>
                <th scope="col">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Television</td>
                <td>Jonny</td>
                <td>$1200</td>
                <td>$1200</td>
                <td>$1200</td>
                <td>$1200000000000000000</td>
            </tr>
            </tbody>
        </table>
        <>
  <>

</>

</>

        </div>
    </div>
    </div>
  )
}

export default Content