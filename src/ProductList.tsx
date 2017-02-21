/**
 * Created by Antonio on 21/02/2017.
 */
import * as React from 'react';
import Product from './Product';
import {Datos, IProduct} from './Seed';

const productos = Datos.getProducts();

class ProductList extends  React.Component<{}, {}> {

    private product: IProduct = productos[0];

    public render() {
        return (
            <div className="ui unstackable items">
               <Product
                   id={this.product.id}
                   title={this.product.title}
                   description={this.product.description}
                   url={this.product.url}
                   votes={this.product.votes}
                   submitterAvatarUrl={this.product.submitterAvatarUrl}
                   productImageUrl={this.product.productImageUrl}
               />
            </div>
        );
    }
}

export default ProductList;
