# Accessibility Plugin

[![npm version](https://badge.fury.io/js/accessibility-plugin.svg)](https://badge.fury.io/js/accessibility-plugin)

## Description

The Accessibility Plugin is a JavaScript library that helps improve the accessibility of your web applications. It provides a set of utility functions and components that can be easily integrated into your project.

## Features

- **Invert Colors**: Inverts the colors of the page to improve readability for users with visual impairments.
- **Grayscale**: Converts the page grayscale to improve readability for users with visual impairments.
- **Low Saturation**: Reduces the saturation of the page to improve readability for users with visual impairments.
- **High Saturation**: Increases the saturation of the page to improve readability for users with visual impairments.
- **Link Highlight**: Highlights all links on the page to make them easier to identify for users with visual impairments.
- **Font Size**: Increases the font size of the page to improve readability for users with visual impairments.
- **Line Height**: Increases the line height of the page to improve readability for users with visual impairments.
- **Letter Spacing**: Increases the letter spacing of the page to improve readability for users with visual impairments.
- **Text Alignment**: Changes the text alignment of the page to improve readability for users with visual impairments.
- **Low Contrast**: Reduces the contrast of the page to improve readability for users with visual impairments.
- **High Contrast**: Increases the contrast of the page to improve readability for users with visual impairments.
- **Extra Contrast**: Increases the contrast of the page even further to improve readability for users with visual impairments.
- **Hide Images**: Hides all images on the page to improve readability for users with visual impairments.
- **Hide Videos**: Hides all videos on the page to improve readability for users with visual impairments.
- **Big Circle Cursor**: Changes the cursor to a big circle to improve visibility for users with visual impairments.
- **Reading Mask**: Highlights the current line of text being read to improve focus for users with visual impairments.
- **Reading Guide**: Makes it easier to read long lines of text by Long Highlight Cursor.
- **Reset**: Resets all accessibility settings to their default values.
- **Close**: Closes the accessibility menu.
- **Change Position**: You can change the position of the accessibility menu to `left`, `right`, `top` or `bottom` as User needs.
- **Save Settings**: Save the current settings to the local storage and load them when the page is reloaded.

## Installation

You can install the Accessibility Plugin using npm. Run the following command in your project directory:

<pre><code>npm i accessibility-plugin</code></pre>

### OR

You can use this `CDN` easily.

<pre><code>https://cdn.jsdelivr.net/gh/PrabothCharith/accessibility-plugin@main/accessibility-menu.min.js</code></pre>
<pre><code><script src="https://cdn.jsdelivr.net/gh/PrabothCharith/accessibility-plugin@main/accessibility-menu.min.js"></script></code></pre>

<br/>

After installation, you can link the `javascript` file _normally_ using
<pre><code><script src="node_modules/accessibility-plugin/accessibility-menu.js"></script></code></pre>

### OR

You can use `min.js` file _as your requirement_
<pre><code><script src="node_modules/accessibility-plugin/accessibility-menu.min.js"></script></code></pre>

>[!tip]
> **Link the `Javascript` file `after all javascript` for better output**

## Customization

### Change Position

- In the js file, you can find the `first div` with `id` as `accessibility-modal`
- In this div, you can find class `right` by **default**. You can change it to `left`, `right`, `top` or `bottom` as you need

