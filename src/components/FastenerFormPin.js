import React from 'react';

export default class FastenerFormPin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: props.fastener ? props.fastener.size.toString() : '',
      length: props.fastener ? props.fastener.length.toString() : '',

      partA: props.fastener ? props.fastener.partA : '',
      partB: props.fastener ? props.fastener.partB : '',

      quantity: props.fastener ? props.fastener.quantity.toString() : '1',

      error: ''
    };
  }

  onSizeChange = (e) => {
    const size = e.target.value;

    if (!size || size.match(/^\d{1,2}(\.\d{0,1})?$/)) {
      this.setState(() => ({ size }));
    }
  };

  onLengthChange = (e) => {
    const length = e.target.value;

    if (!length || length.match(/^\d{1,}$/)) {
      this.setState(() => ({ length }));
    }
  };

  onPartAChange = (e) => {
    const partA = e.target.value;
    this.setState(() => ({ partA }));
  };

  onPartBChange = (e) => {
    const partB = e.target.value;
    this.setState(() => ({ partB }));
  };

  onQuantityChange = (e) => {
    const quantity = e.target.value;

    if (!quantity || quantity.match(/^\d{1,}$/)) {
      this.setState(() => ({ quantity }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    
    if (!this.state.size || !this.state.length || !this.state.quantity) {
      this.setState(() => ({ error: 'Please fill out the missing fields!' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        size: parseFloat(this.state.size),
        length: parseInt(this.state.length),
        
        partA: this.state.partA,
        partB: this.state.partB,
        quantity: parseInt(this.state.quantity),
        project: this.props.project
      });
    }
  };

  render() {
    return (
      <div>
        {
          !!this.props.onRemoveFastener ?
            (
              <div className="double-button">
                <div>
                  <button
                    className="button"
                    onClick={this.props.onRemoveFastener}
                  >
                    Remove Fastener
                </button>
                </div>

                <div>
                  <button className="button" onClick={this.onSubmit}>
                    Save Fastener
                </button>
                </div>
              </div>
            )
            :
            (
              <div className="single-button">
                <button className="button" onClick={this.onSubmit}>
                  Save Fastener
              </button>
              </div>
            )
        }

        {this.state.error && <p className="form__error">{this.state.error}</p>}

        <form className="form">

          <div className="form__box">
            <p className="form__title">Parameters</p>
            <input
              className="text-input"
              type="text"
              placeholder="Size (mm)"
              value={this.state.size}
              onChange={this.onSizeChange}
            />

            <input
              className="text-input"
              type="text"
              placeholder="Length (mm)"
              value={this.state.length}
              onChange={this.onLengthChange}
            />

          </div>

          <div className="form__box">
            <p className="form__title">Description</p>
            <input
              type="text"
              className="text-input"
              placeholder="Part A"
              value={this.state.partA}
              onChange={this.onPartAChange}
            />

            <input
              type="text"
              className="text-input"
              placeholder="Part B"
              value={this.state.partB}
              onChange={this.onPartBChange}
            />
          </div>

          <div className="form__box">
            <p className="form__title">Quantity</p>
            <input
              type="text"
              className="text-input"
              placeholder="Quantity"
              value={this.state.quantity}
              onChange={this.onQuantityChange}
            />
          </div>

        </form>

      </div>
    )
  }
}
