import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JycD4Jeeu2Iiz0cZAm6esrqxZX412dOC2bpG8WtLE1xHVa8SszVjnohfwgjaSiY0bQRvPDDGU1VyEMT5BTVgvKG00wLfPdIcL';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
        label = 'Pay Now'
        name = 'Noire Clothing Inc.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;