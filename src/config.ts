/**
 * DATA & CONFIGURATION SECTION
 * ==========================================
 * Hi Tulika! You can edit any of the text, phrases, bingo items,
 * and image URLs right here in this file.
 */

export interface PhotoConfig {
  id: string;
  url: string; // Set this to your photo path/URL when ready! e.g., '/photos/kapil-funny.jpg'
  alt: string;
  label: string;
}

export const APP_CONFIG = {
  // Names
  boyfriendName: "kapil",
  myName: "tulika",
  city: "delhi",

  // Photos & Placeholders
  photos: {
    funny: {
      id: "kapil-funny-photo",
      url: "/images/image 1.jpeg",
      alt: "funny kapil photo",
      label: "kapil peeking"
    },
    sleepy: {
      id: "kapil-sleepy-photo",
      url: "",
      alt: "sleepy kapil photo",
      label: "sleepy kapil (authorized break)"
    },
    hungry: {
      id: "kapil-hungry-photo",
      url: "",
      alt: "hungry kapil photo",
      label: "dangerously hungry kapil"
    },
    unimpressed: {
      id: "kapil-unimpressed-photo",
      url: "",
      alt: "unimpressed kapil photo",
      label: "kapil being unimpressed"
    },
    coupleSoft: {
      id: "couple-soft-photo",
      url: "/images/couple-soft-photo.jpeg",
      alt: "tulika and kapil sweet photo",
      label: "tulika & kapil"
    }
  } as Record<string, PhotoConfig>,

  // Opening Screen Text
  opening: {
    title: "hello, boyfriend",
    subtitle: "you are officially mine for the day. please cooperate.",
    btn1: "yes, obviously",
    btn1Response: "correct answer.",
    btn2: "yes, but I would like it noted that I had no choice",
    btn2Response: "your objection has been recorded and ignored."
  },

  // Delhi Day Pass Text
  dayPass: {
    title: "kapil’s trial pass",
    guest: "kapil",
    host: "tulika",
    validity: "one whole day, which is still not enough",
    includes: "food, walking, photos, nonsense and affection",
    doesNotInclude: "complaining about how many photos tulika takes",
    terms: "plans may change because tulika may change her mind",
    btnAccept1: "accept happily",
    btnAccept2: "accept while pretending I had a choice",
    confirmation: "day pass activated. good luck."
  },

  // Main Menu Header
  menuHeader: {
    title: "one day with you",
    subtitle: "I made this because apparently saying “I am excited to see you” was not enough. so now there is a website."
  },

  // Delhi Bingo Items (9 items)
  bingoItems: [
    "tutu cries",
    "kannu says “balle balle”",
    "kannu says “dal makhani”",
    "tutu gives more kisses than promised",
    "tutu asks for a gift",
    "tutu asks kannu to collect the order from the door",
    "tutu asks “do you love me?”",
    "kannu gets distracted",
    "tutu asks for one more hug"
  ],

  // Things Kapil Says (Phrases & Comments)
  kapilPhrases: [
    "bro listen to me...",
    "I am actually very fast at walking",
    "tulika where are we going now?",
    "let me handle this",
    "are you taking another photo?",
    "I told you this would happen",
    "is food nearby or should I panic?",
    "just two more minutes"
  ],

  tulikaComments: [
    "yes, we know. you have mentioned it.",
    "said with complete confidence and limited evidence.",
    "a kapil original. repeated daily.",
    "the vocabulary department remains concerned.",
    "somehow, he has said it again.",
    "historic words from a historic man."
  ],

  // Classified Cards
  classifiedCards: [
    {
      id: "card-1",
      title: "open after breakfast",
      isLocked: false,
      lockedMessage: "nice try. access denied.",
      unlockedContent: "📍 destination 1: hot chole bhature / coffee spot & walking around central delhi without complaining!"
    },
    {
      id: "card-2",
      title: "open at 4:00 pm",
      isLocked: true,
      lockedMessage: "tulika has not authorised this level of curiosity.",
      unlockedContent: "☕ 4:00 pm secret mission: cozy cafe break, mandatory cake testing, and 14 new photos of kapil."
    },
    {
      id: "card-3",
      title: "open when tulika says so",
      isLocked: true,
      lockedMessage: "nice try. access denied.",
      unlockedContent: "🎁 special clue: a small hand-written note or souvenir hidden in tulika's bag for kapil!"
    },
    {
      id: "card-4",
      title: "absolutely do not click",
      isLocked: false,
      lockedMessage: "",
      unlockedContent: "you were specifically told not to click this.\n\nI admire the consistency."
    }
  ],

  // Secret Page Note
  secretPage: {
    paragraphs: [
      "I don’t think there has been a single day when I haven’t thought about you. Every day, I looked forward to July and to the day you would finally be here.",
      "Every time we texted, called, or video called, I wished I could just be in front of you. Not even holding your hand or hugging you. Just sitting there, looking at you, smiling, and being there.",
      "And now that the day is finally here, a part of me is already thinking about how to make it stop. Because I don’t know when I will see you again, and that part really breaks me. But at least there is hope. I know I will see you again. I don’t know what charm you have brought into my life, or what kind of magic this is, but somehow, being with you makes everything feel lighter.",
      "I wanted to surprise you and try doing something that is usually your thing. I don’t know whether I have succeeded or impressed you, but this is my very small attempt to step into your world and make something that is only for you.",
      "There has never been any doubt about how much I love you. But I still want to say this clearly: I will always be there for you. Not because I have to. Because I want to. Always."
    ],
    btnText: "return to headquarters"
  },

  // Final Screen Stats
  finalScreen: {
    title: "wife trial results",
    stats: [
      { label: "tutu cried", value: "100%" },
      { label: "kannu got fed", value: "yes" },
      { label: "cuddles delivered", value: "more than agreed" },
      { label: "slaps received", value: "deserved" },
      { label: "plans followed", value: "loosely" },
      { label: "wife trial result", value: "suspiciously successful" },
      { label: "outcome", value: "extension required" }
    ],
    btnText: "extend the trial",
    approvedHeader: "wife trial results",
    finalMessage: "approved. please arrange the next visit."
  }
};
