# Asa JS

Asa JS is a lightweight JavaScript library for performing small and simple animations to text. It allows you to easily add animations to your text elements by using custom attributes in your HTML. You can specify the text to animate, the number of iterations, the gap between animations, and the animation class to use.

## Library Information

- Name: Asa JS
- Description: A lightweight JavaScript library for performing small and simple animations to text.
- Author: Joseph Morukhuladi
- Version: 1.0.0
- License: MIT

## Installation

To use the library, include the asa.css and asa.js files in your project.

```html
<link rel="stylesheet" href="asa.css" />
<script src="asa.js"></script>
```

## Usage

Any HTML element can be animated by adding the data-asa attribute along with other configuration attributes.

### Configuration Attributes

- data-asa: Required attribute to identify the element for animation.
- data-asa-text: The text content to be animated.
- data-asa-gap: The delay in milliseconds between each character animation.
- data-asa-animation: The type of animation to apply.
- data-asa-duration: The length of the animation in milliseconds.
- data-asa-iteration: The number of times the animation repeats (e.g., 1, 2, infinite).
- data-asa-run: Status indicator (set to 0 for initial state).

### Examples

```html
<p
	class="data-asa-text-content"
	data-asa
	id="card-3"
	data-asa-gap="40"
	data-asa-text="Unleash the Letter"
	data-asa-run="0"
	data-asa-iteration="infinite"
	data-asa-animation="rotate"
	data-asa-duration="2000"
></p>

<p
	class="data-asa-text-content"
	data-asa
	id="card-4"
	data-asa-gap="40"
	data-asa-text="Beyond the Word"
	data-asa-run="0"
	data-asa-iteration="infinite"
	data-asa-animation="push"
	data-asa-duration="2000"
></p>

<p
	class="data-asa-text-content"
	data-asa
	id="card-7"
	data-asa-gap="20"
	data-asa-text="Text That Moves You"
	data-asa-run="0"
	data-asa-iteration="infinite"
	data-asa-animation="flip-x"
	data-asa-duration="2000"
></p>

<p
	class="data-asa-text-content"
	data-asa
	id="card-9"
	data-asa-gap="40"
	data-asa-text="Simply Animate Your Text"
	data-asa-run="0"
	data-asa-iteration="infinite"
	data-asa-animation="wave"
	data-asa-duration="2000"
></p>
```

## Initialization

You can initialize a specific element using the run() method in your script.

```javascript
const el = document.querySelector("#card-3")
asa.run(el)
```

To automatically find and trigger all elements with the data-asa attribute, use the init() method.

```javascript
asa.init()
```

## Animation Types

The following animation types are available in asa.css:

- rotate
- push
- flip-x
- flip-y
- wave
- basic
- basic-half
- knock
- fade
