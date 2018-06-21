/* Arrays for Questions */
var questionList = [{question: "Which African country shares a border with Chad?", choices: ["Nigeria", "Egypt", "Mali", "Ethiopia"], cAnswer: "Nigeria"},
            {question: "What is the name of the islands south of Argentina?", choices: ["Hispaniola", "The Falkland Islands", "The Galapagos Islands", "Labrador"], cAnswer: "The Falkland Islands"},
            {question: "What continent is Turkey in?", choices: ["North America", "Europe and Asia", "Africa", "South America"], cAnswer: "Europe and Asia"},
            {question: "What state is on the East Coast of the USA?", choices: ["Maryland", "Ohio", "Kentucky", "California"], cAnswer: "Maryland"},
            {question: "Lisbon and Madrid are capital cities on what peninsula?", choices: ["Anatolia", "Brest", "Iberian", "Kola"], cAnswer: "Iberian"},
            {question: "What are the three largest countries in the world based on square kilometers?", choices: ["Russia, China, USA", "Russia, USA, Brazil", "China, Brazil, Canada", "India, Russia, Australia"], cAnswer: "Russia, China, USA"},
            {question: "How many oceans have been discovered on Earth's moon?", choices: ["4", "7", "3", "0"], cAnswer: "0"},
            {question: "Which of these cities has the smallest population?", choices: ["Houston", "Chicago", "Los Angeles", "New York"], cAnswer: "Houston"},
            {question: "What is the Netherlands often called?", choices: ["Nethers", "Netherlandian", "Holland", "Dutch"], cAnswer: "Holland"},
            {question: "Which of these countries was NOT in the USSR?", choices: ["Azerbaijan", "Ukraine", "Turkmenistan", "Iraq"], cAnswer: "Iraq"},
            {question: "Cajun Country is a region in which state?", choices: ["Louisiana", "Alabama", "Mississippi", "Texas"], cAnswer: "Louisiana"},
            {question: "What state contains the cities of Peoria, Springfield, and Du Quoin?", choices: ["Florida", "Illinois", "New York", "Texas"], cAnswer: "Illinois"},
            {question: "What trail did Lewis and Clark travel?", choices: ["The Mississippi River trail", "The Missouri trail", "The Oregon trail", "Angel's Rest trail"], cAnswer: "The Oregon trail"},
            {question: "What city crosses two continents?", choices: ["Mexico City", "Istanbul", "Siberia", "Dubai"], cAnswer: "Istanbul"},
            {question: "Which of the 50 states is the beaver state?", choices: ["Colorado", "Washington", "Idaho", "Oregon"], cAnswer: "Oregon"},
            {question: "Which one of these states contains the 'Mackinaw Bridge'?", choices: ["Michigan", "Ohio", "Georgia", "Colorado"], cAnswer: "Michigan"},
            {question: "What country is the 'Running with the Bulls' held in?", choices: ["Mexico", "Guatemala", "Spain", "El Salvador"], cAnswer: "Spain"},
            {question: "Which mountain has the greatest vertical distance from base to summit?", choices: ["Mount Fuji", "Mount Everest", "Mount Kilamanjaro", "Mount McKinley"], cAnswer: "Mount McKinley"},
            {question: "What is the largest ecosystem on Earth?", choices: ["Oceans", "Rivers", "Bees", "Forests"], cAnswer: "Oceans"},
            {question: "Which of these countries shares a land border with Turkey?", choices: ["Greece", "Ukraine", "Romania", "Macedonia"], cAnswer: "Greece"},
            {question: "What is emetiphobia?", choices: ["Fear of Death", "Fear of the Ocean", "Fear of Vomit", "Fear of Public Speaking"], cAnswer: "Fear of Vomit"},
            {question: "What common substance is scientifically known as H2O?", choices: ["Salt", "Oil", "Sugar", "Water"], cAnswer: "Water"},
            {question: "Why do sloths crawl to the bottom of the tree once a week?", choices: ["Waste elimination", "To eat berries", "To change trees", "To mate"], cAnswer: "Waste elimination"},
            {question: "What animal is similar and often experimented on as if it were a human?", choices: ["Cow", "Pig", "Horse", "Chicken"], cAnswer: "Pig"},
            {question: "What is the proper name for a doctor who works with cancer patients?", choices: ["Oncologist", "Radiologist", "Cardiologist", "Optometrist"], cAnswer: "Oncologist"},
            {question: "Which of the following animals cannot smell?", choices: ["Chimpanzees", "Elephants", "Dingos", "Dolphins"], cAnswer: "Dolphins"},
            {question: "On a prescription, BID means 'Twice a Day', TID means 'Three times in a day', and QID means 'Four times in a day'. What does PRN mean?", choices: ["Take with food", "Once a day", "Call a pharmacist", "Take as needed"], cAnswer: "Take as needed"},
            {question: "What does post op complications mean?", choices: ["Complications during a surgery", "Complications after a surgery", "Complications before a surgery", "None of these"], cAnswer: "Complications after a surgery"},
            {question: "Proteins are a group of?", choices: ["Glicids", "Polietilenoglicol", "Amino acids", "Fat acids"], cAnswer: "Amino acids"},
            {question: "What is a constant?", choices: ["The one thing that stays the same", "What you measure", "What you change on purpose", "Speed and direction"], cAnswer: "The one thing that stays the same"},
            {question: "What does an Epi pen treat?", choices: ["Anaphylaxis from an allergen", "Flu", "Heart disease", "Stains on clothes"], cAnswer: "Anaphylaxis from an allergen"},
            {question: "What is the symbol for iron the periodic table of elements?", choices: ["Fr", "Ir", "Fe", "Mg"], cAnswer: "Fe"},
            {question: "Which of these is a pervasive development disorder?", choices: ["Asperger's Syndrome", "Autism", "Fragile X Syndrome", "All of the above"], cAnswer: "All of the above"},
            {question: "Which metal is not known to be toxic?", choices: ["Polonium", "Mercury", "Francium", "Gallium"], cAnswer: "Gallium"},
            {question: "What do bears do in the winter?", choices: ["Hibernate", "Prowl for a mate", "Forage for food", "Give birth"], cAnswer: "Hibernate"},
            {question: "What enzyme starts digestion?", choices: ["Pepsin", "Salivary amylase", "Gastric lipase", "Bile"], cAnswer: "Salivary amylase"},
            {question: "What is wine mostly made of?", choices: ["Grapes", "Peaches", "Apples", "Plums"], cAnswer: "Grapes"},
            {question: "What does the shape of DNA most closely resemble?", choices: ["A single helix", "A straight line", "A double helix", "A circle"], cAnswer: "A double helix"},
            {question: "What artist/inventory was rumored to dabble in alchemy?", choices: ["Leonardo Davinci", "Mark Pummill", "Thomas Edison", "Nikita Kollof"], cAnswer: "Leonardo Davinci"},
            {question: "How does a roller coaster move?", choices: ["Magnets", "Gasoline", "Batteries", "Kinetic and potential energy"], cAnswer: "Kinetic and potential energy"},
            {question: "What ancient civilization built the Parthenon?", choices: ["Romans", "Mesopotamians", "Greeks", "Egyptians"], cAnswer: "Greeks"},
            {question: "According to the Qur'an, who is the final Prophet?", choices: ["Jesus", "Muhammad", "Ibrahim", "Adam"], cAnswer: "Muhammad"},
            {question: "What was George Washington's wife's name?", choices: ["Margaret", "Martha", "Maggie", "Margo"], cAnswer: "Martha"},
            {question: "Which set of famous people died on the same day?", choices: ["Galileo and William Harvey", "Ted Kennedy and Anne Frank", "Dennis Hopper and Neil Armstrong", "John D. Kennedy and Anthony Burgess"], cAnswer: "John D. Kennedy and Anthony Burgess"},
            {question: "What castle inspired Walt Disney to use as his Cinderella castle?", choices: ["Neuschwanstein", "Gutenberg", "Hohenzollern", "Heidelberg"], cAnswer: "Neuschwanstein"},
            {question: "Which countries were involved in the Cold War?", choices: ["Germany and America", "Russia and America", "Germany and Russia", "Iran and Iraq"], cAnswer: "Russia and America"},
            {question: "Which two presidents celebrate their birthdays on Presidents' Day in February?", choices: ["Lincoln and Washington", "Lincoln and Johnson", "Kennedy and Adams", "Washington and Roosevelt"], cAnswer: "Lincoln and Washington"},
            {question: "Vikings shipped their star or steering oar, on the right hand side of the ship, thus calling that ship what?", choices: ["Starboard", "Rightboard", "Freeboard", "Oarboard"], cAnswer: "Starboard"},
            {question: "What was the world's first version of paper?", choices: ["Papyrus", "Cards stock", "Lined paper", "Lozling"], cAnswer: "Papyrus"},
            {question: "In the battle of D. Day the allies stormed the beaches of...", choices: ["Sicily", "Hamburg", "Istanbul", "Normandy"], cAnswer: "Normandy"},
            {question: "What do the fifty stars on the US flag represent?", choices: ["The 50 states", "The 50 presidents", "The people", "Nothing"], cAnswer: "The 50 States"},
            {question: "How many Medieval atholic Crusades were there?", choices: ["4", "9", "6", "3"], cAnswer: "9"},
            {question: "What place did the Confederacy attack which was also named the first battle of the Civil War?", choices: ["Fort Ticonderoga", "Fort Sumter", "Chattanooga", "Fredericksburg"], cAnswer: "Fort Sumter"},
            {question: "What animal killed Cleopatra?", choices: ["Alligator", "Bear", "Snake", "Sting ray"], cAnswer: "Snake"},
            {question: "In the 1960s, how would the major television networks end their daily broadcast?", choices: ["Daily address from the President", "Playing the National Anthem", "Daily prayer", "Vice President speech"], cAnswer: "Playing the National Anthem"},
            {question: "Where was the Battle of the Alamo?", choices: ["Arizona", "California", "New York", "Texas"], cAnswer: "Texas"},
            {question: "What animal was considered to be sacred in ancient Egypt?", choices: ["Cobra", "Cat", "Falcon", "Crocodile"], cAnswer: "Cat"},
            {question: "What speech was written on the back of an envelope and given by the sixteenth president of the United States?", choices: ["The Declaration of Independence", "The US Constitution", "The Lincoln Address", "The Gettysburg Address"], cAnswer: "The Gettysburg Address"},
            {question: "What was the lifestyle of the Mongol Empire?", choices: ["Agriculturist", "Nomadic", "Fraternal", "Sheep herders"], cAnswer: "Nomadic"},
            {question: "Which English explorer founded North Carolina?", choices: ["Madam Caroline", "Sir Walter Raleigh", "Christopher Columbus", "King Charles III"], cAnswer: "Sir Walter Raleigh"},
            {question: "What is the name of the fish that accompanies Ariel in 'The Little Mermaid'?", choices: ["Bubbles", "Nemo", "Flounder", "Dory"], cAnswer: "Flounder"},
            {question: "Which famous actor played The Joker before Heath Ledger?", choices: ["Jim Carrey", "Jack Nicholson", "Ralph Fiennes", "Christian Slater"], cAnswer: "Jack Nicholson"},
            {question: "Who was the short, sharp-tongued waitress on 'Cheers'?", choices: ["Darla", "Marla", "Carla", "Sharla"], cAnswer: "Carla"},
            {question: "From the Disney movie about a dog named Bolt, who was Bolt's owner's name?", choices: ["Penny", "Ellie", "Emily", "Mindy"], cAnswer: "Penny"},
            {question: "What is the dog's name on Mickey Mouse?", choices: ["Pluto", "Penny", "Pal", "Polly"], cAnswer: "Pluto"},
            {question: "What was Winnie the Pooh's favorite thing to eat?", choices: ["Honey", "Cookies", "Berries", "Apples"], cAnswer: "Honey"},
            {question: "Who starred as Gregory House in the TV Show, House M.D.?", choices: ["Hugh Grant", "Hugh Hefner", "Chris Brown", "Hugh Laurie"], cAnswer: "Hugh Laurie"},
            {question: "In Aladdin, what is the tiger's name?", choices: ["Stripes", "Rajah", "Aboo", "Jafar"], cAnswer: "Rajah"},
            {question: "What was the name of the rooster in the 'Looney Tunes' cartoons?", choices: ["Yosemite Sam", "Hawkeye", "Foghorn Leghorn", "Featherin' Fred"], cAnswer: "Foghorn Leghorn"},
            {question: "Which 'Sex in the City' actress had their contract include a 'No Nudity' clause?", choices: ["Cynthia Nixon", "Sarah Jessica Parker", "Kim Catrall", "Kristin Davis"], cAnswer: "Sarah Jessica Parker"},
            {question: "Where was Superman born?", choices: ["Krypton", "Earth", "Mars", "Planet X"], cAnswer: "Krypton"},
            {question: "What question did the Schoolhouse Rock singers ask the train conductor in the hit song 'Conjunction Junction'?", choices: ["What's your function?", "Where's your pumpkin?", "Why are you jumpin'?", "How's your bumpin'?"], cAnswer: "What's your function?"},
            {question: "Who plays Po in the movie 'Kung Fu Panda'?", choices: ["Jack Black", "John Stevenson", "Dan Wagner", "Aaron Smith"], cAnswer: "Jack Black"},
            {question: "What kind of dog was 'Air Bud'?", choices: ["Golden Retriever", "Border Collie", "Chocolate Lab", "German Shepherd"], cAnswer: "Golden Retriever"},
            {question: "Which was not a character on the 1990s TV show 'Seinfeld'?", choices: ["Kramer", "Jerry", "Elaine", "Ross"], cAnswer: "Ross"},
            {question: "Which Disney princess disguised herself as a guy to help her country?", choices: ["Tiana", "Elsa", "Mulan", "Ariel"], cAnswer: "Mulan"},
            {question: "In the 'Lion King', why does Simba go to the elephant grave yard?", choices: ["He loved elephants", "To impress Nala", "To look for Hyenas", "To prove he's brave"], cAnswer: "To prove he's brave"},
            {question: "In the twelve days of Christmas, what are there seven of?", choices: ["Calling birds", "Golden rings", "Swans a swimming", "Dancers dancing"], cAnswer: "Swans a swimming"},
            {question: "Steve Harvey is the host of all of the following TV shows except?", choices: ["Family Feud", "Jeopardy", "Little Big Shots", "Steve Harvey Shows"], cAnswer: "Jeopardy"},
            {question: "Which song was sung by Queen?", choices: ["Take Me Home Tonight", "Man in the Mirror", "We Will Rock You", "Hey There Delilah"], cAnswer: "We Will Rock You"},
            {question: "At Super Bowl LI, who flipped the coin at the coin toss?", choices: ["George W Bush", "George H W Bush", "Rob Gronkowski", "Barack Obama"], cAnswer: "George H W Bush"},
            {question: "Who won the second ever Super Bowl?", choices: ["Packers", "Vikings", "Golden State Warriors", "Cavaliers"], cAnswer: "Packers"},
            {question: "What is an easier version of volleyball?", choices: ["T-Ball", "Kickball", "Lacross", "Newcomb"], cAnswer: "Newcomb"},
            {question: "What does 'throwing a pigskin' refer to?", choices: ["Throwing a tennis ball", "Throwing a soccer ball", "Throwing a baseball", "Throwing a football"], cAnswer: "Throwing a football"},
            {question: "What NFL football team is from Tennessee?", choices: ["Titans", "Lions", "Steelers", "Buccaneers"], cAnswer: "Titans"},
            {question: "In what sport are girls thrown into the air?", choices: ["Basketball", "Cheerleading", "Softball", "Rugby"], cAnswer: "Cheerleading"},
            {question: "What type of athlete is John Cena?", choices: ["Golfer", "Basketball player", "Wrestler", "Football player"], cAnswer: "Wrestler"},
            {question: "Which sport is not in the Winter Olympics?", choices: ["Figure skating", "Luge", "Swimming", "Downhill skating"], cAnswer: "Swimming"},
            {question: "Why do baseball players wear black under their eyes?", choices: ["To help with sun glare", "To intimidate other teams players", "It's a mandatory part of uniform", "To honor a teammate that just died"], cAnswer: "To help with sun glare"},
            {question: "What children's basketball game is named after an animal?", choices: ["Horse", "Dolphin tail", "Eagle speed threes", "Diesel weasel drills"], cAnswer: "Horse"},
            {question: "Who was the starting quarterback for the New Orleans Saints in Superbowl 44?", choices: ["Peyton Manning", "Drew Brees", "Aaron Brooks", "Brett Favre"], cAnswer: "Drew Brees"},
            {question: "Which of these sports is referenced by the popular slang phrase 'Ball is Life'?", choices: ["Football", "Baseball", "Bocce Ball", "Basketball"], cAnswer: "Basketball"},
            {question: "What sport involves skates?", choices: ["Soccer", "Baseball", "Hockey", "Basketball"], cAnswer: "Hockey"},
            {question: "How tall was Yao Ming?", choices: ["7 feet 4 inches", "7 feet 6 inches", "6 feet 1 inches", "5 feet 3 inches"], cAnswer: "7 feet 6 inches"},
            {question: "What is one common fitness tracer brand?", choices: ["Fit-ness", "Walkalot", "Fitbit", "Walkalong"], cAnswer: "Fitbit"},
            {question: "Which is not a piece of equipment used for riding horses?", choices: ["Saddle", "Pulley", "Bridle", "Girth"], cAnswer: "Pulley"},
            {question: "Who won the 2016 team olympics in gymnastics?", choices: ["United States", "China", "Japan", "Russia"], cAnswer: "United States"},
            {question: "How do you win in volleyball?", choices: ["Score 25 points", "Score 25 points and be ahead by 2 points", "Until one team quits", "Play 25 rounds and be ahead by 2 points"], cAnswer: "Score 25 points and be ahead by 2 points"},
            {question: "In between which two periods does football have Halftime?", choices: ["1 & 2", "2 & 3", "3 & 4", "All of them"], cAnswer: "2 & 3"},
            {question: "How many points do you get for a safety in football?", choices: ["4", "2", "1", "0"], cAnswer: "2"},
            {question: "What theatre was Hamilton first shown in?", choices: ["Private Bank Theatre", "Richard Rogers Theatre", "Public Theatre", "Broadway Theatre"], cAnswer: "Public Theatre"},
            {question: "What is the poem 'O Captain My Captain' about?", choices: ["A captain and his crew", "Abraham Lincoln's death", "A prize", "How to captain a ship"], cAnswer: "Abraham Lincoln's death"},
            {question: "Which instrument is a single reeded instrument?", choices: ["Trumpet", "Basoon", "Oboe", "Clarinet"], cAnswer: "Clarinet"},
            {question: "Where is the set of colorful houses known as the 'Painted Ladies'?", choices: ["San Francisco", "Post Falls", "Little Rock", "Seattle"], cAnswer: "San Francisco"},
            {question: "What kind of literary device is used when comparing two different objects with 'like' or 'as'?", choices: ["Hyperbole", "Oxymoron", "Simile", "Metaphor"], cAnswer: "Simile"},
            {question: "What type of paint can you not mix with water?", choices: ["Watercolor", "Oil", "Acrylic", "Tempera"], cAnswer: "Oil"},
            {question: "Which characteristic is the old adage 'You are thicker in the head than a bull is in the rear end!' referring to?", choices: ["Patience", "Irrationality", "Impulsiveness", "Stubborn"], cAnswer: "Stubborn"},
            {question: "What is the thing that you put clay in to make pottery called?", choices: ["Oven", "Kiln", "Heater", "Stove"], cAnswer: "Kiln"},
            {question: "What musical instrument has only 3 keys?", choices: ["Trumpet", "Clarinet", "Drums", "Flute"], cAnswer: "Trumpet"},
            {question: "What country is Michelangelo's grave in?", choices: ["Italy", "France", "Egypt", "Brazil"], cAnswer: "Italy"},
            {question: "Which Christmas carol mentions the star?", choices: ["We Three Kings", "Beautiful Star of Bethlehem", "O Holy Night", "All of them"], cAnswer: "All of them"},
            {question: "What does Deloris Umbridge make Harry Potter write repeatedly in his own blood, as a punishment?", choices: ["I must not tell lies", "I will raise my hand", "I won't chew gum in class", "There's no place like home"], cAnswer: "I must not tell lies"},
            {question: "Which of these did Tchaikovsky, a long dead musician write?", choices: ["The Nutcracker", "Paradise", "Hello", "Marry Her"], cAnswer: "The Nutcracker"},
            {question: "Who was an ancient Greek Philosopher", choices: ["Socrates", "Plato", "Aristotle", "All of the above"], cAnswer: "All of the above"},
            {question: "What does CAD stand for in regards to Architectural of Engineering Design?", choices: ["Computer Aided Design", "Computer Aided Drawing", "Comprehensive Analytical Design", "Complete Architecture Drawings"], cAnswer: "Computer Aided Design"},
            {question: "What animal is associated with Hooters?", choices: ["Butterfly", "Owl", "Monkey", "Parrot"], cAnswer: "Owl"},
            {question: "Which type of bear lives on Kodiak Island Ak?", choices: ["Grizzly bear", "Polar bear", "Black bear", "Kodiak bear"], cAnswer: "Kodiak bear"},
            {question: "What is the name of the line where the ground and the sky meet each other?", choices: ["The separator", "Horizontal meeting", "The nature's meeting", "Horizon line"], cAnswer: "Horizon line"},
            {question: "The literary technique hinting at later events in a story is called what?", choices: ["Forestalling", "Foreshadowing", "Foreboding", "Fortissimo"], cAnswer: "Foreshadowing"},
            {question: "Who sang the songs 'All My Loving', 'Yesterday', 'Cant buy my love', and 'Eleanor Rigby'?", choices: ["The Beatles", "The Four Seasons", "The Monkeys", "Herman's Hermits"], cAnswer: "The Beatles"}];

