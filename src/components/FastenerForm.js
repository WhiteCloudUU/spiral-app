import React from 'react';

export default class FastenerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: props.fastener ? props.fastener.size : '',
      length: props.fastener ? props.fastener.length : '',

      headType: props.fastener ? props.fastener.headType : '',
      driveType: props.fastener ? props.fastener.driveType : '',
      material: props.fastener ? props.fastener.material : '',

      thruHolePart: props.fastener ? props.fastener.thruHolePart : '',
      threadedHolePart: props.fastener ? props.fastener.threadedHolePart : '',

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

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.size || !this.state.length || !this.state.headType
      || !this.state.driveType || !this.state.material) {
      this.setState(() => ({ error: 'Please fill out all missing fields.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        size: this.state.size,
        length: this.state.length,
        headType: this.state.headType,
        driveType: this.state.driveType,
        material: this.state.material,
        thruHolePart: this.state.thruHolePart,
        threadedHolePart: this.state.threadedHolePart
      });
    }
  };
  render() {
    return (
        <form onSubmit={this.onSubmit}>

          {this.state.error && <p>{this.state.error}</p>}

          <input
            type="text"
            placeholder="Size (mm)"
            autoFocus
            value={this.state.size}
            onChange={this.onSizeChange}
          />

          <input
            type="text"
            placeholder="Length (mm)"
            value={this.state.length}
            onChange={this.onLengthChange}
          />

          <select
            value={this.state.headType}
            onChange={this.onHeadTypeChange}
          >
            <option value="" defaultValue disabled hidden>
              --- Select head type ---
            </option>
            <option value="SH">Socket Head</option>
            <option value="RH">Rounded Head</option>
            <option value="FH">Flat Head</option>
            
          </select>

          <select
            value={this.state.driveType}
            onChange={this.onDriveTypeChange}
          >
            <option value="" defaultValue disabled hidden>
              --- Select drive type ---
            </option>
            <option value="HX">Hex</option>
            <option value="TX">Torx</option>
            <option value="SL">Slotted</option>
            <option value="CS">Cruciform</option>
          </select>

          <select
            value={this.state.material}
            onChange={this.onMaterialChange}
          >
            <option value="" defaultValue disabled hidden>
              --- Select material ---
            </option>
            <option value="steel">Steel</option>
            <option value="stainless">Stainless Steel</option>
            <option value="plastic">Plastic</option>
          </select>

          <input
            type="text"
            placeholder="Thru Hole Part Name"
            value={this.state.thruHolePart}
            onChange={this.onThruHolePartChange}
          />

          <input
            type="text"
            placeholder="Thread Hole Part Name"
            value={this.state.threadedHolePart}
            onChange={this.onThreadedHolePartChange}
          />

          <div>
            <button>Add Fastener</button>
          </div>

        </form>
    )
  }
}
