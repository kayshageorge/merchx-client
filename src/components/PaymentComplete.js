import React from 'react';
import CartHeader from './CartHeader';

class PaymentComplete extends React.Component {
  render(){
    return(
      <div>
        <CartHeader />
        <img src='https://www.qrstuff.com/images/sample.png' style={{width: '90vw', marginLeft: '5vw', marginRight: '5vw'}} />
        <div style={{marginLeft: '5vw', marginRight: '5vw'}}>
          <h2>Payment Complete!</h2>
          <h4>Take this code to our merch table to pick upi your stuff!</h4>
        </div>
      </div>
    )
  }
}

export default PaymentComplete;
