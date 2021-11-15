import React from 'react';
import './App.scss';
import Homepage from '../src/pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Routes as Switch, Route} from 'react-router-dom'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sing-in-and-sign-up/sing-in-and-sign-up.component';
import { auth,CreateUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
    
    constructor() {
        super();

        this.state= {
            currentUser: null
        }
    }
    
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            if(userAuth) {
                const userRef = CreateUserProfileDocument(userAuth);

                (await userRef).onSnapshot((snapShot) => {
                   this.setState({
                       currentUser: {
                           id:snapShot.id,
                           ...snapShot.data()
                       }
                   });
                   console.log(this.state);
                });
            } else {
                this.setState({currentUser:userAuth});
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    
    render(){
    return (
        <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
                <Route exact path='/e-commerce-react-app'
                    element={<Homepage/>}/>
                <Route path='/e-commerce-react-app/shop'
                    element={<ShopPage/>}/>
                <Route path='/e-commerce-react-app/sign-in'
                    element={<SignInAndSignUpPage/>}/>
            </Switch>
        </div>
    );}
}

export default App;
