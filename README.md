# Minecraft Server Website

This project is a simple website for displaying the status of a Minecraft server and providing a way to copy the server IP address to the clipboard.

## Project Structure

```
minecraft-server-website
├── src
│   ├── assets
│   │   └── styles.css        # CSS styles for the website
│   ├── components
│   │   ├── ServerStatusWidget.js  # Displays the server status
│   │   └── CopyToClipboardButton.js # Button to copy server IP
│   ├── index.html            # Main HTML document
│   └── main.js               # Entry point for JavaScript
├── package.json              # npm configuration file
└── README.md                 # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd minecraft-server-website
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the website**:
   You can use a local server to run the website. For example, you can use `live-server` or any other static server of your choice.

4. **Open your browser**:
   Navigate to `http://localhost:PORT` (replace PORT with the port number used by your server) to view the website.

## Features

- **Server Status Widget**: Displays whether the Minecraft server is online or offline.
- **Copy to Clipboard Button**: Allows users to easily copy the server IP address to their clipboard.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is open-source and available under the [MIT License](LICENSE).