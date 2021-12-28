# ModalProvider

**_Context Provider for the Modal_**  
_[Back](../TailStrap.MD)_

## Default Behavior

_NOTE:_  
The `ModalProvider` differs from the `ModalPortal` and exposes the context only.

Using the provider allows for faster modal creation; you can use your own modals and use the provider to control it.

The `<ModalProvider/>` needs to be located in the Parent Component above where `useModalContext()` is called.  
Ideally, the provider should be located at the root of your application.  
For example, its methods can not be accessed in the example below as `useModalContext` will be undefined when it is imported:

```js
import { ModalProvider, useModalContext, Button } from "tailStrap";

function MyComponent() {
  // throws error: "Modal must be used within a ModalProvider"
  const { clickHandler } = useModalContext();
  return (
    <ModalProvider>
      <Button label="Click to open Modal" props={{ onClick: clickHandler }} />
      <Modal
        title="Hello, I am a modal!"
        message="You can not interact with the page until you close this dialog!"
      />
    </ModalProvider>
  );
}
```

## ContextProvider

- ## Import

  ```js
  import { useModalContext } from "tailstrap";
  ```

  `useModalContext` exposes the built in methods used to control the component.

  The context exposes the following:

  ```ts
  {
   // state of the modal
   isOpen: boolean,
   // sets isOpen to true
   openModal: Function,
   // sets isOpen to false
   closeModal: Function,
   // sets isOpen to !isOpen
   toggleModal: Function,
   /*
   method to handle click events
   takes (e, action) as params
   prevents Default, stops the event from bubbling
   unless an action is passed the toggleModal Dispatches by default
   */
   clickHandler: (e: event, action?: Function)
  };
  ```

- ## Usage

  - **Import the provider**:

  ```js
  import { ModalProvider } from "tailstrap";
  ```

  - React.js:

    - index.js:

      ```js
      import App from "./App";
      import React from "react";
      import ReactDOM from "react-dom";
      import { ModalProvider } from "tailstrap";

      ReactDOM.render(
        <React.StrictMode>
          <ModalProvider>
            <App />
          </ModalProvider>
        </React.StrictMode>,
        document.getElementById("root")
      );
      ```

  - Next.js

    - \_app.js:

      ```js
      import "../styles/globals.css";
      import { ModalProvider } from "tailstrap";

      function MyApp({ Component, pageProps }) {
        return (
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        );
      }

      export default MyApp;
      ```

- **Import context**

  ```js
  import { useModalContext } from "tailstrap";

  function MyModal() {
    const { openModal, closeModal, isOpen } = useModalContext();
    return (
      <>
        <Button label="Click to open Modal" props={{ onClick: openModal }} />

        {isOpen && (
          <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div class="mt-3 text-center">
              <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  class="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Successful!
              </h3>
              <div class="mt-2 px-7 py-3">
                <p class="text-sm text-gray-500">This is my custom modal!</p>
              </div>
              <div class="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  onClick={closeModal}
                  class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  ```
