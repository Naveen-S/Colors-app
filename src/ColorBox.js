import React, { Component } from 'react'
import './ColorBox.css';

export default class ColorBox extends Component {
    render() {
        const {background, name } = this.props;
        return (
            <div style={{ backgroundColor: background }} className="ColorBox">
                <div className="ColorBox-copy-container">
                    <div className="color-name">
                        <span > {name} </span>
                    </div>
                    <button className="copy-button"> COPY </button>
                    <span className="see-more"> MORE </span>
                </div>
            </div>
        )
    }
}
