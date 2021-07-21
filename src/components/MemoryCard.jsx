import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCardBack extends React.Component {
    render() {
        let memoryCardInnerClass = this.props.isFlipped 
            ? "MemoryCardInner flipped" 
            : "MemoryCardInner";
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img className="Logo" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="DC Logo"></img>
                    </div>
                    <div className="MemoryCardFront">
                        <p>{this.props.symbol}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default MemoryCardBack;