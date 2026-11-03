// 
import React from 'react'

function Counter() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="border rounded p-5 text-center text-light w-100" style={{ maxWidth: "600px" }}>

        <h1 className="display-1 fw-bold text-dark">0</h1>

        <div className="d-flex justify-content-center gap-4 my-4">
          <button className="btn btn-warning">Decrement</button>
          <button className="btn btn-danger">Reset</button>
          <button className="btn btn-success">Increment</button>
        </div>

        <div className="d-flex gap-3 mt-5">
          <input
            type="number"
            className="form-control"
            placeholder="Enter the amount to be Incremented!!!"
          />
          <button className="btn btn-primary">Increment by Amount</button>
        </div>

      </div>
    </div>
  )
}

export default Counter