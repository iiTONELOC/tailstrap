# Modal Component

**_A Customizable Modal_**  
_[Back](../TailStrap.MD)_

## Default Behavior

The `<Modal />` component is one of a binary pair and requires the `<ModalPortal/>` to function.
The `ModalPortal` exposes the Modal's context and provides the methods needed to control it. At the moment tailstrap supports one modal at a time. The `<ModalComponent/>` lies at it's core and can be used on it's own.

<!-- See ModalComponent HERE -->

The `<ModalPortal/>` needs to be located at the Parent of where `<Modal>` is called. Ideally, the portal should be located at the root of your application. For example its methods can not be accessed in this manner:

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

## Component Properties

The `Modal` works differently than most of our components. Passing children/child returns only the children/child and should be used for overriding. For instance to override the `<ModalComponent/>`:

```js
//
return (
  <Modal>
    <MyModal />
  </Modal>
);
```

The `Modal` exposes additional props allowing the modal to be customized or replaced.

### **_`title`_**: string

Enter a title for your modal.

To override, see Heading

### **_`message`_**: string

Enter a message for your modal.

To override, see Body

### **_`Footer`_**: HTML or React Element

To override the Footer and the elements in it, create your own.

### **_`textColor`_**: string

_Default Classes_ : `text-black dark:text-gray-300`

### **_`background`_**: string

_Default Classes_ : `bg-gray-100 dark:bg-gray-800`

### **_`border`_**: string

_Default Classes_ : `rounded-lg border-1 border-black dark:border-gray-600`

### **_`width`_**: string

_Default Classes_ : `w-96 sm:w-6/12 md:w-5/12 lg:w-5/12 xl:w-3/12`  
_NOTE: height must also be changed to override the default_

### **_`height`_**: string

_Default Classes_ : `h-auto z-50`  
_NOTE: width must also be changed to override the default_

### **_`padding`_**: string

_Default Classes_ : `p-2`

### **_`focus`_**: string

_Default Classes_ : `focus:ring-2 focus:ring-blue-500`

### **_`transitions`_**: string

_Default Classes_ : `transition ease-in duration-300`

### **_`className`_**: string

When using className the modal defaults are overridden

_Default Classes_ : `textColor` + `background` + `border` + `width + height`

### **_`Heading`_**: object

The Heading property expects an object with the optional properties:

- size: string
  - [Tailwind CSS text sizes](https://tailwindcss.com/docs/font-size)
- className: string
  - can override the defaults:
  - `flex w-full items-center place-content-center ${padding} text-2xl md: text-3xl xl: text-4xl underline underline-offset-4 decoration-indigo-500 dark:decoration-green-400`
- children: HTML or React Element

### **_`Body`_**: HTML or React Element

Replaces message

### **_`CloseIcon`_**: JSX.Element

Replaces the current close button and icon, the `CloseIcon` is wrapped in a `<span>` with the modal`s close handler attached.

### **_`variant`_**: string

COMING SOON
