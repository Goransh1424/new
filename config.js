/* =====================================
   BIRTHDAY WEBSITE CONFIGURATION
   =====================================
   
   🎉 HOW TO CUSTOMIZE THIS WEBSITE:
   
   1. Edit the values below with your own data
   2. Add your photos to the "images" folder
   3. Open index.html in a browser to see your changes!
   
   ===================================== */

const CONFIG = {
  // ===== NAMES =====
  // The birthday person's name
  recipientName: "Lovepreet",

  // Your name (the person giving this gift)
  senderName: "Goransh",

  // ===== BIRTHDAY DATE & TIME =====
  // Set the exact date and time for the countdown
  birthday: {
    year: 2026,
    month: 2,    // 1 = January, 12 = December
    day: 5,
    hour: 0,      // 0-23 (midnight = 0, noon = 12)
    minute: 0
  },

  // ===== THEME =====
  // Customize the look and feel
  theme: {
    // Main emoji used throughout (🌹 rose, 💖 heart, � sunflower, etc.)
    emoji: "💖",
    // Accent color (examples: "hsl(340, 100%, 70%)" for pink, "hsl(45, 100%, 50%)" for gold)
    accentColor: "hsl(340, 100%, 70%)"
  },

  // ===== LOVE LETTER =====
  // The heartfelt message on the surprise page
  loveLetter: {
    // Opening line
    greeting: "Dear Bhindi,",

    // Main paragraphs - add as many as you want!
    paragraphs: [
      "Every moment with you feels like a warm sunrise, painting my world in colors I never knew existed. As you celebrate another year of your beautiful journey, I want you to know how incredibly special you are to me.",

      "Your laugh is the melody that brightens even my darkest days. Your kindness touches everyone around you, creating ripples of warmth that spread far and wide. The way you see the world, with such curiosity and wonder, reminds me to appreciate the little miracles we often overlook.",

      "I made this little surprise to celebrate not just your birthday, but the amazing person you are every single day. You inspire me to be better, to love deeper, and to cherish each moment we share together.",

      "Thank you for being you — for your courage, your compassion, your infectious joy, and for making life an adventure worth living. Here's to you, to us, and to all the beautiful memories yet to come.",

      "Happy birthday, my love. You deserve all the happiness in the world, today and every day."
    ],

    // Closing signature
    closing: "With all my heart,"
  },

  // ===== REASONS I LOVE YOU =====
  // List of reasons (aim for at least 20-30!)
  reasons: [
    { title: "Your laugh", description: "lights up any room." },
    { title: "Your kindness", description: "gentle to everyone around you." },
    { title: "Your courage", description: "inspires me daily." },
    { title: "Your curiosity", description: "makes life an adventure." },
    { title: "Your hugs", description: "the best place in the world." },
    { title: "Your smile", description: "beautiful as a rose, warming my world." },
    { title: "Your voice", description: "music to my ears." },
    { title: "Your passion", description: "drives you to achieve amazing things." },
    { title: "Your intelligence", description: "fascinates and challenges me." },
    { title: "Your creativity", description: "brings beauty into everything you touch." },
    { title: "Your strength", description: "inspires me to be better." },
    { title: "Your patience", description: "especially with me." },
    { title: "Your eyes", description: "I could get lost in them forever." },
    { title: "Your determination", description: "nothing stops you from reaching your goals." },
    { title: "Your sense of humor", description: "makes even tough days bearable." },
    { title: "Your empathy", description: "you truly understand how others feel." },
    { title: "Your confidence", description: "you own who you are." },
    { title: "Your loyalty", description: "I know you'll always be there." },
    { title: "Your optimism", description: "you find light in the darkest moments." },
    { title: "Your spontaneity", description: "keeps life exciting and unpredictable." },
    { title: "Your wisdom", description: "beyond your years." },
    { title: "Your honesty", description: "I can always count on the truth from you." },
    { title: "Your energy", description: "contagious and uplifting." },
    { title: "Your gentleness", description: "the way you handle everything with care." },
    { title: "Your ambition", description: "pushes me to dream bigger too." },
    { title: "Your playfulness", description: "brings out my inner child." },
    { title: "Your grace", description: "in how you move through life." },
    { title: "Your warmth", description: "like sunshine on a cold day." },
    { title: "Your generosity", description: "you give so much of yourself." },
    { title: "Your resilience", description: "you bounce back from anything." },
    { title: "Your uniqueness", description: "there's nobody else like you." },
    { title: "Your presence", description: "makes everything better just by being there." }
  ],

  // ===== WHY SHE'S THE BEST =====
  // Special qualities that make her the best girlfriend
  specialQualities: [
    { title: "Supportive", description: "She always stands by me through ups and downs." },
    { title: "Thoughtful", description: "Notices the little things that make me smile." },
    { title: "Adventurous", description: "Turns ordinary days into memories." },
    { title: "Kind-hearted", description: "Compassionate to everyone she meets." },
    { title: "Fun-loving", description: "Laughs easily and makes life joyful." },
    { title: "Understanding", description: "Always listens without judgment." },
    { title: "Caring", description: "Shows love in countless little ways every day." },
    { title: "Genuine", description: "Authentically herself, never pretending to be someone else." },
    { title: "Encouraging", description: "Believes in me even when I doubt myself." },
    { title: "Beautiful inside and out", description: "Her inner beauty shines even brighter than her outer beauty." },
    { title: "Beautiful like a rose", description: "Just like a rose, she brings beauty and love to my life every day." }
  ],

  // ===== PHOTO SLIDESHOW =====
  // Add your photos here. Place image files in the "images" folder.
  // Format: { src: "filename.jpg", caption: "Short title", description: "Longer description" }
  photos: [
    { src: "photo1.jpg", caption: "Best moment", description: "A beautiful moment together." },
    { src: "photo2.jpg", caption: "Sweet times", description: "Making memories with you." },
    { src: "photo3.jpg", caption: "Special day", description: "You make every day special." },
    { src: "photo4.jpg", caption: "Beautiful moment", description: "Another cherished memory." },
    { src: "photo5.jpg", caption: "Together", description: "Every moment with you." },
    { src: "photo6.jpg", caption: "Happy times", description: "Making memories together." },
    { src: "photo7.jpg", caption: "Love", description: "Your smile brightens my world." },
    { src: "photo8.jpg", caption: "Adventures", description: "Every adventure with you." },
    { src: "photo9.jpg", caption: "Joy", description: "Creating beautiful memories." },
    { src: "photo10.jpg", caption: "Laughter", description: "You make every day brighter." },
    { src: "photo11.jpg", caption: "Precious", description: "Time with you is precious." },
    { src: "photo12.jpg", caption: "Treasure", description: "Each memory is a treasure." },
    { src: "photo13.jpg", caption: "Unforgettable", description: "Moments I'll never forget." },
    { src: "photo14.jpg", caption: "Happiness", description: "You bring joy to my life." },
    { src: "photo15.jpg", caption: "Wonderful", description: "Every experience with you." },
    { src: "photo16.jpg", caption: "Cherished", description: "Times I'll always cherish." },
    { src: "photo17.jpg", caption: "Our story", description: "Our beautiful love story." },
    { src: "photo18.jpg", caption: "Grateful", description: "Grateful for every moment." },
    { src: "photo19.jpg", caption: "Perfect", description: "We're perfect together." },
    { src: "photo20.jpg", caption: "Forever", description: "My love grows stronger every day." }
  ],

  // ===== MUSIC =====
  // Background music files (place in "music" folder)
  music: {
    mainSong: "song.mp3",        // Plays when "Start the magic" is clicked
    slideshowSong: "song1.mp3"   // Plays during slideshow
  },

  // ===== COUNTDOWN PAGE MESSAGE =====
  countdownMessage: "Counting down to my special moment",

  // ===== LEAD MESSAGE =====
  // The subtitle on the surprise page header
  leadMessage: "You make every day brighter — this one is all for you."
};

// ===== DO NOT EDIT BELOW THIS LINE =====
// Helper function to format date for display
CONFIG.getFormattedDate = function () {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  return `${this.birthday.day} ${months[this.birthday.month - 1]} ${this.birthday.year}`;
};

// Helper to get JavaScript month (0-indexed)
CONFIG.getJSMonth = function () {
  return this.birthday.month - 1;
};

// Helper to replace {name} placeholders
CONFIG.replaceName = function (text) {
  return text.replace(/{name}/gi, this.recipientName);
};
