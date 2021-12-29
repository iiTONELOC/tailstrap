# ToolTip

**_A reusable component for adding tooltips_**  
_[Back](../TailStrap.MD)_

## Default Behavior

Default Classes:  
 The default classes depend on props such as _`size`_ and _`marginAmount`_.

## Import

```js
import { ToolTip } from "tailstrap";
```

## Component Properties

### **_`tip`_**: string

Text to be rendered.

```js
import { Button, ToolTip } from "tailstrap";

function ButtonWithTip(){

  return (
    <ToolTip tip="This is a tooltip!">
      <Button
        variant='success'
        label="Hover over me to see a tip"
      />
    </ToolTip>;
  );
};

```

### **_`rounded`_**: string

Change the default rounded styles without having to override the component.  
Utilizes tailwindcss rounded classes:

[Border Radius Tailwind CSS Docs](https://tailwindcss.com/docs/border-radius#rounded-corners)

_Default Classes:_ `rounded-lg`

### **_`background`_**: string

Add your own background color without overriding the component.

Utilizes tailwindcss background color properties:

[Background Colors Tailwind CSS Docs](https://tailwindcss.com/docs/background-color)

_Default Classes:_ `bg-black`

### **_`padding`_**: string

Add custom padding without overriding the component.

Utilizes tailwindcss padding properties:

[Padding Tailwind CSS Docs](https://tailwindcss.com/docs/padding)

_Default Classes:_ `px-2 pb-1`

### **_`textColor`_**: string

Change the color of the text without overriding the component.

Utilizes tailwindcss text-color properties:

[Text Color Tailwind CSS Docs](https://tailwindcss.com/docs/text-color)

_Default Classes:_ `text-white`

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

| Prop    | Default Class Names |
| ------- | ------------------- |
| default | mt-16               |
| top     | -my-10              |
| left    | -ml-24              |
| bottom  | mt-16               |
| right   | mx-24               |

### **_`marginAmount`_**: string

Add your own margins to extend the defaults. The defaults are just to get you going, to make the tooltip your own add your own margins.

In an effort to remain light we don't list every possibility. You can control the amount of spacing by passing your own.

Please refer to the tailwind docs on margins for more information, [Margins](https://tailwindcss.com/docs/margin).

Top is controlled with negative margins: `-my-{validMarginNumber}`  
Left is controlled with negative margins: `-ml-{validMarginNumber}`  
Bottom is controlled by `my-{validMarginNumber}`  
Right is controlled by `mx-{validMarginNumber}`

Here is a list of accepted numbers:

```ts
type validMarginNumber =
  | 0
  | 0.5
  | 1
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 72
  | 80
  | 96;
```
