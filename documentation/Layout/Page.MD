# Page Component

**_A layout component for pages_**

## Default Behavior

The `<Page />` component is a `<section>` HTML element at its core and is way to expand the element to fit the viewport while centering your content.

    Default Classes:

    flex flex-col items-center justify-center min-h-screen

## Overriding default behavior

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
