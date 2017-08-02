// var app = function () {
//   var hideQOTD = document.getElementById('quote-of-the-day')
//   hideQOTD.hidden = true
//
//   var articleColor = document.getElementsByTagName("article")
//
//   Array.from(articleColor).forEach(function(article){
//     article.className = "blue-quote"
//   })
// }
//
// window.addEventListener('load', app);

var addQuote = function(author, quoteText) {
  var quoteArticle = createQuoteArticle();
  var blockquote = createBlockQuote(quoteText);
  var cite = createCite(author);

  appendElements(quoteArticle, blockquote, cite);
}

var  createQuoteArticle = function(){
  var article = document.createElement("article")
  article.classList.add('quote')
  return article
}

var createBlockQuote = function(quoteText) {
  var blockquote = document.createElement("blockquote")
  blockquote.innerText =  quoteText
  return blockquote
}

var createCite = function(author) {
  var cite = document.createElement("cite")
  cite.innerText = " " + author
  return cite
}

var appendElements = function(quoteArticle, blockquote, cite) {
  var quotes = document.querySelector("#quotes")
  quoteArticle.appendChild(blockquote)
  blockquote.appendChild(cite)
  quotes.appendChild(quoteArticle)
}

var app = function () {
addQuote("Reece", "Who loves cats")
}

var addQuote = function(author, quote) {

}
//
// var getBlock = function () {
// preventDefault()
// // getBlock(author, quote)
// // addQuote("Reece", "Who loves cats")
// }


window.addEventListener('load', app);
window.addEventListener('submitting', getBlock);
