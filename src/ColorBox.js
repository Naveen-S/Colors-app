import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {
    render() {
        const {background, name } = this.props;
        return (
            <CopyToClipboard text={background}>
                <div style={{ backgroundColor: background }} className="ColorBox">
                    <div className="ColorBox-copy-container">
                        <div className="color-name">
                            <span > {name} </span>
                        </div>
                        <button className="copy-button"> COPY </button>
                        <span className="see-more"> MORE </span>
                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}