# Button

**_A reusable button component_**

## Default Behavior

The `<Button />` component is a `<button>` HTML element at its core and provides multiple defaults for quick prototyping.  
Like all of our components `<Button>` can be built on top of or stripped down and fully customized.

Default Classes:  
 The default classes depend on props such as _`size`_ and _`variant`_.

## Component Props

### **_`size`_**: string

| Prop    | Tailwind Class Equivalent |
| ------- | ------------------------- |
| xs      | text-xs                   |
|         |                           |
| sm      | text-sm                   |
|         |                           |
| md      | text-base                 |
|         |                           |
| lg      | text-lg                   |
|         |                           |
| xl      | text-xl                   |
|         |                           |
| 2xl     | text-2xl                  |
|         |                           |
| 3xl     | text-3xl                  |
|         |                           |
| 4xl     | text-4xl                  |
|         |                           |
| 5xl     | text-5xl                  |
|         |                           |
| 6xl     | text-6xl                  |
|         |                           |
| 7xl     | text-7xl                  |
|         |                           |
| 8xl     | text-8xl                  |
|         |                           |
| 9xl     | text-9xl                  |
|         |                           |
| default | text-lg                   |
|         |                           |

### **_`variant`_**: string

| Prop            | Default Class Names                     |
| --------------- | --------------------------------------- |
| success         | bg-green-500                            |
|                 | hover:bg-green-700                      |
|                 | text-white                              |
| danger          | bg-red-600                              |
|                 | hover:bg-red-700                        |
|                 | text-white                              |
| warning         | bg-yellow-400                           |
|                 | hover:bg-yellow-500                     |
|                 | text-black                              |
| info            | bg-blue-400                             |
|                 | hover:bg-blue-500                       |
|                 | text-white                              |
| light           | bg-gray-200                             |
|                 | hover:bg-gray-400                       |
|                 | text-black                              |
| dark            | bg-gray-900                             |
|                 | bg-gray-800                             |
|                 | text-white                              |
| default         | "bg-blue-600                            |
|                 | hover:bg-blue-700                       |
|                 | text-white                              |
| success-outline | border-2 border-green-500               |
|                 | hover:border-green-700 text-green-500   |
|                 | hover:text-white hover:bg-green-500     |
| danger-outline  | border-2 border-red-500                 |
|                 | hover:border-red-700 text-red-500       |
|                 | hover:text-white hover:bg-red-500       |
| warning-outline | border-2 border-yellow-400              |
|                 | hover:border-yellow-500 text-yellow-400 |
|                 | hover:text-white hover:bg-yellow-400    |
| info-outline    | border-2 border-blue-400                |
|                 | hover:border-blue-500 text-blue-400     |
|                 | hover:text-white hover:bg-blue-400      |
| light-outline   | border-2 border-gray-200                |
|                 | hover:border-gray-400 text-gray-100     |
|                 | hover:text-black hover:bg-gray-400      |
| dark-outline    | border-2 border-gray-900                |
|                 | hover:border-gray-700 text-gray-900     |
|                 | hover:text-white hover:bg-gray-900      |

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
<Button
  variant="success"
  size="2xl"
  props={{
    onSubmit: (e) => {
      handleSubmit(e);
    },
    onMouseEnter: () => {
      console.log(`Mouse Entered!`);
    },
  }}
>
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
