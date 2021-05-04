import React from "react"

export const PropsCompile = ({ motorcycle, yourName }) => {
  
  return (
    <><div className="Props">
      <h2>Welcome, {yourName} </h2>
      <h3>We hope you have a great ride with {motorcycle} today!</h3>
      </div>
    </>
  )
}