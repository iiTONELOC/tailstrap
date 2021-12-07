# TailStrap

**_A component library for React.js + TailwindCSS_**

# COMING SOON

Designed to be fully customized, your sites won't look well, bootstrapped.

## Introduction

Tired of implementing boilerplate for buttons, tool-tips, modals, and toasts,
TailStrap aims to fill the gap in a reuseable component library for TailwindCSS + React.js.

## Requirements

TailStrap aims to be as light as possible and is designed to be integrated into your existing React + TailwindCSS projects
Make sure you have React.js and TailwindCSS installed prior to installation

## Installation

```
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
