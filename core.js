function processData() {
    let inputText = document.getElementById('inputArea').value;
    let lines = inputText.split('\n').map(line => line.trim()).filter(line => line.match(/^[^@\s]+@[^@\s]+\.[^@\s]+:[^:\s]+$/));

let uniqueLines = new Set();
    let duplicateLines = new Set();
    let duplicateEmails = new Set();
    let duplicatePasswords = new Set();
    let shortPasswords = new Set();

    let emailSet = new Set();
    let passSet = new Set();

    let start = performance.now();

    lines.forEach(line => {
        let [email, password] = line.split(':');

        if (uniqueLines.has(line)) {
            duplicateLines.add(line);
        } else {
            uniqueLines.add(line);
       }

        if (emailSet.has(email)) {
            duplicateEmails.add(email);
        } else {
            emailSet.add(email);
        }

        if (passSet.has(password)) {
            duplicatePasswords.add(password);
        } else {
            passSet.add(password);
        }

        if (password.length < 4) {
            shortPasswords.add(line);
        }
    });

    let end = performance.now();
    let totalTime = (end - start) / 1000;

    document.getElementById('uniqueEntries').value = Array.from(uniqueLines).join('\n');
    document.getElementById('duplicateLines').value = Array.from(duplicateLines).join('\n');
    document.getElementById('duplicateEmails').value = Array.from(duplicateEmails).join('\n');
    document.getElementById('duplicatePasswords').value = Array.from(duplicatePasswords).join('\n');
    document.getElementById('shortPasswords').value = Array.from(shortPasswords).join('\n');
    document.getElementById('originalCount').textContent = lines.length;
    document.getElementById('uniqueCount').textContent = uniqueLines.size;
    document.getElementById('trashCount').textContent = lines.length - uniqueLines.size;
    document.getElementById('totalTime').textContent = totalTime.toFixed(10);
}

function sortUnique(order) {
   let uniqueLines = Array.from(document.getElementById('uniqueEntries').value.split('\n'));

    switch (order) {
        case 'az':
            uniqueLines.sort();
            break;
        case 'za':
            uniqueLines.sort().reverse();
            break;
        case 'smallest':
            uniqueLines.sort((a, b) => a.length - b.length);
            break;
        case 'biggest':
            uniqueLines.sort((a, b) => b.length - a.length);
            break;
        case 'random':
            uniqueLines.sort(() => Math.random() - 0.5);
