import { createStore } from 'vuex'
import Auth from './Auth';
import Profile from './Profile';
import Cart from './Cart';

export default createStore({
  
  modules: {
    auth: Auth,
    profile: Profile,
    cart: Cart,
  }
})
