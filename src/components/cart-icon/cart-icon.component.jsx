import React from 'react';
import { connect } from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg'
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCarItemsCount } from '../../redux/cart/cart-selectors';

import './cart-icon.styles.scss';

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const CartIcon = ({toggleCartHidden , itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);
const mapStateToProps = state => ({
    itemCount: selectCarItemsCount(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);