# Word to Number Converter

A web application that converts word-based numbers (e.g., "Three hundred million") into numeric values (e.g., 300,000,000). The app supports multipliers up to "trillion" and provides an intuitive, browser-based interface. It leverages HTML and CSS for the frontend, and uses Python (via Pyodide) to run the conversion logic directly in the browser—no server-side code required.

## Features

- **Supports large numbers:** Handles word-based numbers up to "trillion."
- **Comma-formatted output:** Displays results with thousands separators (e.g., 300,000,000).
- **User-friendly UI:** Clean and simple interface for entering numbers and viewing results.
- **Runs entirely in the browser:** Uses Pyodide to execute Python code client-side.
- **Graceful error handling:** Invalid inputs display clear error messages.

## Setup Instructions

To run the Word to Number Converter locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/word-to-number-converter.git
   ```
2. **Navigate to the `src/` folder:**
   ```bash
   cd word-to-number-converter/src
   ```
3. **Start a local server:**
   > A local server is required because the app uses the fetch API to load the Python file (browser security restrictions prevent loading files directly from disk).
   ```bash
   python -m http.server 8000
   ```
4. **Open the app in your browser:**
   ```
   http://localhost:8000/index.html
   ```

## Usage

1. Enter a word-based number such as `Three hundred million` in the input field.
2. Click the **Convert** button.
3. The result will be displayed below, for example: `300,000,000`.
4. If the input is invalid or cannot be parsed, a helpful error message will be shown.

## Folder Structure

```
word-to-number-converter/
└── src/
    ├── index.html         # Main entry point with the UI and Pyodide integration
    ├── styles.css         # Styles for the user interface
    └── word_to_number.py  # Python logic for converting words to numbers
```

- **index.html:** Provides the main user interface and loads Pyodide to run Python in the browser.
- **styles.css:** Contains all CSS styles for layout and appearance.
- **word_to_number.py:** Implements the core logic to convert word-based numbers to numeric values.

## Limitations

- **Local server required:** Due to browser security restrictions (CORS), you must run a local server to use the app (the fetch API cannot load files from the local filesystem directly).
- **Pyodide overhead:** Loading Pyodide and its WebAssembly assets may take additional time, especially on slower connections or devices.

## Future Improvements

- **Support for compound numbers:** Enhance parsing to support words like "twenty-one" or "one hundred and five."
- **Server-side implementation:** Optionally provide a backend (e.g., Flask) for environments where Python execution in the browser is not suitable.
- **Expanded language support:** Add support for other languages or regional number systems.
- **Mobile optimizations:** Improve the interface for mobile and tablet users.

---

Feel free to open issues or contribute enhancements to this project!
