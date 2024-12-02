const btn = document.querySelector("#oneMore");
let quote = document.querySelector("#quote");
let person = document.querySelector("#name");

const listOfQuotes = [
    {
        quote:'"Life is like riding a bicycle. To keep your balance, you must keep moving."',
        name:"~Albert Einstein"
    },
    {
        quote:'"Be the change that you wish to see in the world."',
        name:"~Mahatma Gandhi"
    },
    {
        quote:'"If Miracles Only Happen Once What Are They Called The Second Time?"',
        name:"~Ichigo Kurosaki"
    },
    {
        quote:'"Power comes in response to a need, not a desire"',
        name:"~Son Goku"
    },
    {
        quote:'"It always seems impossible until it’s done."',
        name:"~Nelson Mandela"
    },
    {
        quote:'"I have a dream that one day this nation will rise up and live out the true meaning of its creed:" '+"'We hold these truths to be self-evident, that all men are created equal.'",
        name:"~Martin Luther King Jr."
    },
    {
        quote:'"Imperfection is beauty, madness is genius and it’s better to be absolutely ridiculous than absolutely boring."',
        name:"~Marilyn Monroe"
    },
    {
        quote:'"No one can make you feel inferior without your consent."',
        name:"~Eleanor Roosevelt"
    },
    {
        quote:'"All our dreams can come true, if we have the courage to pursue them."',
        name:"~Walt Disney"
    },
    {
        quote:'"Be yourself; everyone else is already taken."',
        name:"~Oscar Wilde"
    },
    {
        quote:'"Not all of us can do great things. But we can do small things with great love."',
        name:"~Mother Teresa"
    },
    {
        quote:'"As long as i live...There are INFINITE chances to WIN"',
        name:"~Monkey D Luffy"
    },
    {
        quote:'"It does not matter how slowly you go as long as you do not stop."',
        name:"~Confucius"
    },
    {
        quote:'"The secret of getting ahead is getting started."',
        name:"~Mark Twain"
    },
    {
        quote:'"We know what we are, but know not what we may be."',
        name:"~William Shakespeare"
    },
    {
        quote:'"As long as i live...There are INFINITE chances to WIN"',
        name:"~Monkey D Luffy"
    },
    {
        quote:'“Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.”',
        name:"~Friedrich Nietzsche"
    }
]

btn.addEventListener("click",function(e){
    let event = e.target;
    let random = Math.floor(Math.random()*(listOfQuotes.length));
    // console.log(random);
    quote.innerHTML = "<em>"+listOfQuotes[random].quote+"</em>";
    person.innerHTML = "<em>"+listOfQuotes[random].name+"</em>";
    // console.log(quote)
    // console.log(person)

})