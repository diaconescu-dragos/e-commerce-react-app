import React from 'react';
import './App.css';
import Homepage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sing-in-and-sign-up/sing-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth,CreateUserProfileDocument} from './firebase/firebase.utils';
import {Routes as Switch, Route , Navigate} from 'react-router-dom'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
    
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if(userAuth) {
                const userRef = CreateUserProfileDocument(userAuth);

                (await userRef).onSnapshot((snapShot) => {
                   this.props.setCurrentUser({
                           id:snapShot.id,
                           ...snapShot.data()
                   });
                });
            } 
                
            setCurrentUser(userAuth);
            
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    


    render(){
  
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/e-commerce-react-app'
                    element={<Homepage/>}/>
                <Route path='/e-commerce-react-app/shop'
                    element={<ShopPage/>}/>
                <Route 
                exact 
                path="/e-commerce-react-app/sign-in"
                element ={ 
                        this.props.currentUser ? (
                      <Navigate to='/e-commerce-react-app'/>
                    ) : (
                      <SignInAndSignUpPage/> 
                        ) 
                   } 
                  />
                  <Route exact path='/e-commerce-react-app/checkout' element= {<CheckoutPage/>} />
            </Switch>
        </div>
    );}
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
