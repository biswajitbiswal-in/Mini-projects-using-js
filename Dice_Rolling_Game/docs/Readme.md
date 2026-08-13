# 🎲 Dice Game Project (JavaScript)

A two-player dice game built with vanilla JavaScript, HTML, and CSS. Players compete to reach 100 points first.

## 📋 Game Overview

This is an interactive web-based dice game where two players take turns rolling a die and accumulating points. Strategy meets luck as players decide when to hold their score or risk it all for more points.

## 🎮 How to Play

### Game Rules

1. **Rolling** - Players take turns rolling a single die (1-6)
2. **Accumulating Points** - Each roll (except 1) adds to the current turn score
3. **Bust Rule** - If a player rolls a 1, their turn ends and they score 0 for that turn
4. **Holding** - Players can choose to "hold" and save their turn score to their total
5. **Winning** - First player to reach 100+ points wins

### Strategy Tips

- Roll when your turn score is low
- Hold when you have accumulated a good score
- Beware rolling multiple times in a row - risk of busting

## 🛠️ Technologies Used

- **HTML5** - Semantic markup & structure
- **CSS3** - Styling, layout, & animations
- **Vanilla JavaScript** - Game logic, DOM manipulation, & event handling

## 📁 Project Structure

```
dice-game/
├── index.html          # Game interface & layout
├── style.css          # Styling & responsive design
├── script.js          # Game logic & functionality
└── README.md          # Documentation
```

## ⚙️ Key Features

- ✅ Two-player turn-based gameplay
- ✅ Real-time score tracking (turn & total)
- ✅ Automatic player switching
- ✅ Win detection (first to 100)
- ✅ Game reset functionality
- ✅ Interactive & responsive UI
- ✅ Visual feedback for actions
- ✅ Clear game state display

## 💻 Code Highlights

### Main Game Logic
- Random dice roll generator
- Turn score calculation
- Total score accumulation
- Win condition checker
- Player alternation system

### DOM Manipulation
- Score updates
- Button interactions
- Visual state changes
- Game status messages

## 🎓 Learning Outcomes

Perfect for beginners learning:

- DOM manipulation & selection
- Event handling (click listeners)
- Game state management
- JavaScript functions & logic
- Conditional statements & loops
- Random number generation
- Array & object usage
- CSS styling & layouts

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/username/dice-game.git
cd dice-game

# Open in browser
open index.html
# or double-click index.html
```

## 🎯 Gameplay Features

### Interactive Elements

- **Roll Button** - Generate random dice number
- **Hold Button** - Bank current turn score
- **Reset Button** - Start new game
- **Score Display** - Current & total scores
- **Player Indicator** - Shows whose turn it is

### Game States

- Starting state (0 points)
- Active turn (rolling & accumulating)
- Bust state (rolled a 1)
- Hold state (saved score)
- Win state (reached 100)

## 📊 Game Flow

```
Start Game
    ↓
Player 1 Rolls
    ↓
Score Accumulated (if not 1)
    ↓
Hold or Roll Again?
    ├→ Hold: Save score, Switch player
    └→ Roll: Continue turn
    ↓
Check if Won?
    ├→ Yes: Declare Winner
    └→ No: Next Player's Turn
```

## 🔄 Future Enhancements

- [ ] Difficulty levels
- [ ] AI opponent
- [ ] Leaderboard system
- [ ] Sound effects
- [ ] Different game modes
- [ ] Mobile app version
- [ ] Multiplayer online support
- [ ] Score history

## 📝 Best Practices Used

- Clean & readable code
- Proper function organization
- Meaningful variable names
- Comments for clarity
- Responsive design
- Accessibility considerations

## 🐛 Common Issues & Solutions

**Issue: Score not updating**
- Clear browser cache
- Refresh the page
- Check browser console for errors

**Issue: Buttons not working**
- Ensure JavaScript is enabled
- Check file paths are correct
- Verify all files in same directory

## 📚 Resources

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN Web Docs - DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 🎓 Educational Value

This project is excellent for:
- Learning game development basics
- Understanding event-driven programming
- Practicing DOM manipulation
- Building interactive UIs
- State management concepts
- Beginner to intermediate developers

## 📄 License

MIT License - Feel free to use and modify

## 👥 Contributing

Contributions welcome! Fork and submit pull requests with improvements.

## 🤝 Support

For questions or issues, open an issue on GitHub or contact the maintainer.

---

**Made with ❤️ for learning JavaScript** 🚀
