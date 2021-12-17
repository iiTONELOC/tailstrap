# Page Component

**_A layout component for pages_**

## Default Behavior

The `<Page />` component is a `<main>` HTML element by default and is used when you need to expand the element to fit the viewport while centering the content.

Default Classes: `flex flex-col items-center justify-center min-h-screen w-screen`

## Import

```js
import { Page } from "tailstrap";
```

## Component Properties

- ### **_`props`_**: object

  Takes any valid HTML or React Prop and passes them to the base HTML element:

  ```js
  <Page props={{ onClick: () => alert(`You clicked the page!`) }} />
  ```

  To Override Default Element:

  - **_`as`_**: string

  Any valid HTML element

  ```js
  <Page props={{ as: "div" }}> Children Go Here </Page>
  ```

- ### **_`variant`_**: string

  Maybe the default doesn't quite fit your purposes. No worries! We offer a few variants before you have to fully customize the component.

  - **Center - Default Selection**

    _Default Classes_ : `flex flex-col items-center justify-center min-h-screen w-screen`

    ```js
    <Page variant="center"> Children Go Here </Page>
    ```

  - **Start**

    _Default Classes_ : `flex flex-col items-start justify-start min-h-screen w-screen`

    ```js
    <Page variant="start"> Children Go Here </Page>
    ```

  - **Start-Center**

    _Default Classes_ : `flex flex-col items-center justify-start min-h-screen w-screen`

    ```js
    <Page variant="start-center"> Children Go Here </Page>
    ```

  - **Center-Start**

    _Default Classes_ : `flex flex-col items-start justify-center min-h-screen w-screen`

    ```js
    <Page variant="center-start"> Children Go Here </Page>
    ```

- ### **_`className`_**: string

  _**Adds to existing styles unless overridden**_  
   Any valid TailwindCSS className

  ```js
  <Page className="bg-gray-700" />
  ```

- ### **_`override`_**: boolean

  All component styles can be overridden by one of two ways.

  Default behavior is to concatenate the class names passed to the `className` property with the existing classes. To override the default behavior pass the `override={true}` property when calling the component:

  1. Add to base styles

     ```js
     <Page className="bg-gray-800" />
     ```

  2. Override completely

     ```js
     <Page className="container mx-auto" override={true} />
     ```
