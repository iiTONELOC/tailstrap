# Box Component

**_A layout component for containers_**  
_[Back](../TailStrap.MD)_

## Default Behavior

The `<Box />` component is an HTML `<div>` element and utilizes flex properties by default but we provide a few variants and offer full customization.

Default Classes: `flex flex-wrap flex-row`

## Import

```js
import { Box } from "tailstrap";
```

## Component Properties

- ### **_`props`_**: object

  Takes any valid HTML or React Prop and passes them to the base HTML element:

  ```js
  <Box props={{ onClick: () => alert(`You clicked the box!`) }} />
  ```

  To Override Default Element:

  - **_`as`_**: string

  Any valid HTML element

  ```js
  <Box props={{ as: "section" }}> Children Go Here </Box>
  ```

- ### **_`variant`_**: string

  Maybe the default doesn't quite fit your purposes. No worries! We offer a few variants before you have to fully customize the component.

  - **row - Default Selection**

    _Default Classes_ : `flex flex-wrap flex-row`

    ```js
    <Box> Children Go Here </Box>
    ```

  - **col**

    _Default Classes_ : `flex flex-wrap flex-col`

    ```js
    <Box variant="col"> Children Go Here </Box>
    ```

  - **grid**

    _Default Classes_ : `grid`

    ```js
    <Box variant="grid"> Children Go Here </Box>
    ```

  - **flex**

    _Default Classes_ : `flex`

    ```js
    <Box variant="flex"> Children Go Here </Box>
    ```

  - **block**

    _Default Classes_ : `block`

    ```js
    <Box variant="block"> Children Go Here </Box>
    ```

  - **inline**

    _Default Classes_ : `inline`

    ```js
    <Box variant="inline"> Children Go Here </Box>
    ```

  - **inline-flex**

    _Default Classes_ : `inline-flex`

    ```js
    <Box variant="inline-flex"> Children Go Here </Box>
    ```

  - **inline-grid**

    _Default Classes_ : `inline-grid`

    ```js
    <Box variant="inline-grid"> Children Go Here </Box>
    ```

  - **inline-block**

    _Default Classes_ : `inline-block`

    ```js
    <Box variant="inline-block"> Children Go Here </Box>
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
     <Box className="bg-gray-800" />
     ```

  2. Override completely

     ```js
     <Box className="container mx-auto" override={true} />
     ```
