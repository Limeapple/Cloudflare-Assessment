/**
 * The html rewritter
 * @type {HTMLRewriter}
 */
const Cookies = require('js-cookie')

const rewriter = new HTMLRewriter()
    .on('title', { element: e => e.setInnerContent("CloudFlare Assessment") })
    .on('h1', { element: e => e.prepend( "How do programmers get rich? Inheritence")})
    .on('p#description', { element: e => e.setInnerContent("Kevin Liu") })
    .on('a#url', { 
      element: e => e.setInnerContent("Here's my Github!")
        .setAttribute("href", "https://github.com/Limeapple") 
    });
  
    let variants = []
//randomly redirecting user to website
 function handleRequest(request) {
    Cookies.set("web1", variants[0], {expires: 1})
    Cookies.set("web2", variants[1], {expires: 1})
    if(Math.random()<.5){
        return fetch(("https://cfw-takehome.developers.workers.dev/variants/1"))
        .then(res => rewriter.transform(res));     
    } 
    else{
    return fetch(("https://cfw-takehome.developers.workers.dev/variants/2"))
    .then(res => rewriter.transform(res));   
  }
 
}


addEventListener('fetch', event => {
    //fetching for the two web addresses
    fetch('https://cfw-takehome.developers.workers.dev/api/variants')
    .then(response => response.json())
    .then(data => {
      variants = data.variants
  })   

  event.respondWith(handleRequest(event.request))
})