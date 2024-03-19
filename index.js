const secret = {
    encrypt: {
        e: 'enter',
        i: 'imes',
        a: 'ai',
        o: 'ober',
        u: 'ufat'
    },
    decrypt: {
        enter: 'e',
        ai: 'a',
        imes: 'i',
        ober: 'o',
        ufat: 'u'
    }
}

function encrypt() {
    let text = document.getElementById('textarea').value
    if (!text.length) {
        alert('O campo de texto não pode estar vazio.')
    } else if (checkText(text)) {
        alert('Apenas letras minúsculas e sem acento.')
    } else {
        const encryptSecret = secret.encrypt

        for (key in encryptSecret) {
            text = text.replaceAll(key, encryptSecret[key])
        }

        updateResult(text)
    }
}

function decrypt() {
    let text = document.getElementById('textarea').value

    if (!text.length) {
        alert('O campo de texto não pode estar vazio.')
    } else if (checkText(text)) {
        alert('Apenas letras minúsculas e sem acento.')
    } else {
        const decryptSecret = secret.decrypt

        for (key in decryptSecret) {
            text = text.replaceAll(key, decryptSecret[key])
        }
    
        updateResult(text)
    }
}

function updateResult(text) {
    let resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('empty')
    document.getElementById('result-content').innerText = text
}

function clearResult(event) {
    text = event.target.value
    let resultContainer = document.getElementById('result-container');

    if (text.length < 1) {
        resultContainer.classList.add('empty')
    }
}

function populateResult() {
    let text = document.getElementById('textarea').value

    resultContent.innerText = text
}

document.getElementById('textarea').addEventListener('input', e => clearResult(e))

async function addToClipboard() {
    const text = document.getElementById('result-content').innerText

    await navigator.clipboard.writeText(text)

    alert('Texto copiado!')
}

function checkText(text) {
    const regex = /[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ]/;
  
    return regex.test(text);
  }