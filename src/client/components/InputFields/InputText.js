import React from 'react';
import TextField from '@material-ui/core/TextField';

class InputText extends React.Component {
  render() {
    const { inputData } = this.props;

    return (
        <TextField
          id="filled-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />
    );
  }
}

export default InputText;
