# Nav.Item Component

**_An Item in a Navigation component_**  
_[Back](../TailStrap.MD)_

## Default Behavior

The `<Nav.Item />` component is designed to be used with the [Nav.Bar](./Nav.Bar.MD) and offers two default behaviors depending on its use. The component is designed to be part of a list and returns an HTML `<li>` with an anchor `<a>` tag as its child or a `<li>` containing the child passed to the component.

Default Classes:  
`<li>`: `hover:text-blue-500 text-black cursor-pointer`  
`<a>`: `p-1 font-medium`

## Import

```js
import { Nav } from "tailstrap";

function myComponent() {
  return (
      <Nav.Item name="This is a Nav Item" />;
  );
};
```

## Component Properties

- ### **_`name`_**: string

  Name to be displayed when not rendering children

  ```js
  <Nav.Item name="About" />
  ```

- ### **_`props`_**: object

  Takes any valid HTML or React Prop and passes them to the base HTML element:

  ```js
  <Nav.Item props={{ onClick: () => alert(`You clicked the Nav Item!`) }} />
  ```

- ### **_`active`_**: string

  default: `text-blue-500 underline underline-offset-8`

  Replace the default active classes with your own.

  The active classes are applied when the `name` property matches the window's current pathname or when the `Nav.Item` href matches with the windows.

  The active classes, default or otherwise, are removed when overriding the component.

  ```js
  <Nav.Item name="About" active="text-emerald-500" />
  ```

- ### **_`className`_**: string

  _Note:_ _classNames do not apply to children_
  _**Adds to existing styles unless overridden**_  
   Any valid TailwindCSS className

  ```js
  <Nav.Item name="Home" className="text-orange-500" />
  ```

- ### **_`override`_**: boolean

  All component styles can be overridden by one of two ways.

  Default behavior is to concatenate the class names passed to the `className` property with the existing classes. To override the default behavior pass the `override={true}` property when calling the component:

  _NOTE: override removes all default component behavior including active styles_

  1. Add to base styles

     ```js
     <Nav.Item name="Home" className="text-orange-500" />
     ```

  2. Override completely

     ```js
     <Nav.Item
       name="Home"
       override={true}
       className="text-orange-500 hover:text-blue-500"
     />
     ```

- ### **_`overrideOpener`_**: boolean

  By default, links will open in a new tab. If linking internally, you can use this property to override the behavior.

  ```js
  <Nav.Item
    name="Home"
    overrideOpener={true}
    props={{ href: "https://mysite.com/home" }}
  />
  ```
