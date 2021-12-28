# ModalComponent

**_A Customizable ModalComponent_**  
_[Back](../TailStrap.MD)_

## Default Behavior

The `<ModalComponent />` is the base component returned by `<Modal/>`.  
This is the component only and can be used without `useModalContext()`.

You can use the `<ModalComponent>` with your own dispatches or pair it with `<ModalProvider/>` exposing the `ModalContext` to make your own implementations.

See the [ModalProvider](./ModalProvider) for more information on creating your own configurations.

If you are looking for an all in one implementation check out the [Modal](./Modal) instead.

## Import

```js
import { ModalComponent } from "tailstrap";
```

## Properties

The `ModalComponent` is the base component used in our all-in-one implementation, `<Modal/>`, and shares many of the same properties.

- ### **_`title`_**: string

  Enter a title for your modal.

  To override, see `Heading`

  ```js
  ...
  return <ModalComponent title='This is a Modal Title' />;
  ```

- ### **_`message`_**: string

  Enter a message for your modal.

  To override, see Body

  ```js
  ...
  return <ModalComponent message='This is a message' />;
  ```

- ### **_`Footer`_**: HTML or React Element

  To override the Footer and the elements in it, create your own.

- ### **_`textColor`_**: string

  _Default Classes_ : `text-black dark:text-gray-300`

- ### **_`background`_**: string

  _Default Classes_ : `bg-gray-100 dark:bg-gray-800`

- ### **_`border`_**: string

  _Default Classes_ : `rounded-lg border-1 border-black dark:border-gray-600`

- ### **_`width`_**: string

  _NOTE: height must also be changed to override the default_
  _Default Classes_ : `w-96 sm:w-6/12 md:w-5/12 lg:w-5/12 xl:w-3/12`

- ### **_`height`_**: string

  _NOTE: width must also be changed to override the default_
  _Default Classes_ : `h-auto z-50`

- ### **_`padding`_**: string

  _Default Classes_ : `p-2`

- ### **_`focus`_**: string

  _Default Classes_ : `focus:ring-2 focus:ring-blue-500`

- ### **_`transitions`_**: string

  _Default Classes_ : `transition ease-in duration-300`

- ### **_`className`_**: string

  When using className the modal defaults are overridden

  _Default Classes_ : `textColor` + `background` + `border` + `width + height`

- ### **_`Heading`_**: object

  The Heading property expects an object with the optional properties:

  - size: string

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

  - className: string
    - can override the defaults:
    - `flex w-full items-center place-content-center ${padding} text-2xl md: text-3xl xl: text-4xl underline underline-offset-4 decoration-indigo-500 dark:decoration-green-400`
  - children: HTML or React Element use to override the heading

    ```js
    function MyComponent(){
      const headingData = {
        size: 'text-6xl'
      }
      ...
      return(
        <ModalComponent Heading={ headingData }/>
      )
    }
    ```

- ### **_`Body`_**: HTML or React Element

  Replaces message with the provided component

  ```js
  function MyComponent(){
    ...
    return(
      <ModalComponent Body={ MyOtherComponent }/>
    )
  }
  ```

- ### **_`CloseIcon`_**: JSX.Element

  Replaces the current close button and icon, the `CloseIcon` is wrapped in a `<span>` with the modal`s close handler attached.

  ```js
  function MyComponent(){
    ...
    return(
      <ModalComponent
        CloseIcon={ MyIcon }/>
    )
  }
  ```
