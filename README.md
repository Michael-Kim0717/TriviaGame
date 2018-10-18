## Speed Trivia

https://michael-kim0717.github.io/TriviaGame/

![home](https://user-images.githubusercontent.com/8729300/47172824-799f8100-d2da-11e8-8f42-cd59770b886c.png)

You are given 10 random questions from random categories to answer.
You have 10 seconds to answer each question and you will be able to see your results at the end of the game.

### GETTING STARTED

#### BUILT-WITH

```

  Languages :
  
  HTML / CSS / Bootstrap
  Javascript
  JQuery

```

##### SAMPLE DATA

```json

 [
 {"question" : "What castle inspired Walt Disney to use as his Cinderella castle?", 
  "choices" : ["Neuschwanstein", "Gutenberg", "Hohenzollern", "Heidelberg"], 
  "cAnswer" : "Neuschwanstein"},
 {"question" : "Which countries were involved in the Cold War?", 
  "choices" : ["Germany and America", "Russia and America", "Germany and Russia", "Iran and Iraq"], 
  "cAnswer" : "Russia and America"},
 {"question" : "Which two presidents celebrate their birthdays on Presidents' Day in February?", 
  "choices" : ["Lincoln and Washington", "Lincoln and Johnson", "Kennedy and Adams", "Washington and Roosevelt"], 
  "cAnswer" : "Lincoln and Washington"},
 {"question" : "Vikings shipped their star or steering oar, on the right hand side of the ship, thus calling that ship what?", 
  "choices" : ["Starboard", "Rightboard", "Freeboard", "Oarboard"], 
  "cAnswer" : "Starboard"},
 {"question" : "What was the world's first version of paper?", 
  "choices" : ["Papyrus", "Cards stock", "Lined paper", "Lozling"], 
  "cAnswer" : "Papyrus"},
 {"question" : "In the battle of D. Day the allies stormed the beaches of...", 
  "choices" : ["Sicily", "Hamburg", "Istanbul", "Normandy"], 
  "cAnswer" : "Normandy"},
 {"question" : "What do the fifty stars on the US flag represent?", 
  "choices" : ["The 50 states", "The 50 presidents", "The people", "Nothing"], 
  "cAnswer" : "The 50 states"},
 ]

```

### WEBSITE / IMAGES

#### HOME PAGE

There are no real rules. When given a question, click the answer that you believe is right. For every question, you will be scored on whether your answer was correct, incorrect, or unanswered (you fail to answer in the 10 seconds). There are no life-lines or any hints for these questions, so this will be based purely on your own knowledge.

![home](https://user-images.githubusercontent.com/8729300/47172824-799f8100-d2da-11e8-8f42-cd59770b886c.png)

#### QUESTION PAGE

Each question contains 4 choices. Upon guessing the answer correctly or incorrectly, the correct answer will be highlighted in green while the rest of the choices will be highlighted in red. The user will be scored accordingly.

![question](https://user-images.githubusercontent.com/8729300/47172950-c3886700-d2da-11e8-83db-7ae8024848f8.png)

#### RESULTS PAGE

The user will receive a score card at the end of the game so that they may visualize their final scorings.

![results](https://user-images.githubusercontent.com/8729300/47173021-eca8f780-d2da-11e8-89ec-9cbf94bc4348.png)

### TODO / BUGS

BUG : Because answers are written by hand, if a certain answer (cAnswer in the array) is mispelled or a choice is mispelled, then even though the user is correct, they might still be scored as incorrect.
