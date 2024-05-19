# Device Type Detector for React and Next.js

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

#### Project Links:

<a href="https://www.npmjs.com/package/next-device-detection"> ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) </a>
<a href="https://github.com/nishantshah977/next-device-detection"> ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) </a>

# Installation

```
npm i next-device-detection
```

# Usage

It works by checking width of window. (Mobile, Tablet and Desktop)

```js
import useDeviceDetector from "next-device-detection";

function MyComponent() {
  const device = useDeviceDetector();

  return (
    <div>
      {device.isMobile && <p>Mobile device detected!</p>}
      {device.isTablet && <p>Tablet device detected!</p>}
      {device.isDesktop && <p>Desktop device detected!</p>}
    </div>
  );
}

export default MyComponent;
```

# Contributing

Help to improve this project by a PR. Feel free to open issue or submit an PR.
