# DropButton

**_A reusable button component with a dropdown_**  
_[Back](../TailStrap.MD)_

## Default Behavior

The make up of the component changes slightly upon its use but it is a TailStrap `<Button/>` component at its core.  
The default mark-up is an HTML `<button>` element that drops an unordered list `<ul>`.  
When passing children, we drop a `<div>` instead.  
The dropped element is the same width as the `<Button />` by default but can be overridden.  
`<DropButton/>` provides all of the [`<Button/>` component's sizes and variants for quick prototyping.](./Button.MD)

Default Drop Classes:  
 For the `<ul>` the default classes are:  
 `bg-gray-300 absolute mt-2 rounded-md shadow-lg gap-2 z-50`

For the `<div>` the default classes are:  
 `flex flex-col items-center bg-gray-300 absolute mt-2 rounded-md shadow-lg gap-2 z-50 p-1 hover:shadow-xl`

## Import

```js
import { DropButton } from "tailstrap";
```

## Component Properties

### **_`props`_**: object

Takes any valid React or HTML prop and passes to the base element  
 _Note:_ _when passing href, the `<button>` element becomes an HTML `<a>` tag_  
 _`target` and `rel` attributes default to `'_blank'` and `'noopener noreferrer'` but can be overridden by passing your own_

### **_`type`_**: string

default: button
button | submit | reset

### **_`label`_**: string

Text to be rendered.  
default: `Click Me`

_\* **Note**: If Children are present, they get passed to the drop `<div>` and not to the `<Button/>` component_

```js
<DropButton label="Click me, I am a button!">
  You Clicked the Button!
</DropButton>
```

### **_`size`_**: string

| Prop    | Tailwind Class Equivalent |
| ------- | ------------------------- |
| xs      | text-xs                   |
| sm      | text-sm                   |
| md      | text-base                 |
| lg      | text-lg                   |
| xl      | text-xl                   |
| 2xl     | text-2xl                  |
| 3xl     | text-3xl                  |
| 4xl     | text-4xl                  |
| 5xl     | text-5xl                  |
| 6xl     | text-6xl                  |
| 7xl     | text-7xl                  |
| 8xl     | text-8xl                  |
| 9xl     | text-9xl                  |
| default | text-lg                   |

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

### **_`dropItems`_**: Array of Objects

The dropItem prop can take all the the props for the `<DropButtonItem/>` Component. Which is an internal component used by `<DropButton/>` that you have full control over and is returned only when utilizing the dropItems property.

- name: string
  - Text to be displayed in the unordered list
- props: object
- override: boolean
  - can be used to override individual item styles
- className: string
  - valid TailwindCSS classes
- child: any valid HTML or React element
  - can be used when you need to render a component

_**example usage :**_

```js
import { Page, Button, DropButton } from "tailstrap";

const dropItemData = [
  { name: "Item 1" },
  { name: "Visit Google", props: { href: "https://google.com" } },
  {
    child: (
      <Button
        label="Click me"
        props={{ onClick: () => alert("You Clicked the button!") }}
      />
    ),
  },
];
export default function MyComponent() {
  return (
    <Page variant="center" className="bg-gray-500">
      <DropButton
        label="Drop Button"
        dropItems={dropItemData}
        variant="success"
      />
    </Page>
  );
}
```

### **_`className`_**: string

_**IMPORTANT**:_  
_Applies to `<Button/>` Only_

_**Adds to existing styles unless overridden**_  
 Any valid TailwindCSS class  
In Most Cases the default classes will have to be overridden for custom buttons

### **_`override`_**: boolean

_**IMPORTANT**:_  
_Applies to `<Button/>` Only_

Default: false  
If you need to override the default styles:

```js
<DropButton override={true} />
```

## Overriding default behavior

All component styles can be overridden by one of two ways.

Default behavior is to concatenate the class names passed to the _`className`_ property with the existing classes.  
To override the default behavior pass the _`override={true}`_ property when calling the component:

1. Add to base styles:  
    same example from above except we want a larger button and the drop items centered

   ```js
   export default function MyComponent() {
     return (
       <Page variant="center" className="bg-gray-500">
         <DropButton
           className="w-96"
           variant="success"
           label="Drop Button"
           dropItems={dropItemData}
           dropListClassName="text-center"
         />
       </Page>
     );
   }
   ```

   There are additional props that allow certain customization without overriding the component completely.

   **_`dropListClassName`_**: string

   _Use when utilizing the dropItems property_

   Applies styles to the `<ul>`.

   **_`dropItemClassName`_**: string

   _Use when utilizing the dropItems property_

   Applies styles to all the `<li>` in the drop.

   **_`dropContainerClassName`_**: string

   _Use when passing children_

   Applies styles to the `<div>`.

   **_`dropElWidth`_**: string

   _NOTE:_  
    _The dropped container is centered with the button and not on the button._

   _Overriding the default width and its behavior should only be done when absolutely necessary._

   - dynamic
     - sets the drop elements minWidth to the width of the button
   - auto
     - removes CSS width or minWidth properties

2. Override completely

   _Note:_ _when overriding default classes the size prop is removed as well_  
    _`className`_ is required or the component defaults

   **_`dropListOverride`_**: boolean

   _Use when utilizing the dropItems property_

   **_`dropItemOverride`_**: boolean

   _Use when utilizing the dropItems property_

   Removes base styles from all the `<li>` in the drop.

   **_`dropContainerOverride`_**: boolean

   _Use when passing children_

   Removes base styles from the `<div>`.

   ```js
   import { Page, DropButton, Button } from "../../lib";

   const dropData = [
     { name: "Item 1" },
     { name: "Visit Google", props: { href: "https://google.com" } },
     { child: <Button label="Click me" size="sm" /> },
   ];
   export default function TestPage() {
     return (
       <Page variant="center">
         <DropButton
           label="Drop Button"
           dropItems={dropData}
           dropListOverride={true}
           dropItemOverride={true}
           variant="danger-outline"
           dropListClassName="bg-gray-700 mt-6 rounded-lg p-2 text-center"
           dropItemClassName="text-gray-300 hover:text-emerald-500"
         />
       </Page>
     );
   }
   ```
