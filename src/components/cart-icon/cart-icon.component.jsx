import React from 'react';
import { connect } from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg'
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import './cart-icon.styles.scss';

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

export default connect(null,mapDispatchToProps)(CartIcon);