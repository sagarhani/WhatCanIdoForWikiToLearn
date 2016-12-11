json =  {
    selection: [
        {name:"share your Knowlege", question:"You want", agree:"Tell me more", disagree:"No, not really", types:[
            {name:"Computer Science", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Next please", 
            discription:"Create new topics and courses.", url: "https://en.wikitolearn.org/Computer_Science"},
            {name:"Mathematics", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Never in million years", 
            discription:"Create new topics and courses.", url: "https://en.wikitolearn.org/Mathematics"},
            {name:"Physics", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Whatever", 
            discription:"Create new topics and courses.", url: "https://en.wikitolearn.org/Physics"},
            {name:"Business", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Next please", 
            discription:"Create new topics and courses.", url: "https://en.wikitolearn.org/Business"},
            {name:"Engineering", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Boring", 
            discription:"Create new topics and courses.", url: "https://en.wikitolearn.org/Engineering"},
            {name:"Humanities", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Pfff, whatever", 
            discription:"Create new topics and courses.", url: "https://en.wikitolearn.org/Humanities"},
            {name:"Medicine", question:"What's your area of expertise?", agree:"Tell me more", disagree:"No, not interested", 
            discription:"Create new topics and courses.", url: "https://en.wikitolearn.org/Medicine"},
            {name:"Natural Sciences", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Boring", 
            discription:"Create new topics and courses.", url: "https://en.wikitolearn.org/NaturalSciences"},
            {name:"Social Sciences", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Next please", 
            discription:"Create new topics and courses.", url: "https://en.wikitolearn.org/SocialSciences"},
            {name:"Pre-University", question:"What's your area of expertise?", agree:"Tell me more", disagree:"No, not really", 
            discription:"Create new topics and courses.", url: "https://en.wikitolearn.org/Pre-University"},
        ]},
        {name:"Developing", question:"Where can you help?", agree:"Tell me more", disagree:"Boring", types:[
            {name:"Web Developing", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Next please", 
            discription:"in Python, PHP, CSS, HTML and JS", url: "https://meta.wikitolearn.org/Web_development"},
            {name:"Templates", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Boring", 
            discription:"The Templates Working Group is a working group which handles and manages templates on WikiToLearn.", url: "https://meta.wikitolearn.org/Templates_Working_Group"},
            {name:"Offline Content Generation", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Whatever", 
            discription:"", url: "https://meta.wikitolearn.org/Offline_Content_Generation"},
            {name:"Infrastructure and bots", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Not in your life", 
            discription:"", url: "https://meta.wikitolearn.org/Infrastructure_and_bots"},
            {name:"Hacker", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Never in million years", 
            discription:"", url: "https://en.wikitolearn.org/Hacker"},
            {name:"TeX Importing", question:"What's your area of expertise?", agree:"Tell me more", disagree:"Pfff, whatever", 
            discription:" We are developing the TeXLa lib to convert LaTeX sources to MediaWiki pages. ", url: "https://meta.wikitolearn.org/TeX_Importing"}
        ]},
        {name:"Community work", question:"Where can you help?", agree:"Tell me more", disagree:"No, not interested", types:[
            {name:"join WikiToLearn chat", question:"So you like helping other people?", agree:"Tell me more", disagree:"Next please", 
            discription:"Join our chat to take part on conversations.", url: "https://chat.wikitolearn.org"},
            {name:"help users on chat", question:"So you like helping other people?", agree:"Tell me more", disagree:"Whatever", 
            discription:"", url: "https://chat.wikitolearn.org"},
            {name:"Sprints", question:"So you like helping other people?", agree:"Tell me more", disagree:"Boring", 
            discription:"get-together with other people and work on a project for a week or two", url: "https://meta.wikitolearn.org/Sprints"},
            {name:"Hackathons", question:"So you like helping other people?", agree:"Tell me more", disagree:"No, not really", 
            discription:"(Hack Day)", url: "https://meta.wikitolearn.org/Hackathons"}
        ]},
        {name:"Editing", discription:"Write some content or edit some pages.", question:"Where can you help?", agree:"Tell me more", disagree:"Boring", types:[
            {name:"Official Templates", question:"What would you like to do?", agree:"Tell me more", disagree:"Never in million years", 
            discription:"", url: "https://meta.wikitolearn.org/Category:Official_Templates"},
            {name:"Templates", question:"What would you like to do?", agree:"Tell me more", disagree:"Boring", 
            discription:"The Templates Working Group is a working group which handles and manages templates on WikiToLearn.", url: "https://meta.wikitolearn.org/Templates_Working_Group"},
            {name:"Editing conventions", question:"What would you like to do?", agree:"Tell me more", disagree:"Next please", 
            discription:"", url: "https://meta.wikitolearn.org/Editing_conventions"},
            {name:"Contents review: not supported commands", question:"What would you like to do?", agree:"Tell me more", disagree:"Not interested", 
            discription:"", url: "http://meta.wikitolearn.org/Contents_review:_not_supported_commands"},
        ]}
    ]
}

var startAt = 0;
var selected = -2;
function loadContent () {
    agreeButton = document.getElementById("agreeLabel");
    disagreeButton = document.getElementById("disagreeLabel");
    backButton = document.getElementById("backButton");
    questionElement = document.getElementById("question");
    subjectElement = document.getElementById("subject");
    discriptionElement = document.getElementById("discription");
    disagreeLoadNext();
}

function agreeLoadNext () {
    if(selected !== -2) {
        location.href = json.selection[startAt].types[selected].url;
    } else {
        selected = -1;
        backButton.style.display = "inherit";        
        startAt--;
        if(startAt == -1) startAt = json.selection.length-1;
        disagreeLoadNext();
    }
}

function disagreeLoadNext () {
    if (selected !== -2) {        
        if(selected == json.selection[startAt].types.length-1) selected = 1
        else selected++; 
        jsonElement = json.selection[startAt].types[selected];
    } else {
        jsonElement = json.selection[startAt];
        if(startAt == json.selection.length-1) startAt = 0
        else startAt++; 
    }
    subject = jsonElement.name;
    if(jsonElement.agree) agree = jsonElement.agree
    else agree = "Yes"; 
    if(jsonElement.disagree) disagree = jsonElement.disagree
    else disagree = "No";
    if(jsonElement.discription) discription = jsonElement.discription
    else discription = " ";
    if(jsonElement.question) question = jsonElement.question
    else question = "You are good in";
    discriptionElement.innerHTML = discription;
    questionElement.innerHTML = question;
    agreeButton.innerHTML = agree;
    disagreeButton.innerHTML = disagree;
    subjectElement.innerHTML = subject;
}

function backLoadPrev() {
    selected = -2;
    backButton.style.display = "none";  
    disagreeLoadNext();
}