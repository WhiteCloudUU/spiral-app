import React from 'react';

export default class FastenerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: props.fastener ? props.fastener.size.toString() : '',
      length: props.fastener ? props.fastener.length.toString() : '',

      headType: props.fastener ? props.fastener.headType : '',
      driveType: props.fastener ? props.fastener.driveType : '',
      material: props.fastener ? props.fastener.material : '',

      thruHolePart: props.fastener ? props.fastener.thruHolePart : '',
      threadedHolePart: props.fastener ? props.fastener.threadedHolePart : '',

      quantity: props.fastener ? props.fastener.quantity.toString() : '1',

      error: ''
    };
  }

  onSizeChange = (e) => {
    const size = e.target.value;

    if (!size || size.match(/^\d{1,}(\.\d{0,1})?$/)) {
      this.setState(() => ({ size }));
    }
  };

  onLengthChange = (e) => {
    const length = e.target.value;

    if (!length || length.match(/^\d{1,2}$/)) {
      this.setState(() => ({ length }));
    }
  };

  onHeadTypeChange = (e) => {
    const headType = e.target.value;
    this.setState(() => ({ headType }));
  }

  onDriveTypeChange = (e) => {
    const driveType = e.target.value;
    this.setState(() => ({ driveType }));
  }

  onMaterialChange = (e) => {
    const material = e.target.value;
    this.setState(() => ({ material }));
  }

  onThruHolePartChange = (e) => {
    const thruHolePart = e.target.value;
    this.setState(() => ({ thruHolePart }));
  };

  onThreadedHolePartChange = (e) => {
    const threadedHolePart = e.target.value;
    this.setState(() => ({ threadedHolePart }));
  };

  onQuantityChange = (e) => {
    const quantity = e.target.value;

    if (!quantity || quantity.match(/^\d{1,}$/)) {
      this.setState(() => ({ quantity }));
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.size || !this.state.length || !this.state.headType
      || !this.state.driveType || !this.state.material) {
      this.setState(() => ({ error: 'Please fill out the missing fields.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        size: parseFloat(this.state.size),
        length: parseInt(this.state.length),
        headType: this.state.headType,
        driveType: this.state.driveType,
        material: this.state.material,
        thruHolePart: this.state.thruHolePart,
        threadedHolePart: this.state.threadedHolePart,
        quantity: parseInt(this.state.quantity)
      });
    }
  };
  render() {
    return (
      <div>
        <div className="page-summary">
          <button className="button" onClick={this.onSubmit}>
            Save Fastener
          </button>
        </div>

        <form className="form">
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <div className="form__box">
            <p className="form__title">Parameters</p>
            <input
              className="text-input"
              type="text"
              placeholder="Size (mm)"
              autoFocus
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

            <select
              className="select"
              value={this.state.headType}
              onChange={this.onHeadTypeChange}
            >
              <option value="" defaultValue disabled>
                --- Select Head Type ---
            </option>
              <option value="SH">Socket Head</option>
              <option value="RH">Rounded Head</option>
              <option value="FH">Flat Head</option>
            </select>

            <select
              className="select"
              value={this.state.driveType}
              onChange={this.onDriveTypeChange}
            >
              <option value="" defaultValue disabled>
                --- Select Drive Type ---
            </option>
              <option value="HX">Hex</option>
              <option value="TX">Torx</option>
              <option value="SL">Slotted</option>
              <option value="CS">Cruciform</option>
            </select>

            <select
              className="select"
              value={this.state.material}
              onChange={this.onMaterialChange}
            >
              <option value="" defaultValue disabled>
                --- Select Material ---
            </option>
              <option value="steel">Steel</option>
              <option value="stainless">Stainless Steel</option>
              <option value="plastic">Plastic</option>
            </select>

          </div>

          <div className="form__box">
            <p className="form__title">Description</p>
            <input
              type="text"
              className="text-input"
              placeholder="Thru Hole Part Name"
              value={this.state.thruHolePart}
              onChange={this.onThruHolePartChange}
            />

            <input
              type="text"
              className="text-input"
              placeholder="Thread Hole Part Name"
              value={this.state.threadedHolePart}
              onChange={this.onThreadedHolePartChange}
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
