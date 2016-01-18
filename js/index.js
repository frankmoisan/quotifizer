$(document).ready(function() {
  var randomQuote;
  var fullQuote;
  var twitterQuote;
  var quotes = [
    "KHAAAAAAAAAAAAN!|Captain James T. Kirk, Star Trek II: The Wrath of Khan",
    "To be, or not to be.|General Chang, Star Trek VI: The Undiscovered Country",
    "So say we all!|Commander William Adama, Battlestar Galactica",
    'There is an old Vulcan proverb: "Only Nixon could go to China."|Captain Spock, Star Trek VI: The Undiscovered Country',
    "Make it so.|Captain Jean-Luc Picard, Star Trek: The Next Generation",
    "We have done the impossible, and that makes us mighty.|Captain Malcom Reynolds, Firefly",
    "Try not. Do, or do not. There is no try.|Yoda, Star Wars: The Empire Strikes Back",
    "Roads? Where we're going, we don't need roads.|Doc Emmet Brown, Back to the Future",
    "Where we're going, we don't need eyes to see.|Doctor Weir, Event Horizon",
    "A man is defined by his actions, not his memories.|Kuato, Total Recall",
    "This is your receipt for your husband... and this is my receipt for your receipt.|Officer, Brazil",
    "I am fearful when I see people substituting fear for reason.|Klaatu, The Day the Earth Stood Still",
    "Come on, you apes! You wanna to live forever?|Lieutenant Johnny Rico, Starship Troopers",
    "The enemy can not push a button... if you disable his hand. Medic!|Career Sergeant Zim, Starship Troopers",
    "I need a corporal. You're it, until you're dead or I find someone better.|Jean Rasczak, Starship Troopers",
    "Join the Mobile Infantry and save the Galaxy. Service guarantees citizenship. Would you like to know more?|Announcer, Starship Troopers",
    "With the first link, the chain is forged. The first speech censored, the first thought forbidden, the first freedom denied, chains us all irrevocably.|Captain Jean-Luc Picard, Star Trek: The Next Generation",
    "I'm nobody's puppet.|Dominar Rigel XVI, Farscape",
    "Ah, screw it. But I am not Kirk, Spock, Luke, Buck, Flash or Arthur frelling Dent. I'm Dorothy Gale from Kansas.|John Crichton, Farscape",
    "When a woman, whether she's a wife, a lover, or a slave you've purchased to be a wife or lover, leaves you repeatedly... take the hint.|Dominar Rigel XVI, Farscape",
    "They don't get excited in general, General. It's like an entire planet of accountants.|Colonel Jack O'Neill, Stargate",
    "Doing nothing is very hard to do... you never know when you're finished.|Leslie Nielsen",
    "We're sorry to bother you at such a time like this. We would have come earlier, but your husband wasn't dead then.|Sergeant Frank Drebin, Detective Lieutenant, Police Squad",
    "Well, you take a big chance getting up in the morning, crossing the street, or sticking your face in a fan.|Sergeant Frank Drebin, Detective Lieutenant, Police Squad",
    "I am the very model of a Scientist Salarian. I've studies species Turian, Asari, and Batarian. I'm quite good a genetics. It's a subset of biology because I am an expert, which I know is a tautology. My xenoscience studies range from urban to agrarian. I am the very model of a Scientist Salarian!|Mordin, Mass Effect 2",
    "Had to be me. Someone else might have gotten it wrong.|Mordin, Mass Effect 3",
    "Your time is precious. Spend it wisely and with those who care for you.|Samara, Mass Effect 2",
    "This is all Joker's fault! What a tool he was! Now I have to spend all day computing Pi because he plugged in the overlord.|Joker, Mass Effect 2",
    "After time adrift among open stars, among tides of light and to shoals of dust, I will return to where I began.|Tali'Zorah Vas Normandy, Mass Effect 2",
    "Human history is written in a litany of blood shed over differing opinions of government and afterlife.|Legion, Mass Effect 2",
    "Maybe you're right. Maybe we can't win this. But we'll fight you regardless! Just like we did Sovereign. Just like I'm doing now! However insignificant we may be. We will fight! We will sacrifice! And we will find a way! That's what humans do!|Commander Shepard, Mass Effect 2",
    "That thing you burned up isn't important to me; it's the fluid catalytic cracking unit. It makes shoes for orphans... nice job breaking it, hero.|GLaDOS, Portal",
    "The Enrichment Center is required to remind you that the Weighted Companion Cube cannot talk. In the event that it does talk The Enrichment Centre asks you to ignore its advice.|GLaDOS, Portal",
    "I'll be honest - we're throwing science at the wall here to see what sticks. No idea what it'll do. Probably nothing. Best-case scenario, you might get some superpowers. Worst case, some tumors, which we'll cut out.|Cave Johnson, Portal 2",
    "THERE ARE FOUR LIGHTS!|Captain Jean-Luc Picard, Star Trek: The Next Generation",
    "Your words are as empty as your future. I am the vanguard of your destruction. This exchange is over.|Sovereign, Mass Effect",
    "You must construct additional pylons!|Protoss Overseer, Starcraft"
  ];

  getNewQuote();

  function getNewQuote() {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    fullQuote = randomQuote.split('|');
    $('.quote').text(fullQuote[0]);
    $('.author').text('-- ' + fullQuote[1]);
    
    twitterQuote = '"' + fullQuote[0].split(' ').join('+') + '" #quotifizer http://codepen.io/frankmoisan/full/Vvebyr';
    
    $('#btnTwitterShare').attr('href', 'https://twitter.com/intent/tweet?text=' + twitterQuote);
    console.log($('#btnTwitterShare').attr('href'));
  };

  $('#btnNewQuote').on('click', function() {
    getNewQuote();
  });
  
});