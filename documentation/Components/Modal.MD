# Modal

**_A Customizable Modal_**  
_[Back](../TailStrap.MD)_

## Default Behavior

The `<Modal />` is one of a binary pair and requires the `<ModalPortal/>` to function.
The `ModalPortal` exposes the Modal's context and provides the methods needed to control it.  
At the moment tailstrap supports one modal at a time. The `<ModalComponent/>` lies at it's core and can be used on it's own.

The `<ModalPortal/>` needs to be located in the Parent Component of where `<Modal>` is called. Ideally, the portal should be located at the root of your application. For example its methods can not be accessed in the example below as `useModalContext` will be undefined when it is imported:

```js
import { ModalPortal, Modal, useModalContext, Button } from "tailStrap";

export const MyComponent(){
    // throws error: "Modal must be used within a ModalProvider"
    const { clickHandler } = useModalContext();
    return (
      <ModalPortal>
        <Button
            label='Click to open Modal'
            props={{ onClick: clickHandler }}
        />
        <Modal
            title='Hello, I am a modal!'
            message='You can not interact with the page until you close this dialog!'
        />
      </ModalPortal>
    );
};
```

## Import & Usage

- **Create Portal**:

  ```js
  import { ModalPortal } from "tailstrap";
  ```

  - React.js:

    - index.js:

      ```js
      import App from "./App";
      import React from "react";
      import ReactDOM from "react-dom";
      import { ModalPortal } from "tailstrap";

      ReactDOM.render(
        <React.StrictMode>
          <ModalPortal>
            <App />
          </ModalPortal>
        </React.StrictMode>,
        document.getElementById("root")
      );
      ```

  - Next.js

    - \_app.js:

      ```js
      import "../styles/globals.css";
      import { ModalPortal } from "tailstrap";

      function MyApp({ Component, pageProps }) {
        return (
          <ModalPortal>
            <Component {...pageProps} />
          </ModalPortal>
        );
      }

      export default MyApp;
      ```

- **Import Modal and context**

  ```js
  import { Modal, useModalContext, Button } from "tailstrap";

  export const MyComponent(){
    // provided method explained later, toggles modal
    const { clickHandler } = useModalContext();
    return (
        <>
        <Button
            label='Click to open Modal'
            props={{ onClick: clickHandler }}
        />

        <Modal
            title='Hello, I am a modal!'
            message='You can not interact with the page until you close this dialog!'
        />
        </>
    );
  }
  ```

## Context

- ### Import

  ```js
  import { useModalContext, Modal } from "tailstrap";
  ```

  `useModalContext` exposes the built in methods used to control the component.

  The context exposes the following:

  ```ts
  {
    // state of the modal
    isOpen: boolean,
    // dispatches the openModal Action
    openModal: Function,
    // dispatches the closeModal Action
    closeModal: Function,
    // dispatches the toggleModal Action
    toggleModal: Function,
    /*
    method to handle click events
    takes (e, action) as params
    prevents Default, stops the event from bubbling
    unless an action is passed the toggleModal Dispatches
    */
    clickHandler: (e: event, action?: Function)
  };
  ```

- ### Usage

  The `clickHandler` handles opening and closing the modal by toggling the state. The clickHandler should be used so that Modal can return focus to the previous element when it closes/unmounts.

  If you wish to declare that the `Modal` opens or closes explicitly you can use the clickHandler in conjunction with the additional methods : openModal or closeModal.

  ```js
  import { Modal,  Button, useModalContext } from "tailstrap";

    export const MyComponent(){
      const { clickHandler, openModal } = useModalContext();
      return (
          <>
          <Button
              label='Click to open Modal'
              // pass desired function openModal/closeModal
              // onClick: clickHandler returns toggleModal by default
              props={{ onClick: (e)=> clickHandler(e, openModal) }}
          />
          <Modal
              title='Hello, I am a modal!'
              message='You can not interact with the page until you close this dialog!'
          />
          </>
      );
    }
  ```

## Modal Component Properties

The `Modal` works differently than most of our components. Passing children/child returns only the children/child and should be used for overriding only. For instance to override the `<ModalComponent/>` returned by `<Modal/>`:

```js
...
return (
  <Modal>
    <MyModal />
  </Modal>
);
```

The `Modal` exposes additional props allowing the modal to be customized or replaced.

- ### **_`clickOutside`_**: boolean

  _Default props_ : false

  Set to true to dismiss the modal by double clicking anywhere outside of it.

  ```js
  ...
  return <Modal clickOutside={true} />;
  ```

- ### **_`useEsc`_**: boolean

  _Default props_ : false

  By default the Esc key has no effect when a modal is active.
  To allow the Esc key to close the modal pass `useEsc={true}`

  ```js
  ...
  return <Modal useEsc={true} />;
  ```

- ### **_`title`_**: string

  Enter a title for your modal.

  To override, see `Heading`

  ```js
  ...
  return <Modal title='This is a Modal Title' />;
  ```

- ### **_`message`_**: string

  Enter a message for your modal.

  To override, see Body

  ```js
  ...
  return <Modal message='This is a message' />;
  ```

- ### **_`Footer`_**: HTML or React Element

  To override the Footer and the elements in it, create your own.

  _NOTE_

  The `<Modal/>` component handles the focus and targets the `Ok` button when the `Modal` is opened, and returns focus to the previous element on close.

  To retain default functionality and allow the `Modal` to handle the focus, the following properties need to be added to your buttons: `taildata` and `tabIndex`. The `CloseIcon` prop is handled and has a value of `2` for both properties, and is designed to be the last button cycled with the `Tab` key.

  - **`Example Custom Buttons with Button Data`**:

    ```js
    import { Button, Modal, useModalContext} from 'tailstrap';
    const { handleClick } = useModalContext();
    // button data
    const modalButtons = [
      {
        size: "xl",
        label: "Submit",
        background: "bg-gray-500 dark:bg-gray-700 hover:bg-green-500",
      },
      {
        size: "xl",
        label: "Cancel",
        background: "bg-indigo-600 dark:bg-indigo-700 hover:bg-red-500",
      },
    ];
    ...
    // Adding indexes to buttons
    const MyButtons = modalButtons.map((button, i) => {
        return {
            ...button,
            props: {
                /*
                to learn more about tabindex :
                https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                */
                tabIndex: i,
                // used by the Modal to indicate the desired tab order
                taildata: i,
                /*
                custom handlers can also be used if additional actions are needed
                but include the handleClick provided by useModalContext() to toggle the Modal.
                */
                onClick: handleClick,
            },
        }
    });
    ```

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
        <Modal
         Heading={ headingData }
        />
      )
    }
    ```

- ### **_`Body`_**: HTML or React Element

  Replaces message with the provided component

  ```js
  function MyComponent(){
    ...
    return(
      <Modal
        Body={ MyOtherComponent }
      />
    )
  }
  ```

- ### **_`CloseIcon`_**: JSX.Element

  Replaces the current close button and icon, the `CloseIcon` is wrapped in a `<span>` with the modal`s close handler attached.

  ```js
  function MyComponent(){
    ...
    return(
      <Modal
        CLoseIcon={ MyIcon }
      />
    )
  }
  ```

## **_`variant`_**: string

_Default_: `center`  
COMING SOON
