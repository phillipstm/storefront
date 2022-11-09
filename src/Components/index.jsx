import { connect } from 'react-redux';
import { incrementPurchases, decrementPurchases, reset } from '../Store/Categories';



const Purchases = (props) => {
    console.log(props);
    const{ purchases, totalPurchases, incrementPurchases, decrementPurchases, reset } =props;
    
    return (
        <>
        <h1>Total Items Selected {props.totalPurchases}</h1>
        {
            purchases.map((purchase, index) => (
                <div key={`purchase-${index}`}>
                    <h4>{purchase.name} has {purchase.purchases}</h4>
                    <button onClick={() => incrementPurchases(purchase)}>Buy Now!</button>
                    <button onClick={() => decrementPurchases(purchase)}>Remove</button>
                </div>
            ))
        }
        <button onClick={reset}>Reset</button>
        </>
    )
}

const mapStateToProps = ({purchases, categories}) => {
    return {
        totalPurchases: purchases.totalPurchases,
        categories,
    }
}


const mapDispatchToProps ={
    incrementPurchases,
    decrementPurchases,
    reset
};


export default connect(mapStateToProps, mapDispatchToProps)(Purchases)