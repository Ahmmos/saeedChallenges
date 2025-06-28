const challenges = [
    "Do 10 Push Ups",
    "Call Someone and say Hi",
    "Pretend to Pick your nose",
    "Smell your feet",
    "Give the one next to you a Hug",
    "Run",
    "Drink water",
    "Stay quiet for 1 round",
    "Eat a cookie",
    "Bark like a dog",
    "Dance on a song",
    "Shake hands with the one on your left",
    "Tell a joke",
    "Act like a monkey",
    "Scream", //15
    "Do a silly face for 1 round.",
    "Talk like a robot for 3 rounds",
    "Close your eyes for 1 rounds",
    "Do 10 high knees",
    "Carry the one on your right",// 20
    "Carry the one on your left",
    "Name 5 things in the room that starts with the letter 'S'",
    "Spell your name backward",
    "Solve the following Math problem  5+3+7=? in 30 seconds",
    "Do 5 jumping jacks", // 25
    "Spin a virtual wheel around the room",
    "Hop on One foot 10 times",
    "Stand on one foot for 30 seconds",
    "Decode a scrambled word (Y - N - U - N - F)",
    "Say a sentence without using the letter 'E'", // 30
    "Swap one of your completed challenges with another player",
    "Balance a book on your head and walk",
    "Hum a tune and let the other players guess the song",
    "Draw a picture with your eyes closed",
    "Close your eyes and identify an item by touching it", // 35
    "Clean up the room",
    "Hold a plank for 30 seconds",
    "Crawl under furniture without touching it",
    "Spin around 10 times and try to walk in a straight line",
    "Toss a ball into a bucket from across the room", //40
    "Do a quick sketch of another player in 2 minutes",
    "Write one of the other players name in the air and let the other players guess the answer",
    "Name 10 countries in under a minute",
    `Spell this word 'supercalifragilisticexpialidocious' `, //…answer is 'super·cali·fragil·is·tic·ex·pi·ali·do·cious'
    "Find all objects in the room that are blue within 60 seconds", //45
    "Recite the alphabet backward",
    "Count the number of books in a room from memory",
    "Walk backward for 30 seconds without bumping into anything",
    "Balance a spoon on your nose",
    "Make the funniest face you can", // 50
    "Pass a balloon between team members without using hands",
    "Guess the mystery word 'MOBILE PHONE' while another player gives clues, you choose the player",
    "Whisper a message around the group and see how it changes",
    "Take turns adding words to create a story",
    "Form a human pyramid.", // 55
    "Guess the smell while blindfolded",
    "Count how many steps are in the house",
    "Share a funny story about an object in the room",
    "Fold clothes and stack them quickly",
    "Teach others a phrase in a new language",
    "Name objects in the room in another language", // 60
    "talk without moving your lips.",
    "Wear socks on your hands for 1 round",
    "Make the longest 'moo' sound possible",
    "Mimic someone else's laugh and let the other players guess who was is the player.",
    "Walk like a crab", // 65
    "Act like you're stuck in slow motion",
    "kiss your elbow",
    "Do your best chicken impersonation while crossing the living room",
    "Walk around while pretending the floor is lava",  // 70
    "Give a 'weather report' for inside your house",
    "Wear all your clothes backward and act completely normal for 5 minutes",
    "Speak only using animal noises for 2 rounds",
    "Create a hat using as many household items as possible and wear it proudly",
    "Crawl across the floor while pretending you're a worm", // 75
    "Try to blow a balloon without using your hands",
    `Pretend you're lost in a desert and dramatically "search" for water.`,
    "Build a nest out of cushions and sit in it like you're a bird",
    "Become a detective and dramatically investigate who last touched the TV remote",
    "Act like a spaghetti noodle that just escaped from the boiling water", // 80
    "Pretend you're underwater and move like a jellyfish",
    "Wrap a blanket around yourself and act like an ancient philosopher giving a speech",
    "Act like you have travelled back in time and met the pharaohs",
    "Perform a dramatic monologue about why socks always go missing in the laundry",
    "Act as if you're a magnet and stick to random metal objects", // 85
    "Stand on one leg and read a book out loud but replace every 'and' with 'moo'.",
    "Mimic how a penguin would walk in super high heels.",
    "Pretend to be a wizard and cast the most ridiculous spell on everyone.",
    "Try to balance five random objects while blindfolded.",
    "Attempt to have a conversation with a wall", // 90
    "Walk backward while pretending to carry an invisible but very heavy box",
    "Pretend you're a pancake and try to flip yourself over",
    "Crawl across the floor like a crab and challenge others to a race",
    "Pretend you're a zombie",
    "Convince everyone that you are an alien who's just arrived on Earth", // 95
    "Conduct a fashion show using clothes arranged ridiculously",
    "Create an awkward dance move and name it after a random food",
    "Imagine you're invisible and mess with others",
    "Pretend you're a spy and must sneak across the room without making a sound.",
    "Act as if you're being chased by a swarm of invisible bees don't get stung!", // 100
    `Pretend you're a piece of toast popping out of a toaster, Yell "I'm done!" when you jump.`,
    "Read a book upside",
    "Pretend you're a goldfish out of water and flop around",
    "Crawl around and act like you're stuck in an invisible spider web",
    "Stand perfectly still and act like a mannequin while everyone tries to make you laugh.", // 105
    'Sit like royalty and demand everyone call you "Your Majestic Donkey."',
    "Pretend you're a cat stuck in a tree and meow for help",
    "Act like a grandMa/Pa looking for her glasses but they're already on your head.",
    "Pretend you're a robot that has just run out of batteries and needs to recharge",
    "Pretend you're a superhero who has lost their powers and must find them again",// 110
    "Pretend you're a pirate looking for buried treasure in the room",
    "Pretend the floor is made of ice, and slip and slide everywhere",
    "Do 10 squats",
    "Decode a scrambled word (P - P - H - Y - A)",
    "Solve the following Math problem  5x3+5=? in 30 seconds", // 115
    "Pretend to be a waiter/waitress and take snack orders from everyone",
    "Try to carry four items at once, but one of them must be balanced on your head.",
    "Do 10 Sit Ups",
    "Pretend to be a chicken laying an egg.",
    "Pretend to be a statue and freeze in place for 1 minute", // 120
];

document.getElementById("getChallengeButton").addEventListener("click", () => {
    const challengeNumberInput = document.getElementById("challengeNumber");
    const challengeDisplay = document.getElementById("challengeDisplay");
    const challengeNumber = parseInt(challengeNumberInput.value);

    if (challengeNumber >= 1 && challengeNumber <= challenges.length) {
        challengeDisplay.textContent = challenges[challengeNumber - 1]; // Arrays are 0-indexed
    } else {
        challengeDisplay.textContent =
            "Please enter a number between 1 and " + challenges.length + ".";
    }
});

document
    .getElementById("getRandomChallengeButton")
    .addEventListener("click", () => {
        const challengeDisplay = document.getElementById("challengeDisplay");
        const randomIndex = Math.floor(Math.random() * challenges.length);
        challengeDisplay.textContent = challenges[randomIndex];
    });
