# Nav.Bar Component

**_A Navigation component_**  
_[Back](../TailStrap.MD)_

## Default Behavior

The `<Nav.Bar/>` component is designed to be used with the [Nav.Item](./Nav.Item.MD) and is an HTML `<nav>` tag that contains an `<ul>`. `<Nav.Bar>` is responsive and hides its children on mobile screens. All default behavior can be overridden.  
Default Classes:  
`p-1 flex flex-wrap flex-row justify-start w-full`

## Import

```js
import { Nav } from "tailstrap";

function myComponent() {
  return <Nav.Bar />;
}
```

## Component Properties

- ### **_`props`_**: object

  Takes any valid HTML or React Prop and passes them to the base HTML element:

  ```js
  <Nav.Bar props={{ onClick: () => alert(`You clicked the Nav Item!`) }} />
  ```

- ### **_`spacing`_**: string

  default: `gap-2`

  Replace the default spacing on the `<ul>` within the `<nav>`.

  ```js
  <Nav.Bar spacing="gap-4" />
  ```

- ### **_`variant`_**: string

  **left - Default Selection**:

  _Default Classes_ : `p-1 flex flex-wrap flex-row justify-start w-full`

  ```js
  <Nav.Bar />;

  OR

  <Nav.Bar variant="left" />;
  ```

  **right**:

  _Default Classes_ : `p-1 flex flex-wrap flex-row justify-end w-full`

  ```js
  <Nav.Bar variant="right" />
  ```

  **center**:

  _Default Classes_ : `p-1 flex flex-wrap flex-row justify-center w-full`

  ```js
  <Nav.Bar variant="center" />
  ```

- ### **_`className`_**: string

  _**Adds to existing styles unless overridden**_  
   Any valid TailwindCSS className

  ```js
  <Nav.Bar className="bg-gray-700" />
  ```

- ### **_`navItems`_**: Array of objects

  _Note:_ _use the properties of the [Nav.Item](./Nav.Item.MD) component when generating the Array_

  - name: string
  - children: any HTML or React Elements
  - props: object
  - active: string
  - override: boolean
  - className: string
  - overrideOpener: boolean

  ```js
  const navItemData = [
    {
      name: "Item 1",
    },
    {
      name: "Visit Google",
      props: { href: "https://google.com" },
    },
    {
      children: <Button label="Item 3" />,
    },
  ];

  function NavBar() {
    return (
      <Nav.Bar
        variant="right"
        spacing="gap-4 p-2"
        navItems={navData}
        className="bg-green-500 border-b-2 border-indigo-600 p-5"
      />
    );
  }
  ```

  Example using the `<Button/>` components as a children.

  ```js
  import { Page, Nav, Button } from "tailstrap";

  const navData = [
    {
      name: "Item 1",
      props: { href: "https://google.com" },
    },
    {
      name: "Visit Google",
      props: { href: "https://google.com" },
    },
    {
      name: "Item 3",
      props: { href: "https://google.com" },
    },
  ];
  function TestPage() {
    return (
      <Page variant="start-center" className="bg-gray-400">
        <Nav.Bar
          variant="right"
          spacing="gap-y-4 p-2"
          className="bg-green-500 p-2 border-b-2 border-indigo-600"
        >
          {navData.map((item) => (
            <Nav.Item key={item.name}>
              <Button
                variant="success"
                label={item.name}
                props={item.props}
                className="text-gray-300 hover:text-blue-600 bg-none"
              />
            </Nav.Item>
          ))}
        </Nav.Bar>
      </Page>
    );
  }
  ```

- ### **_`override`_**: boolean

  All component styles can be overridden by one of two ways.

  Default behavior is to concatenate the class names passed to the `className` property with the existing classes. To override the default behavior pass the `override={true}` property when calling the component:

  _NOTE: does not override the Nav.Item defaults_

  1. Add to base styles

     ```js
     <Nav.Bar className="bg-orange-500" />
     ```

  2. Override completely

     ```js
     <Nav.Bar
       name="Home"
       override={true}
       className="text-orange-500 hover:text-blue-500"
     />
     ```

- ### **_`overrideResponsiveNav`_**: boolean

  By default, the component hides its children on mobile screens. To override this behavior use the `overrideResponsiveNav={true}` property.

  ```js
  function myComponent() {
    return (
      <Nav.Bar
        variant="right"
        spacing="gap-4 p-2"
        navItems={navData}
        className="bg-green-500 border-b-2 border-indigo-600 p-5"
        overrideResponsiveNav={true}
      />
    );
  }
  ```
