import React from 'react';
import { connect } from 'react-redux';
import {
	CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  PaymentRequestButtonElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements';

const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = change => {
  console.log('[change]', change);
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

const createOptions = (fontSize) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, Menlo, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

class CardSection extends React.Component {
  render() {
    return (
      <div>
				<div style={{marginTop: '10px', display: 'flex', justifyContent: 'center'}}>
					<h2>Total due: ${this.props.total}</h2>
				</div>
				<div style={{marginTop: '15px'}}>
	        <label>
	          Card number
	          <CardNumberElement
	            onBlur={handleBlur}
	            onChange={handleChange}
	            onFocus={handleFocus}
	            onReady={handleReady}
	            {...createOptions(this.props.fontSize)}
	          />
	        </label>
				</div>
				<div style={{marginTop: '45px'}}>
	        <label>
	          Expiration date
	          <CardExpiryElement
	            onBlur={handleBlur}
	            onChange={handleChange}
	            onFocus={handleFocus}
	            onReady={handleReady}
	            {...createOptions(this.props.fontSize)}
	          />
	        </label>
				</div>
				<div style={{marginTop: '45px'}}>
	        <label>
	          CVC
	          <CardCVCElement
	            onBlur={handleBlur}
	            onChange={handleChange}
	            onFocus={handleFocus}
	            onReady={handleReady}
	            {...createOptions(this.props.fontSize)}
	          />
	        </label>
				</div>
				<div style={{marginTop: '45px'}}>
	        <label>
	          Postal code
	          <PostalCodeElement
	            onBlur={handleBlur}
	            onChange={handleChange}
	            onFocus={handleFocus}
	            onReady={handleReady}
	            {...createOptions(this.props.fontSize)}
	          />
	        </label>
				</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.total,
  }
}


export default connect(mapStateToProps)(CardSection);
