# 🎲 Dice Roller — Code Explanation

> **Project:** Dice Roller
> **Written by:** Biswajit Biswal
> **Files:** `index.html` · `style.css` · `script.js`

---

## 📌 Table of Contents

| # | Topic |
|---|-------|
| 1 | [HTML Explained](#1-html-explained) |
| 2 | [CSS Explained](#2-css-explained) |
| 3 | [JavaScript Explained](#3-javascript-explained) |
| 4 | [How Everything Connects](#4-how-everything-connects) |
| 5 | [Key Concepts Used](#5-key-concepts-used) |

---

## 1. HTML Explained

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">   <!-- connects CSS -->
</head>
<body>
    <div class="dice"></div>                   <!-- the dice box -->

    <button onclick="roll()">ROLL DICE</button> <!-- calls JS function -->
    <script src="script.js"></script>           <!-- connects JS -->
</body>
</html>
```

### Line by Line:

| Line | What it does |
|---|---|
| `<link rel="stylesheet" href="style.css">` | Connects the CSS file for styling |
| `<div class="dice"></div>` | Empty box — JS will fill this with the dice number |
| `<button onclick="roll()">` | When clicked, runs the `roll()` function in JS |
| `<script src="script.js">` | Connects the JavaScript file |

### Why is the `<script>` at the bottom?

```
❌ If script is in <head> → JS runs before HTML loads → dice not found

✅ If script is at bottom of <body> → HTML loads first → dice found ✅
```

---

## 2. CSS Explained

### The Dice Box

```css
.dice {
    height: 200px;
    width: 200px;
    border-radius: 20%;        /* rounded corners → looks like a dice */
    display: flex;
    justify-content: center;   /* number in center horizontally */
    align-items: center;       /* number in center vertically */
    font-size: 40px;           /* big number */
    background: #FFFFFF;       /* white box */
    color: #111111;            /* dark number */
}
```

### Why `display: flex` + `justify-content` + `align-items`?

```
Without flex:
┌──────────┐
│1          │  ← number stuck in top-left corner
│           │
└──────────┘

With flex + center:
┌──────────┐
│           │
│     1     │  ← number perfectly centered ✅
│           │
└──────────┘
```

---

### The Body / Background

```css
body {
    background: linear-gradient(135deg, #141E30, #243B55);
    /*          dark blue gradient background                */
    margin: 0;               /* remove default white gap */
    min-height: 100vh;       /* full screen height */
    display: flex;
    justify-content: center; /* center everything horizontally */
    align-items: center;     /* center everything vertically */
    flex-direction: column;  /* stack dice + button top to bottom */
}
```

### What `linear-gradient(135deg, #141E30, #243B55)` means:

```
135deg     →  diagonal direction (top-left to bottom-right)
#141E30    →  dark navy blue (start color)
#243B55    →  slightly lighter blue (end color)

Result → smooth dark blue gradient background
```

### What `flex-direction: column` does:

```
Without column (default = row):
[ DICE ][ BUTTON ]    ← side by side

With column:
[ DICE  ]
[ BUTTON]              ← stacked top to bottom ✅
```

---

### The Button

```css
button {
    margin-top: 20px;          /* space between dice and button */
    height: 30px;
    width: 120px;
    border-radius: 5%;         /* slightly rounded corners */
    background-color: blueviolet;
    color: aliceblue;          /* light text on dark button */
}
```

---

### The Rolling Animation

```css
/* This class triggers the animation */
.rolling {
    animation: roll 2s linear;
}

/* This defines what the animation does */
@keyframes roll {
    0%   { transform: rotate(0deg);    } /* start — no rotation */
    50%  { transform: rotate(540deg);  } /* halfway — 1.5 spins */
    100% { transform: rotate(1080deg); } /* end — 3 full spins */
}
```

### How `@keyframes` works:

```
@keyframes roll
     │
     ├── 0%   → rotate(0deg)     = start position
     ├── 50%  → rotate(540deg)   = 1.5 spins done
     └── 100% → rotate(1080deg)  = 3 full spins done

Duration → 2 seconds
Style    → linear (same speed throughout)
```

### Visual timeline:

```
0s ──────────── 1s ──────────── 2s
↓               ↓               ↓
0deg          540deg          1080deg
(start)      (1.5 spins)    (3 full spins)
```

---

## 3. JavaScript Explained

```js
const dice = document.querySelector(".dice")
```

> Finds the `<div class="dice">` element and stores it in `dice`.

```
document.querySelector(".dice")
         ↓
   searches the HTML
         ↓
   finds <div class="dice">
         ↓
   stores it in → dice variable
```

---

```js
function roll() {
    console.log("Dice rolled!");
```

> Defines the `roll` function. `console.log` is for debugging — just prints to console.

---

```js
    let result = Math.floor(Math.random() * 6) + 1
```

> This generates a **random number from 1 to 6**.

### How it works — step by step:

```
Math.random()          → 0.0 to 0.999...   (random decimal)
Math.random() * 6      → 0.0 to 5.999...   (scale to 0–6)
Math.floor(... * 6)    → 0, 1, 2, 3, 4, 5  (remove decimal)
Math.floor(... * 6)+1  → 1, 2, 3, 4, 5, 6  (shift to 1–6) ✅
```

### Example run:

```
Math.random()      = 0.742
0.742 × 6          = 4.452
Math.floor(4.452)  = 4
4 + 1              = 5   ← dice shows 5 🎲
```

---

```js
    dice.textContent = result;
```

> Puts the number **inside** the dice div on the screen.

```
Before: <div class="dice"></div>
After:  <div class="dice">5</div>   ← user sees "5" on screen
```

---

```js
    dice.classList.remove("rolling");
    void dice.offsetWidth;
    dice.classList.add("rolling");
```

> This is the **animation trick** — the most important part!

### Why three lines instead of one?

**The problem:**

```
If you just do:
dice.classList.add("rolling");

And click ROLL again:
→ class is already there
→ browser thinks "nothing changed"
→ animation does NOT restart ❌
```

**The solution — 3 steps:**

```
Step 1: dice.classList.remove("rolling")
        → remove the class → animation stops

Step 2: void dice.offsetWidth
        → forces browser to re-calculate layout
        → this is the "reset trick"
        → without this, add/remove happens too fast

Step 3: dice.classList.add("rolling")
        → add class back → animation starts fresh ✅
```

### What is `void dice.offsetWidth`?

```
dice.offsetWidth  → reads the element's width
                  → this forces browser to "flush" the DOM
                  → acts as a reset between remove and add

void              → means "I don't need the return value"
                  → we only care about the side effect (DOM flush)
```

> 💡 This is called a **reflow trick** — a common technique to restart CSS animations.

---

### Full function summary:

```js
function roll() {
    console.log("Dice rolled!");           // 1. log to console

    let result = Math.floor(Math.random() * 6) + 1  // 2. random 1–6

    dice.textContent = result;             // 3. show number on screen

    dice.classList.remove("rolling");      // 4. stop old animation
    void dice.offsetWidth;                 // 5. reset (reflow trick)
    dice.classList.add("rolling");         // 6. start animation fresh
}
```

---

## 4. How Everything Connects

```
User clicks button
        ↓
onclick="roll()" in HTML
        ↓
roll() runs in script.js
        ↓
  ┌─────────────────────────┐
  │ 1. random number 1–6    │
  │ 2. show on .dice div    │
  │ 3. restart CSS animation│
  └─────────────────────────┘
        ↓
CSS sees .rolling class added
        ↓
@keyframes roll plays for 2 seconds
        ↓
Dice spins 3 times + shows new number ✅
```

---

## 5. Key Concepts Used

| Concept | Where used | What it does |
|---|---|---|
| `document.querySelector()` | JS | Finds HTML element |
| `Math.random()` | JS | Generates 0–1 random decimal |
| `Math.floor()` | JS | Rounds down to whole number |
| `textContent` | JS | Sets text inside an element |
| `classList.add()` | JS | Adds a CSS class |
| `classList.remove()` | JS | Removes a CSS class |
| `void offsetWidth` | JS | Forces DOM reflow (animation reset) |
| `onclick` | HTML | Calls JS function on click |
| `display: flex` | CSS | Centers content |
| `linear-gradient` | CSS | Gradient background |
| `@keyframes` | CSS | Defines animation steps |
| `animation` | CSS | Applies animation to element |
| `transform: rotate()` | CSS | Spins the element |

---

### 💡 The Reflow Trick — Easy to Remember

```
❌ Wrong way (animation doesn't restart):
dice.classList.add("rolling");

✅ Correct way (animation always restarts):
dice.classList.remove("rolling");  // step 1 — stop
void dice.offsetWidth;             // step 2 — reset
dice.classList.add("rolling");     // step 3 — go!
```

---

*Code explanation by Biswajit Biswal · JavaScript Learning Journey · 2025*
