/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        apple: ["-apple-system","BlinkMacSystemFont","Segoe UI","Helvetica","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji"]
      },
      fontSize: {

      },
      backgroundColor: {
        "header": "#161b22",
        "white-1": "#f0f6fc",
        "black-side": "#0d1117",
        "black-2": "#21262d"
      },
      textColor: {
        "white-1": "#f0f6fc",
        "gray": "#8b949e",
        "white-gray": "#c9d1d9"
        
      },
      borderColor: {
        "light": "#30363d",
        "dark": "#f0f6fc1a"
      }
    },
  },
  plugins: [],
}
