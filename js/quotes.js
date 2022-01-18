const quotes = [
  {
    quote: "You'll never find a rainbow if you're looking down.",
    author: "Charlie Chaplin"
  },
  {
    quote: "Only I can change my life, no one can do it for me.",
    author: "Carol Burnett"
  },
  {
    quote: "Live the life you love, love the life you live.",
    author: "Bob Marley"
  },
  {
    quote: "I’d rather be hated for who I am than be loved for who I am not.",
    author: "Kurt Cobain"
  },
  {
    quote: "Always, always, always believe in yourself, because if you don’t, then who will, sweetie?",
    author: "Marilyn Monroe"
  },
  {
    quote: "Today's special moments are tomorrow's memories.",
    author: "Aladin"
  },
  {
    quote: "Life is a journey to be experienced, not a problem to be solved.",
    author: "Winnie the Pooh"
  },
  {
    quote: "Don't close your eyes, Look! The reality of fear can be different than you think.",
    author: "Finding NEMO"
  },
  {
    quote: "All one can do is the next right thing.",
    author: "Frozen"
  },
  {
    quote: "If today is the worst day of your life, then you know tomorrow will be better.",
    author: "The Lion King"
  },
  {
    quote: "No more hiding, I gotta seize my moment.",
    author: "Coco"
  },
  {
    quote: "You can't be happy everyday. But there are happy things every day.",
    author: "Winnie the Pooh"
  },
  {
    quote: "We need to fail. We need to fail down here so we don't fail up there.",
    author: "Neil Armstrong, First man"
  },
  {
    quote: "All boundaries are conventions, waiting to be transcended.",
    author: "Cloud Atlas, 2012"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;