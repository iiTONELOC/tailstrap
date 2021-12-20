# Label

**_A reusable component for pills_**  
_[Back](../TailStrap.MD)_

## Default Behavior

The `<Label/>` component is a `<span>` HTML element at its core and provides multiple defaults for quick prototyping.  
Like all of our components `<Label/>` can be built on top of or stripped down and fully customized.

Default Classes:  
 The default classes depend on props such as _`size`_ and _`variant`_.

## Import

```js
import { Label } from "tailstrap";
```

## Component Properties

### **_`props`_**: object

Takes any valid React or HTML prop and passes to the base element  
 _Note:_ _when passing href, the `<span>` element becomes an HTML `<a>` tag_  
 _`target` and `rel` attributes default to `'_blank'` and `'noopener noreferrer'` but can be overridden by passing your own_

- **_`as`_**: string

  Any valid HTML element

  ```js
  <Label props={{ as: "div" }} />
  ```

### **_`label`_**: string

Text to be rendered if not passing children

```js
<Label label="This is a label" />
```

### **_`rounded`_**: string

Change the default rounded styles without having to override the component.  
Utilizes tailwindcss rounded classes:

[Tailwind CSS Docs](https://tailwindcss.com/docs/border-radius#rounded-corners)

```js
<Label label="Can't click me, I am a label!" rounded="rounded-xl" />
```

### **_`background`_**: string

Add your own background color without overriding the component.

Utilizes tailwindcss background color properties:

[Tailwind CSS Docs](https://tailwindcss.com/docs/background-color)

```js
<Label label="I'm a label!" background="bg-teal-500" />
```

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
|                 | hover:text-black hover:bg-yellow-400    |
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

_**Adds to existing styles unless overridden**_  
 Any valid TailwindCSS class  
In Most Cases the default classes will have to be overridden for custom buttons

### **_`override`_**: boolean

Default: false  
If you need to override the default styles:

```js
<Label override={true} />
```

## _`example`_

```js
import { Page, Label, Box } from "tailstrap";
export default function MyComponent() {
  const sizes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "8xl",
    "9xl",
  ];
  return (
    <Page variant="center" className="bg-gray-500 overflow-y-auto">
      <Box
        variant="row"
        className="gap-8 bg-black w-full h-full justify-center 
            items-center p-5"
      >
        {sizes.map((size) => (
          <Label
            key="size"
            size={size}
            variant="danger"
            label={size + " Badge"}
          />
        ))}
      </Box>
    </Page>
  );
}
```

## Overriding default behavior

All component styles can be overridden by one of two ways.

Default behavior is to concatenate the class names passed to the _`className`_ property with the existing classes.  
To override the default behavior pass the _`override={true}`_ property when calling the component:

1. Add to base styles

   ```js
   <Label variant="dark" size="2xl">
     I am a label!
   </Label>
   ```

2. Override completely

   _Note:_ _when overriding default classes the size prop is removed as well_  
    _`className`_ is required or the component defaults

   ```js
   <Label
     override={true}
     className="bg-gray-700 p-2 rounded-lg text-gray-300 hover:bg-gray-500"
   >
     I am a label
   </Label>
   ```
