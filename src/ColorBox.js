import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             copied: false
        }
        this.copyHandler = this.copyHandler.bind(this);
    }

    copyHandler() {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500);
        })
    }
    
    render() {
        const {background, name } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.copyHandler}>
                <div style={{ backgroundColor: background }} className="ColorBox">
                <div style={{ backgroundColor: background }} className={`ColorBox-copy-overlay ${copied && 'show'}`} />
                <div className={`ColorBox-copy-overlay-msg ${copied && 'show'}`}>
                    <h1> copied!</h1>
                    <p> { background }</p>
                </div>
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