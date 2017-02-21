/**
 * Created by Antonio on 21/02/2017.
 */
import * as React from 'react';
import Product from './Product';

class ProductList extends  React.Component<{}, {}> {

    public render() {
        return (
            <div className="ui unstackable items">
               <Product />
            </div>
        );
    }
}

export default ProductList;
