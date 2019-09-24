import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider';

import ColorBox from "./ColorBox";

import './Palette.css';
import 'rc-slider/assets/index.css';

export default class Palette extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             level: 500
        }
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level) {
        this.setState({level});
    }
    
    render() {
        const { colors } = this.props.palette;
        let { level } = this.state;  
        const colorBoxes = colors[level].map(color => {
            return <ColorBox background={color.hex} name={color.name} key={color.name} />
        });
        return (
            
            <div className="Palette">
                <div>
                    <Slider min={100} max={900} step={100} defaultValue={level} onAfterChange={this.changeLevel}/>
                </div>
                {/* navbar here */}
                {/* Color boxes */}
                <div className="Palette-colors"> 
                    {colorBoxes}                
                </div> 
                {/* Footer here */}
            </div>
        )
    }
}
