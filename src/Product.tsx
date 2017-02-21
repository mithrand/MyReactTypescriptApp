/**
 * Created by Antonio on 21/02/2017.
 */
import * as React from 'react';
import {IProduct} from './Seed';

class Product extends  React.Component<IProduct, {}> {

    private producto: IProduct;

    constructor(props: IProduct) {
        super(props);
        this.producto = props;
    }

    public render () {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.productImageUrl} />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        <a>
                            <i className="large caret up icon" />
                        </a>
                        {this.props.votes}
                    </div>
                    <div className="description">
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img
                            className="ui avatar image"
                            src={this.props.submitterAvatarUrl}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;