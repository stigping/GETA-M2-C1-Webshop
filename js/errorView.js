function showError() {
    appDiv.innerHTML = `
    <div>
        <p>Du har ikke tilgang til denne siden</p>
    </div>
    <button onclick="showA()">Returner til Home?</button>
    `;
}