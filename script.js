const backgrounds = document.getElementById("#background")
let btn = document.getElementById('#newquotes');
let bibleBooks = document.getElementById('#book');
let nQ= document.getElementById('#quote');


const quotes = [
    {
        newBooks: "1 Corinthians 13:4-7",
        newQuote: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres."
    },
    {
        newBooks: "2 Timothy 1:7",
        newQuote: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline."
    },
    {
        newBooks: "John 3:16",
        newQuote: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
    },
    {
        newBooks: "Philippians 4:13",
        newQuote: "I can do all things through Christ who strengthens me.",
    },
    {
        newBooks: "Romans 8:28",
        newQuote: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."
    },
    {
        newBooks: "Proverbs 3:5-6",
        newQuote: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
    },
    {
        newBooks: "Psalm 23:1",
        newQuote: "The Lord is my shepherd; I shall not want."
    },
    {
        newBooks: "Isaiah 40:31",
        newQuote: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    },
    {
        newBooks: "Matthew 6:33",
        newQuote: "But seek first his kingdom and his righteousness, and all these things will be given to you as well."
    },
    {
        newBooks: "Hebrews 11:1",
        newQuote: "Now faith is confidence in what we hope for and assurance about what we do not see."
    },
    {
        newBooks: "2 Timothy 1:7",
        newQuote: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    },
    {
        newBooks: "James 1:2-4",
        newQuote: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.",
    },
    {
        newBooks: "Romans 12:2",
        newQuote: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.",
    },
    {
        newBooks: "Ephesians 2:8-9",
        newQuote: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast."
    },
    {
        newBooks: "Joshua 1:9",
        newQuote: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."
    },
    {
        newBooks: "Isaiah 41:10",
        newQuote: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."
    },
    {
        newBooks: "1 Peter 5:7",
        newQuote: "Cast all your anxiety on him because he cares for you."
    },
    {
        newBooks: "Psalm 119:105",
        newQuote: "Your word is a lamp for my feet, a light on my path."
    },
    {
        newBooks: "2 Corinthians 5:7",
        newQuote: "For we live by faith, not by sight."
    },
    {
        newBooks: "Matthew 11:28-30",
        newQuote: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light."
    },
    {
        newBooks: "Galatians 5:22-23",
        newQuote: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law."
    },
    {
        newBooks: "Romans 8:37",
        newQuote: "No, in all these things we are more than conquerors through him who loved us."      
    },
    {
        newBooks: "Isaiah 40:31",
        newQuote: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."
    },
    {
        newBooks: "2 Corinthians 2:14",
        newQuote: "But thanks be to God, who always leads us as captives in Christ’s triumphal procession and uses us to spread the aroma of the knowledge of him everywhere."
    },
    {
        newBooks: "Hebrews 2:13",
        newQuote: "And again, 'I will put my trust in him.' And again he says, 'Here am I, and the children God has given me."
    },
    {
        newBooks: "Proverbs 3:5-6",
    	    newQuote: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
    }
]

let newBackground = [
    {
        img: "url(assets/14490.jpg)"
    },
    {
       img: "url(assets/826953.jpg)"
    },
    {
        img: "url(assets/999948.jpg)"
    },
    {
        img: "url(assets/5477484.jpg)"
    },
    {
       img: "url(assets/10868592.jpg)"
    },
    {
        img: "url(assets/10868596.jpg)"
    },
    {
        img: "url(assets/10868598.jpg)"
    },
    {
        img: "url(assets/10868599.jpg)"
    },
    {
        img: "url(assets/10868601.jpg)"
    },
    {
        img: "url(assets/10868606.jpg)"
    },
    {
        img: "url(assets/10868617.jpg)"
    },
    {
        img: "url(assets/10868621.jpg)"
    },
    {
        img: "url(assets/10868672.jpg)"
    },
    {
        img: "url(assets/10868735.jpg)"
    },
    {
        img: "url(assets/10868764.png)"
    },
    {
        img: "url(assets/10880172.jpg)"
    },
    {
        img: "url(assets/10880383.jpg)"
    },

]

newquotes.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    book.textContent = quotes[random].newBooks
    quote.textContent = quotes[random].newQuote
    let randomBackground = Math.floor(Math.random() * newBackground.length);
    background.style.backgroundImage = newBackground[randomBackground].img
})
console.log(quotes.length)
console.log(newBackground.length)