# 🥁 JS Drum Kit

A simple browser-based drum kit built with vanilla HTML, CSS, and JavaScript. Press keys on your keyboard to trigger different drum sounds, with a visual "pop" animation on the corresponding key.

## Demo

Live Demo: https://muhammadabdullah81.github.io/JavaScript-Drum-kit/

Press the keys **A, S, D, F, G, H, J, K, L** on your keyboard to play different drum sounds. Each key press highlights the matching on-screen key with a glowing border and scale animation.

## Features

- 🎹 Keyboard-triggered audio playback
- ✨ Animated visual feedback when a key is pressed
- 🎨 Styled UI with a background image and glowing highlight effect
- 🔊 9 different drum sounds mapped to keys

## Key Mapping

| Key | Sound     |
|-----|-----------|
| A   | Clap      |
| S   | Hihat     |
| D   | Kick      |
| F   | Open Hat  |
| G   | Boom      |
| H   | Ride      |
| J   | Snare     |
| K   | Tom       |
| L   | Tink      |

## Project Structure

```
.
├── index.html          # Main HTML markup and audio elements
├── style.css            # Styling and animations
├── app.js                # Key press and audio playback logic
├── background.jpg   # Background image (add your own)
└── sounds/                # Folder containing .wav audio files
    ├── clap.wav
    ├── hihat.wav
    ├── kick.wav
    ├── openhat.wav
    ├── boom.wav
    ├── ride.wav
    ├── snare.wav
    ├── tom.wav
    └── tink.wav
```

## How It Works

1. Each drum pad `<div>` has a `data-key` attribute matching a keyboard key's `keyCode`.
2. Each `<audio>` element also has a matching `data-key` attribute pointing to its sound file.
3. On `keydown`, `handleKeyPress` looks up the pressed key's code, finds the matching pad and audio element, adds a `playing` class to animate the pad, and plays the sound from the start (`currentTime = 0`) so rapid repeat presses always restart the sound.
4. When the CSS `transform` transition finishes, the `transitionend` event fires `removeTransition`, which removes the `playing` class so the pad can animate again on the next press.

## Getting Started

1. Clone or download this project.
2. Make sure you have a `sounds/` folder with the required `.wav` files and a `background.jpg` image in the project root (update paths in `app.js`/`style.css` if yours differ).
3. Open `index.html` directly in your browser, or serve it with a local dev server.
4. Click anywhere on the page (some browsers require a user interaction before audio can play) and start pressing keys!

## Browser Notes

- Some browsers block autoplay/audio until the user interacts with the page at least once.
- `keyCode` is used for key detection; it's deprecated in favor of `event.code` / `event.key`, but still widely supported. Consider migrating for long-term compatibility.

## Possible Improvements

- Replace deprecated `keyCode` with `event.code` for future-proofing.
- Add on-screen click/tap support in addition to keyboard input, for mobile users.
- Add volume controls or a mute toggle.
- Add a visual waveform or metronome/tempo feature.

## License

Free to use and modify for personal or educational projects.
