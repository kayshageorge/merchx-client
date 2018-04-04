import React from 'react';
import CartHeader from './CartHeader';

class PaymentComplete extends React.Component {
  render(){
    return(
      <div className="getsBackground" style={{minHeight: '100vh'}}>
        <CartHeader />
        <img src='https://www.qrstuff.com/images/sample.png' style={{width: '90vw', marginLeft: '5vw', marginRight: '5vw', marginBottom: '10px', borderRadius: '5px'}} />
        <div style={{marginLeft: '5vw', marginRight: '5vw'}}>
          <h2>Payment Complete!</h2>
          <h4>Take this code to our merch table to pick up your stuff!</h4>
        </div>
      </div>
    )
  }
}

export default PaymentComplete;
