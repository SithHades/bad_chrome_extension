const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a, div')

for(let i = 0; i < text.length; i++) {
    if(text[i].innerHTML.includes('Hurensohn')) {
        text[i].innerHTML = text[i].innerHTML.replace('Hurensohn', 'Sohn einer räudigen Straßendirne')
    }
}