const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a, div')

for(let i = 0; i < text.length; i++) {
    if(text[i].innerHTML.includes('Word1')) {
        text[i].innerHTML = text[i].innerHTML.replace('Word1', 'Word2')
    }
}
