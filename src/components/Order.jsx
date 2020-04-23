import React from 'react'
import './Order.css'

const OrderArticles = (props) => {
  return (
    <form className='orderContainer'>
      <p>
        <label htmlFor='order'>
          Order:
          <br />
          <select
            onChange={props.handleChange}
            name='order'
            className='order_button'
          >
            <option selected disabled>
              Choose
            </option>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
          </select>
        </label>
      </p>
    </form>
  )
}

export default OrderArticles
