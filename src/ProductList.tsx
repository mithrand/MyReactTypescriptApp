/**
 * Created by Antonio on 21/02/2017.
 */
import * as React from 'react';
import Product from './Product';
import {Datos} from './Seed';

class ProductList extends  React.Component<{}, {}> {

    public render() {
        return (
            <div className="ui unstackable items">
            {
                // las llaves permiten ejecutar javascript dentro de codigo JSX
                Datos.getProducts().map( product =>
                    <Product
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        url={product.url}
                        votes={product.votes}
                        submitterAvatarUrl={product.submitterAvatarUrl}
                        productImageUrl={product.productImageUrl}
                    />
                    )
            }
            </div>
        );
    }
}

export default ProductList;
