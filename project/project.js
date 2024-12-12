let quoteEnglish=document.querySelector(".quotes")
let jokeTelugu=document.querySelector(".jokes")
let input=document.getElementById("color")
let dataQuotes=[
         "Dream is not that which you see while sleeping it is something that does not let you sleep.",
         "It Is Very Easy To Defeat Someone, But It Is Very Hard To Win Someone",
         "Thinking is the capital, Enterprise is the way, Hard Work is the solution",
         "Man needs difficulties in life because they are necessary to enjoy success.",
         "Failure will never overtake me if my definition of success is strong enough.",
         "You see, God helps only people who work hard. That principle is very clear.",
         "Building capacity dissolves differences. It irons out inequalities.",
         "If you want to leave your footprints On the sands of time Do not drag your feet.",
         "If you want to shine like a sun, first burn like a sun.",
         "To succeed in your mission, you must have single-minded devotion to your goal.",
         "A big shot is a little shot who keeps on shooting, so keep trying.",
         "The only true wisdom is in knowing you know nothing.",
         "You cannot change your FUTURE, you can change your HABITS. And surely your HABITS will change your FUTURE",
         "Sometimes, it's better to bunk a class and enjoy with friends, because now, when I look back, marks never make me laugh, but memories do.",
         "Behind the parents stands the school, and behind the teacher the home.",
         "God has not promised Skies always blue, Flower-strewn pathways All our life through; God has not promised Sun without rain, Joy without sorrow, Peace without pain.",
         "When your hopes and dreams and goals are dashed, search among the wreckage, you may find a golden opportunity hidden in the ruins.",
];


let dataJokes=[
          "మనిషి: టీ 4 రూపాయలు కదా? బిచ్చగాడు: నాకూ, నా లవర్ కీ. మనిషి: బిచ్చగాడు కి లవర్ ఆ? బిచ్చగాడు: ప్రేమికుడు వచ్చాకే బిచ్చగాడు అయ్యను...బాబు",
          "తండ్రి: పక్కంటి అమ్మయిని చూడరా, 1 వ తరగతి లో పాస్ అయింది...... కొడుకు: అలా చూడటం వల్లే,నేను ఫెయిల్ అయింది.",
          "ఇంటర్వ్యూ చేసే ఆఫీసర్: మిస్టర్ ఏంటిది? ఇంటర్వ్యూకి వచ్చిన వాడివి కూచుని అడిగిన వాటికి సమాధానాలు చెప్పాలి గాని ఇలా అటూ ఇటూ నడుస్తున్నావేంటి?  అభ్యర్ధి: మీరిచ్చిన ఏడ్ లో వాక్ ఇన్ ఇంటర్వ్యూ అని ఉంది కద సార్. అందుకని ",
          "భర్త: భార్యా భర్తలిద్దరూ జీవితంలో కష్టసుఖాల్ని చెరి సగం పంచుకోవాలి తెలుసా? భార్య: అందుకే కదండీ కష్టసుఖాల్లో మొదటి సగం అంటే కష్టం మీకొదిలేసి రెండో సగం సుఖం నేను పంచుకుంటున్నాను.",
          "ఓ రాజకీయ నాయకుడు (సభ ముగిసేక) : ఏంటోయ్ సెక్రటరీ వీళ్ళంతా నా వెనకబడ్డారు? సెక్రటరీ: వెనుక బడిన వాళ్ళందరికీ ఋణాలిప్పిస్తానని ఇప్పుడు మీరే కద సర్ చెప్పేరు. అందుకని..... ",
          "తండ్రి (కొడుకుతో): నీ ప్రవర్తనవల్ల నాకెంత తలవంపుగా ఉందో తెలుసా? కొడుకు: లేదు నాన్నా! నీ తల బాగానే ఉంది. వంపుగా లేదు ",
          "తండ్రి(కొడుకుతో): ఒరేయ్ పెద్దా, చిన్నాలేకుండా నోటికొచ్చినట్లు మాట్లాడేయడమేనా? కొడుకు: నోటికొచ్చినట్లు మాట్లాడకపోతే రానివి ఎలా మాట్లాడుతాను నాన్నా? ",
          "తల్లి: ఏంట్రా నానీ చేస్తున్నావ్? కొడుకు: నాన్నగారు అన్నయ్యకు పొట్ట పొడిచినా అక్షరం ముక్క లేదన్నారు. పొడిచిచూస్తున్నా ఎక్కడైనా ఉందేమోనని.",
          " తండ్రి ( కిరాణా షాప్ వాడితో ) : ఏమోయ్ ఓ కేజీ కందిపప్పుఇయ్యి. కొడుకు: అదేంటి నాన్నా ఆమధ్య నీ పప్పులు మా దగ్గర ఉడకవ్ అని మళ్ళీ ఇతని దగ్గరే కందిపప్పు తీసుకుంటున్నారు? ",
          "ఓ వ్యక్తి: అతను నాతో మాట్లాడినప్పుడల్లా చేతులు నలుపుకుంటూ మాట్లాడుతాడు. ఎంత వినయమో? రెండో వ్యక్తి: వినయమా పాడా? నిన్నునలపలేక చేతులు నలుపుకుంటున్నాడు. ",
          "తల్లి: మీ అన్నయ్యకు రెక్కలొచ్చివెళ్లిపోయేడురా కొడుకు: ఆ మధ్య నాన్నగారు కూడా అంకుల్ తో ఇదేమాట అన్నారు. మరి నాకెప్పుడొస్తాయమ్మా రెక్కలు? ",
          "మహేష్ : మీ ఆవిడ నోరు చెడ్డది కాదంటున్నావ్. గయ్యాళి కాదంటున్నావ్.మరేంటి నీ బాధ? సతీష్ : మా ఆవిడ నోరు చెడ్డది కాదు. మహా చెడ్డది. గయ్యాళి కాదు పరమ గయ్యాళి. అదే నా బాధ. ",
];


function generateQuote(){
const a=Math.floor(Math.random() *dataQuotes.length)
quoteEnglish.textContent=dataQuotes[a]
jokeTelugu.textContent=""
}
function generateJoke(){
    const b=Math.floor(Math.random() *dataJokes.length)
    jokeTelugu.textContent=dataJokes[b]
    quoteEnglish.textContent=""
}

// function colorChange(z){
//     console.log(z);

//     if(z.key === "Enter"){
//         document.body.style.background=`${input}`
//     }
// }

input.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        let colorValue=input.value.trim();
        document.body.style.backgroundColor=`${colorValue}`
    }
})



