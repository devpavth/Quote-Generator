let btn=document.querySelector('#new-quote');
let quote=document.querySelector(".quote");
let person=document.querySelector(".person");

const quotes=[{
    quote:`"The way you think, the way you behave, the way you act, determines your karma."`,
    person:`Dr S Radhakrishnan`
},{
    quote:`"Love is an ever-fixed mark that looks on tempests and is never shaken."`,
    person:` William Shakespeare`
},{
    quote:`"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person:`Winston Churchill`
},{
    quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person:`Nelson Mandela`
},{
    quote:`"Happiness is not something ready-made. It comes from your own actions." `,
    person:` Dalai Lama`
},{
    quote:`"In the middle of every difficulty lies opportunity."`,
    person:`Albert Einstein`
},{
    quote:`"In the end, we will remember not the words of our enemies, but the silence of our friends."`,
    person:`Martin Luther King Jr.`
},{
    quote:`"The only limit to our realization of tomorrow will be our doubts of today."`,
    person:`Franklin D. Roosevelt`
},{
    quote:`"Life is really simple, but we insist on making it complicated."`,
    person:`Confucius`
},{
    quote:`"Your time is limited, don't waste it living someone else's life."`,
    person:`Steve Jobs`
}
];

btn.addEventListener("click",function(){

    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})