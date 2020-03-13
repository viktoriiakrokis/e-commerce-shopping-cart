import React, { Component } from 'react'
import formatCurrency from '../util'

export default class Products extends Component {
    render() {
        const productItems = this.props.products.map(product => 
            
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`} onClick={this.props.handleAddToCard}>
                        <img src={`/products/${product.sku}.jpg`} alt={product.title}/>
                        <p>
                            {product.title}
                        </p>
                    </a>
                    <div>
                        <b>{formatCurrency(product.price)}</b> 
                        <button className="btn btn-primary" onClick={(e) => this.props.handleAddToCard(e, product)}>Add to card</button>
                    </div>
                </div>
            </div>
        )
        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}
