import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CategoryPane extends Component {
    render() {
        const image = this.props.image;
        return <div className={this.props.selected ? 'category-pane category-pane-selected' : 'category-pane'}>
            <div className='category-chooser'>
                <div className="category-frame">
                    <div className="category-frame--img"
                         style={{backgroundImage : `url(../images/oracle/${image})`}}
                    ></div>
                    <div className="category-frame--text">{this.props.text}</div>
                </div>
                <div className="category-check">
                    <i className="fa fa-check"></i>
                </div>
            </div>
        </div>;
    }

}

CategoryPane.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool,
};

export default CategoryPane;