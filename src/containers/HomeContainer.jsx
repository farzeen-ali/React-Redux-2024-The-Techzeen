import {Connect} from 'react-redux';
import Home from '../components/Home';
import { addToCart } from '../Services/Actions/actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data))
})

export default Connect(mapStateToProps, mapDispatchToProps)(Home)