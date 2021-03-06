# TailStrap

**_A component library for React.js + TailwindCSS_**

## COMING SOON

Designed to be fully customized, your sites won't look well, bootstrapped.

## Introduction

Tired of implementing boilerplate for buttons, tool-tips, modals, and toasts,
TailStrap aims to fill the gap in a reuseable component library for TailwindCSS + React.js.

## Requirements

TailStrap aims to be as light as possible and is designed to be integrated into your existing React + TailwindCSS projects  
Make sure you have React.js and TailwindCSS installed prior to installation

## Installation

```md
    npm i tailstrap
```

## Overriding Default Component Behavior

Default behavior is to concatenate the class names passed to the `className` property with the existing classes. To override the default behavior pass the `override={true}` property when calling the component:

All component styles can be overridden by one of two ways.

1. Add to base styles

   ```js
   <Page className="bg-gray-800" />
   ```

2. Override completely

   ```js
   <Page className="container mx-auto" override={true} />
   ```

## Documentation

[Go To Documentation](./documentation/TailStrap.MD)

## License

MIT License

Copyright (c) 2021 Anthony Tropeano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
