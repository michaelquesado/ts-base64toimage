[![Build Status](https://travis-ci.org/michaelquesado/ts-base64-to-image.svg?branch=master)](https://travis-ci.org/michaelquesado/ts-base64-to-image)
[![Coverage Status](https://coveralls.io/repos/github/michaelquesado/ts-base64-to-image/badge.svg?branch=master)](https://coveralls.io/github/michaelquesado/ts-base64-to-image?branch=master)

# passBase64ToImage

You can easy pass a string base64 to a image.

## Installation

Use the package manager npm to install.

```bash
npm install ts-base64toimage
```

## Usage

```typescript
import { passBase64 } from 'ts-base64toimage'

passBase64.toImage('your_base64', 
  {
    path: string
    fileName?: string
    fileExtension?: 'png' | 'jpg' | 'jpeg'
  }
)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)