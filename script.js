// A list of Kanye quotes (you can add more)
const quotes = [
  "I miss the old Kanye.",
  "I am the greatest human artist of all time.",
  "Sometimes I get emotional over fonts.",
  "Shut the fuck up I know what I'm doing.",
  "Burn that Excel spreadsheet.",
  "I feel like I'm too busy writing history to read it.",
  "I’m nice at ping pong.",
  "I'm a creative genius and there's no other way to word it.",
  "I speak with the universe.",
  "I want a house built with only windows.",
  "Fur pillows are hard to actually sleep on.",
  "I make awesome decisions in bike stores.",
  "Yes I am personally rich and I can buy furs and houses for my family.",
  "I feel like a meme before memes existed.",
  "Do you know who I am? I am Kanye West.",
  "I am running for president.",
  "I wish I could run across a beach into my own arms.",
  "Everything I do is for the future.",
  "People say I have a huge ego. I say I'm a god.",
  "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible.",
  "I don’t like the word 'rapper'.",
  "Don't ask me a question about something I didn't speak about.",
  "I refuse to negotiate with furniture.",
  "I am Warhol. I am Shakespeare in the flesh.",
  "I'm not even a real person. I'm a legend.",
  "I feel like superheroes don't feel pain.",
  "In the future, everyone will be Kanye for 15 minutes.",
  "My greatest pain in life is that I'll never see myself perform live.",
  "I’m too busy being a visionary.",
  "Everything is my fault, except the things that aren’t.",
  "I love some of Gaga’s songs, WTF does she know about cameras?",
  "He was a Jewish doctor, can't you see this damn coat??",
  "I am Shakespeare in the flesh, Google Walt Disney Nike.",
  "I could walk through a mall and see the future in the shoes.",
  "My toaster understands me better than most people.",
  "The sun doesn’t set on me, I set on the sun.",
  "I am the sun, the moon, and the Twitter feed.",
  "I can rap in 17 dimensions at once.",
  "My reflection argues with me sometimes.",
  "I’m a VR, AR, MR, Kanye-R experience.",
  "I only eat air that believes in me.",
  "The Louvre called, they want my selfies in there.",
  "I make clouds nervous.",
  "I saw the past yesterday and it apologized.",
  "I am allergic to normality.",
  "I can hear the emojis typing.",
  "Even gravity bows to my ideas."
];



function getQuote() {
  // Pick a random index
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Display the quote
  document.getElementById("quote").innerText = `"${quotes[randomIndex]}" `;
}
