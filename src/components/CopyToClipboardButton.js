function CopyToClipboardButton() {
    const serverIP = "your.server.ip"; // Replace with your actual server IP

    const copyToClipboard = () => {
        navigator.clipboard.writeText(serverIP).then(() => {
            alert("Server IP copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };

    return (
        <button onClick={copyToClipboard}>
            Copy Server IP
        </button>
    );
}

export default CopyToClipboardButton;