/* 
    Array for questions that have already been selected.
    For every question, add their index to this array so that no question gets repeated.
 */
var qIndexes = [];

/* A random number generated to provide a random question from the list. */
var randomNumQ;

/* 
    Variables to determine statistics :
        Questions : what question we are on
        NumCorrect : how many questions are correct
        NumWrong : how many questions are wrong
        NumUnans : how many questions are unanswered
 */
var questions = 0, numCorrect = 0, numWrong = 0, numUnans = 0;

/* Global timer variable */
var timer = 30;

/* An interval that ticks every second */
var timerInterval;

/* 
    Status for the game
        Begin : The time frame for when the user needs to answer the question.
        End : The time frame for when the user has answered the question/failed to answer in time.
 */
var status = "begin";

/* 
    Status for when question has been answered
        Cor : The user has guessed correctly
        Incor : The user has guessed incorrectly
        Unans : The user didn't answer in time
 */
var qStatus;

$(document).ready(function(){
    
    /* When the 'Begin !' button is clicked,
     * Show random questions.
     */
    $(".begin-btn").on("click", function(){
        iterateQuestion();
    });

    /* When the corresponding choice is clicked :
        If the choice is the correct answer,
            Background turns green
            Number of Correct Answers increases
            Shows Correct Answer screen
        Else
            Background turns red
            Number of Incorrect Answers increases
            Shows Incorrect Answer screen
     */
    $(".container").on("click", "#choice1", function(){
        if(questionList[randomNumQ].choices[0] == questionList[randomNumQ].cAnswer){
            $(this).css("background-color", "green");
            numCorrect = ++ numCorrect;
            endOfQuestion("cor");
        }
        else {
            $(this).css("background-color", "red");
            numWrong = ++ numWrong;
            endOfQuestion("incor");
        }
    })

    $(".container").on("click", "#choice2", function(){
        if(questionList[randomNumQ].choices[1] == questionList[randomNumQ].cAnswer){
            $(this).css("background-color", "green");
            numCorrect = ++ numCorrect;
            endOfQuestion("cor");
        }
        else {
            $(this).css("background-color", "red");
            numWrong = ++ numWrong;
            endOfQuestion("incor");
        }
    })

    $(".container").on("click", "#choice3", function(){
        if(questionList[randomNumQ].choices[2] == questionList[randomNumQ].cAnswer){
            $(this).css("background-color", "green");
            numCorrect = ++ numCorrect;
            endOfQuestion("cor");
        }
        else {
            $(this).css("background-color", "red");
            numWrong = ++ numWrong;
            endOfQuestion("incor");
        }
    })

    $(".container").on("click", "#choice4", function(){
        if(questionList[randomNumQ].choices[3] == questionList[randomNumQ].cAnswer){
            $(this).css("background-color", "green");
            numCorrect = ++ numCorrect;
            endOfQuestion("cor");
        }
        else {
            $(this).css("background-color", "red");
            numWrong = ++ numWrong;
            endOfQuestion("incor");
        }
    })

    /* When the Restart button is clicked at the end of the game,
        Reset all values
        If the index array exceeds a certain amount, empty it so that questions may be repeated
        Restart the game
     */
    $(".container").on("click", ".restart-btn", function(){
        questions = 0;
        numCorrect = 0;
        numWrong = 0;
        numUnans = 0;
        status = "begin";

        if (qIndexes.length > 75){
            qIndexes = [];
        }

        iterateQuestion();
    });

    /* Function used to begin a new question 
        If the user has encountered 10 questions,
            Show the statistics and end the game.
            Give the user the option to restart.
        Else
            Give a random question index.
            If the question has already been shown
                Continue to find a suitable index.
            Else
                Show a new question and push its index into the array.
     */
    function iterateQuestion() {
        if (questions == 10){
            $(".container").empty();
            $(".container").html(
                "<h3 id='correct'> Correct: " + numCorrect + " </h3>" +
                "<h3 id='incorrect'> Wrong: " + numWrong + " </h3>" +
                "<h3 id='unanswered'> Unanswered: " + numUnans + " </h3>" +
                "<div class='btn-div'>" +
                    "<button class='btn btn-info restart-btn'> RESTART </button>" +
                "</div>"
            );
        }
        else {
            randomNumQ = Math.floor(Math.random() * questionList.length);
            while (qIndexes.includes(randomNumQ)){
                console.log(randomNumQ);
                randomNumQ = Math.floor(Math.random() * questionList.length);
            }
            newQuestion(randomNumQ, questionList);
            qIndexes.push(randomNumQ);
            console.log(qIndexes);
    
            questions ++;
    
            status = "begin";
        }
    }

    /* Function used to create the format for a new question and set the timer. 
        Give the user 10 seconds to answer the question.
     */
    var newQuestion = function(randomNum, list) {
        timer = 10;

        $(".container").empty();
        $(".container").html(
            "<h3 id='timer'> " + timer + " </h3>" + 
            "<h3 class='question-text'> " + list[randomNum].question + " </h3>" +
            "<div class='btn-div'>" +
                "<button class='btn btn-primary' id='choice1'> " + list[randomNum].choices[0] + "</button>" +
                "<button class='btn btn-primary' id='choice2'> " + list[randomNum].choices[1] + "</button>" +
                "<button class='btn btn-primary' id='choice3'> " + list[randomNum].choices[2] + "</button>" +
                "<button class='btn btn-primary' id='choice4'> " + list[randomNum].choices[3] + "</button>" +
            "</div>"
        );
        timerInterval = setInterval(decrementCounter, 1000); 
    }

    /* Function for when question has been answered or the question's time has run out. 
        Change the corresponding message depending on how the question has been answered.
        Give the user 3 seconds to see what he got wrong.
     */
    var endOfQuestion = function(qStatus){
        clearInterval(timerInterval);

        var postMessage;

        switch(qStatus){
            case ("unans"):
                postMessage = "OUT OF TIME!";
                break;
            case ("cor"):
                postMessage = "CORRECT!";
                break;
            case ("incor"):
                postMessage = "INCORRECT!";
                break;
            default:
                break;
        }

        timer = 3;
        timerInterval = setInterval(decrementCounter, 1000); 
        $(".container").empty();
        $(".container").html(
            "<h3 id='timer'> " + timer + " </h3>" +
            "<h3 id='post-message'> " + postMessage + " </h3> " +
            "<div class='btn-div'>" +
                "<button class='btn btn-primary' id='choice1' disabled> " + questionList[randomNumQ].choices[0] + "</button>" +
                "<button class='btn btn-primary' id='choice2' disabled> " + questionList[randomNumQ].choices[1] + "</button>" +
                "<button class='btn btn-primary' id='choice3' disabled> " + questionList[randomNumQ].choices[2] + "</button>" +
                "<button class='btn btn-primary' id='choice4' disabled> " + questionList[randomNumQ].choices[3] + "</button>" +
            "</div>"
        );

        for (var i = 0; i < 4; i++){ 
            if (questionList[randomNumQ].choices[i] == questionList[randomNumQ].cAnswer){
                j = i + 1;
                $("#choice" + j).css("background-color", "green");
            }
            else {
                j = i + 1;
                $("#choice" + j).css("background-color", "red");
            }
        }

        status = "end";
    }

    /* Function used to consistently lower timer per question. */
    function decrementCounter(){
        timer = --timer;
        $('#timer').text(timer);
        if (timer == 0 && status == "begin"){
            numUnans = ++ numUnans;
            endOfQuestion("unans");
        }
        if (timer == 0 && status == "end"){
            clearInterval(timerInterval);
            iterateQuestion();
        }
    }

});