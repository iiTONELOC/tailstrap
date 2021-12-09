# Button

**_A reusable button component_**

## Default Behavior

The `<Button />` component is a `<button>` HTML element at its core and provides multiple defaults for quick prototyping.  
Like all of our components `<Button>` can be built on top of or stripped down and fully customized.

Default Classes:  
 The default classes depend on props such as _`size`_ and _`variant`_.

# Component Props

### **_`size`_**: string

| Prop    | Tailwind Class Equivalent | CSS Properties       |
| ------- | ------------------------- | -------------------- |
| xs      | text-xs                   | font-size: 0.75rem   |
|         |                           | line-height: 1rem    |
| sm      | text-sm                   | font-size: 0.875rem  |
|         |                           | line-height: 1.25rem |
| md      | text-base                 | font-size: 1rem      |
|         |                           | line-height: 1.5rem  |
| lg      | text-lg                   | font-size: 1.125rem  |
|         |                           | font-size: 1.75rem   |
| xl      | text-xl                   | font-size: 1.25rem   |
|         |                           | font-size: 1.75rem   |
| 2xl     | text-2xl                  | font-size: 1.5rem    |
|         |                           | font-size: 2rem      |
| 3xl     | text-3xl                  | font-size: 1.875rem  |
|         |                           | font-size: 2.25rem   |
| 4xl     | text-4xl                  | font-size: 2.25rem   |
|         |                           | font-size: 2.5rem    |
| 5xl     | text-5xl                  | font-size: 3rem      |
|         |                           | font-size: 1         |
| 6xl     | text-6xl                  | font-size: 3.75rem   |
|         |                           | font-size: 1         |
| 7xl     | text-7xl                  | font-size: 4.5rem    |
|         |                           | font-size: 1         |
| 8xl     | text-8xl                  | font-size: 6rem      |
|         |                           | font-size: 1         |
| 9xl     | text-9xl                  | font-size: 8rem      |
|         |                           | font-size: 1         |
| default | text-lg                   | font-size: 1.125rem  |
|         |                           | font-size: 1.75rem   |

### **_`variant`_**: string

| Prop            | Tailwind Class Equivalents              | CSS Properties                                              |
| --------------- | --------------------------------------- | ----------------------------------------------------------- |
| success         | bg-green-500                            | background-color: rgba(16, 185, 129, var(--tw-bg-opacity))  |
|                 | hover:bg-green-700                      | background-color: rgba(4, 120, 87, var(--tw-bg-opacity))    |
|                 | text-white                              | color: rgba(255, 255, 255, var(--tw-text-opacity))          |
| danger          | bg-red-600                              | background-color: rgba(220, 38, 38, var(--tw-bg-opacity))   |
|                 | hover:bg-red-700                        | background-color: rgba(185, 28, 28, var(--tw-bg-opacity))   |
|                 | text-white                              | color: rgba(255, 255, 255, var(--tw-text-opacity))          |
| warning         | bg-yellow-400                           | background-color: rgba(251, 191, 36, var(--tw-bg-opacity))  |
|                 | hover:bg-yellow-500                     | background-color: rgba(245, 158, 11, var(--tw-bg-opacity))  |
|                 | text-black                              | color: rgba(0, 0, 0, var(--tw-text-opacity))                |
| info            | bg-blue-400                             | background-color: rgba(96, 165, 250, var(--tw-bg-opacity))  |
|                 | hover:bg-blue-500                       | background-color: rgba(37, 99, 235, var(--tw-bg-opacity))   |
|                 | text-white                              | color: rgba(255, 255, 255, var(--tw-text-opacity))          |
| light           | bg-gray-200                             | background-color: rgba(229, 231, 235, var(--tw-bg-opacity)) |
|                 | hover:bg-gray-400                       | background-color: rgba(156, 163, 175, var(--tw-bg-opacity)) |
|                 | text-black                              | color: rgba(0, 0, 0, var(--tw-text-opacity))                |
| dark            | bg-gray-900                             | background-color: rgba(17, 24, 39, var(--tw-bg-opacity))    |
|                 | bg-gray-800                             | background-color: rgba(31, 41, 55, var(--tw-bg-opacity))    |
|                 | text-white                              | color: rgba(255, 255, 255, var(--tw-text-opacity))          |
| default         | "bg-blue-600                            | background-color: rgba(37, 99, 235, var(--tw-bg-opacity))   |
|                 | hover:bg-blue-700                       | background-color: rgba(29, 78, 216, var(--tw-bg-opacity))   |
|                 | text-white                              | color: rgba(255, 255, 255, var(--tw-text-opacity))          |
| success-outline | border-2 border-green-500               |                                                             |
|                 | hover:border-green-700 text-green-500   |                                                             |
|                 | hover:text-white hover:bg-green-500     |                                                             |
| danger-outline  | border-2 border-red-500                 |                                                             |
|                 | hover:border-red-700 text-red-500       |                                                             |
|                 | hover:text-white hover:bg-red-500       |                                                             |
| warning-outline | border-2 border-yellow-400              |                                                             |
|                 | hover:border-yellow-500 text-yellow-400 |                                                             |
|                 | hover:text-white hover:bg-yellow-400    |                                                             |
| info-outline    | border-2 border-blue-400                |                                                             |
|                 | hover:border-blue-500 text-blue-400     |                                                             |
|                 | hover:text-white hover:bg-blue-400      |                                                             |
| light-outline   | border-2 border-gray-200                |                                                             |
|                 | hover:border-gray-400 text-gray-100     |                                                             |
|                 | hover:text-black hover:bg-gray-400      |                                                             |
| dark-outline    | border-2 border-gray-900                |                                                             |
|                 | hover:border-gray-700 text-gray-900     |                                                             |
|                 | hover:text-white hover:bg-gray-900      |                                                             |

### **_`className`_**: string

CSS/TailwindCSS classes

### **_`type`_**: string

default: button
button | submit | reset

### **_`override`_**: boolean

Default: false  
If you need to override the default styles:

```js
<Button override={true} />
```

### **_`props`_**: object

Takes any valid React or HTML prop and passes to the base element  
 _Note:_ _when passing href, the `<button>` element becomes an HTML `<a>` tag_  
 _`target` and `rel` attributes default to `'_blank'` and `'noopener noreferrer'` but can be overridden by passing your own_

### _`example component: submit button with click handler`_

```js
<Button variant="success" size="2xl">
  Submit
</Button>
```

## Overriding default behavior

All component styles can be overridden by one of two ways.

Default behavior is to concatenate the class names passed to the _`className`_ property with the existing classes. To override the default behavior pass the _`override={true}`_ property when calling the component:

1. Add to base styles

```js
<Button variant="dark" size="2xl" className="w-24">
  Click Me I am a Button!
</Button>
```

2. Override completely  
   _Note:_ _when overriding default classes the size prop is removed as well_  
   _`className`_ is required or the component defaults

```js
<Button className="p-3 text-4xl w-14 bg-600" override={true} />
```
