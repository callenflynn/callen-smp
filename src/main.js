// filepath: minecraft-server-website/src/main.js

import { ServerStatusWidget } from './components/ServerStatusWidget.js';
import { CopyToClipboardButton } from './components/CopyToClipboardButton.js';

document.addEventListener('DOMContentLoaded', () => {
    const serverStatusContainer = document.getElementById('server-status');
    const copyButtonContainer = document.getElementById('copy-button');

    // Initialize the server status widget
    const serverStatusWidget = ServerStatusWidget();
    serverStatusContainer.appendChild(serverStatusWidget);

    // Initialize the copy to clipboard button
    const copyButton = CopyToClipboardButton('YOUR_SERVER_IP_HERE');
    copyButtonContainer.appendChild(copyButton);
});