# Gettings Started

rn-easy-components is package for simple/easy custom component react-native

## Installation

visit this package at [npmjs](https://www.npmjs.com/package/rn-easy-components) to install/show the doc.

```bash
npm i rn-easy-components --save
```

## Usage

```python
import React from 'react';
import {
    Text
} from 'react-native';
import { Container, Button, SweetAlert } from 'rn-easy-components';
class MyApp extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <Container style={{ justifyContent: 'center' }}>
                <SweetAlert 
                    type="danger" # danger|info|warning
                    visible={this.state.visible} # true|false -> value for hide/show
                    title="Warning!"
                    textDescription="Entah apa yang merasukimu"
                    onCancel={() => this.setState({ visible: false }) } # remove this line for hide cancel button
                    onConfirm={() => this.setState({ visible: false }) }

                /> 
                <Button style={{ alignSelf: 'center' }} onPress={() => this.setState({ visible: true }) }>
                    <Text style={{ color: 'white' }}>button</Text>
                </Button> 
            </Container>
        );
    }
}

export default MyApp;
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)