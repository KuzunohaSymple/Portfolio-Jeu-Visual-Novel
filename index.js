var bgs = [
    "graphism/Backgrounds/SchoolOutside2_Morning.png", //0
    "graphism/Backgrounds/School_Hallway1_snow.png", //1
    "graphism/Backgrounds/Classroom2_Morning1.png", //2
    "graphism/Backgrounds/City2_Morning.png", //3
    "graphism/Backgrounds/Restaurant_Morning1.png", //4
    "graphism/Backgrounds/Sky_Morning.png", //5
    "graphism/Backgrounds/Stars3.png", //6
    "graphism/Backgrounds/Stars2.png", // 7
    "graphism/Backgrounds/Stars1.png", // 8
    "graphism/Backgrounds/Background_picture2.png"]; // 9

var chars = [
    "graphism/Characters/EmmaUniform_Happy.png", //0
    "graphism/Characters/EmmaUniform_HappyBlush.png", //1
    "graphism/Characters/EmmaUniform_Normal.png", //2
    "graphism/Characters/EmmaUniform_NormalBlush.png", //3

    "graphism/Characters/AnnaGlasses_Happy.png", //4
    "graphism/Characters/AnnaGlasses_Normal.png", //5

    "graphism/Characters/VictorUniform_Embarassed.png", //6

    "graphism/Characters/SamDate_Normal.png", //7
    "graphism/Characters/SamDate_Happy.png", //8

    "graphism/Characters/EmmaUniform_Sad.png"]; //9

var scenes = [{question: 0, bg: 5, sp: "???"},
    {question: 1, bg: 0, char: 0, sp: "???", input: 1},
    {question: 2, bg: 0, char: 1, sp: "Barbara"},
    {question: 3, bg: 0, sp: "Barbara"},
    {question: 4, bg: 1, char: 2, sp: "Barbara"},
    {question: 5, bg: 2, sp: "Barbara"},
    {question: 6, bg: 2, sp: "???"},
    {question: 7, bg: 2, char: 4, sp: "Odine"},
    {question: 8, bg: 2, char: 4, sp: "You", input: 2},
    {question: 9, bg: 2, char: 5, sp: "Odine"},
    {question: 10, bg: 1, sp: "???"},
    {question: 11, bg: 1, char: 2, sp: "Barbara"},
    {question: 12, bg: 1, char: 6, sp: "Gomez"},
    {question: 13, bg: 0, char: 0, sp: "Barbara"},
    {question: 14, bg: 3, char: 0, sp: "You", input: 3},
    {question: 15, bg: 4, sp: "The server"},
    {question: 16, bg: 4, char: 0, sp: "Barbara"},
    {question: 17, bg: 4, char: 7, sp: "Vivien", input: 4},
    {question: 18, bg: 4, char: 0, sp: "Barbara"},
    {question: 19, bg: 4, char: 7, sp: "Vivien"},
    {question: 20, bg: 4, char: 2, sp: "You", input: 5},
    {question: 21, bg: 4, char: 2, sp: "You", input: 6},
    {question: 22, bg: 4, char: 7, sp: "You", input: 7},
    {question: 23, bg: 4, char: 2, sp: "You", input: 8},
    {question: 24, bg: 4, char: 0, sp: "Barbara"},
    {question: 25, bg: 9, char: 0, sp: "Barbara", input: 9}];

var questions = [{con: "Bonjour et bienvenue ! (cliquer pour continuer)"}, //0
    {con: "Je m'appelle Barbara, enchantée de faire votre connaissance.", answers: [0, 1]}, //1
    {con: "Je suis étudiante à la Webacadémie by Epitech de Lyon ! (promotion 2018-2019)"}, //2
    {con: "Venez, je vais vous faire visiter"}, //3
    {con: "Oh oui ! J'oubliais .. Tout personnage que vous rencontrerez dans ce jeu est fictif sauf moi !"}, //4
    {con: "Bonjour tout le monde !!!"}, //5
    {con: "Tiens serait-ce un nouveau visiteur ?"}, //6
    {con: "Bonjour, je suis Odine, l'assistante pédagogique de la Webacadémie de Lyon"}, //7
    {con: " ", answers: [2, 3, 4]}, // 8
    {con: "Sur ce, je vous souhaite une très bonne continuation et vous laisse entre les mains de notre apprentie développeuse."}, // 9
    {con: "...Hey Barbara !"}, // 10
    {con: "Holà ! désolée Gomez, un invité visite ma page, donc ce sera pour une autre fois !"}, // 11
    {con: "..."}, //12
    {con: "Allons s'installer dans un endroit sympa !"}, // 13
    {con: " ", answers: [5, 6, 7, 8]}, // 14
    {con: "Bonjour, vous désirez boire quelque chose ?"}, // 15
    {con: "Salut Vivien ! Oui s'il te plait !"}, // 16
    {con: "Qu'est-ce que je vous sers ?", answers: [9, 10, 11]}, //17
    {con: "Je prendrai un chocolat chaud s'il te plaît !"}, // 18
    {con: "Je vous ramène ça tout de suite !"}, // 19
    {con: " ", answers: [12, 13, 14]}, //20
    {con: " ", answers: [15, 16, 17]}, //21
    {con: " ", answers: [18, 19]}, //22
    {con: " ", answers: [20, 21]}, //23
    {con: "Et bien, je vais devoir disposer, ce fût un plaisir de vous rencontrer virtuellement, j'espère avoir de vos nouvelles. Pour tout renseignement complémentaire, mon numéro: 07 83 67 57 34."}, // 24
    {con: "Je vous remercie de votre attention ! Souhaitez-vous recommencer le scénario ?", answers: [22, 23]}]; //25

var answers = [{con: "Tout le plaisir est pour moi.", bg: 0, char: 1, sp: "Barbara", scene: 2}, //0
    {con: "Désolée si je vous ai vexé.", bg: 0, char: 9, sp: "Barbara", scene: 2}, // 1
    {con: "La formation est réparti en 2 temps, c'est-à-dire 6 mois de formation au sein du campus et 1 ans en contrat de professionnalisation dans une entreprise!", bg: 2, char: 5, sp: "Odine", scene: 8},// 2
    {con: "Concernant le contrat pro, il en va de soi que nos développeurs en herbe auront un rythme de 3 semaines en entreprise et d'une semaine en formation dans nos locaux.", bg: 2, char: 5, sp: "Odine", scene: 8}, // 3
    {con: "C'est moi qui vous remercie!", bg: 2, char: 4, sp: "Odine", scene: 9}, // 4
    {con: "J'ai intégré la formation en juin 2018, mon but est une reconversion professionnelle afin de pourvoir avoir l'opportunité d'obtenir un travail qui me plait.", bg: 3, char: 0, sp: "Barbara", scene: 14}, // 5
    {con: "Avant la Webacadémie, j’ai eu une expérience de six mois dans un casino en tant  que Mécanicienne machine à sous.", bg: 3, char: 2, sp: "Barbara", scene: 14}, // 6
    {con: "Les animations japonaises, les mangas et vous l’aurez deviné, les visuals novels !", bg: 3, char: 1, sp: "Barbara", scene: 14}, // 7
    {con: "D'accord !", bg: 3, char: 0, sp: "Barbara", scene: 15}, // 8
    {con: "Un thé ! Excellent choix !", bg: 4, char: 8, sp: "Vivien", scene: 18}, // 9
    {con: "Un café ! Rien de mieux pour débuter la journée !", bg: 4, char: 8, sp: "Vivien", scene: 18}, // 10
    {con: "N'hésitez pas à me soliciter si vous changez d'avis !", bg: 4, char: 7, sp: "Vivien", scene: 18}, // 11
    {con: "De manière générale, je n'ai pas de type d'entreprise dans lequel j'aimerai faire partie, ce qui m'intéresse ce sont les projets qui y sont fait.", bg: 4, char: 2, sp: "Barbara", scene: 20}, //12
    {con: "Je me concentre sur l'amélioration et l'apprentissage de nouvelles compétences afin d'être un élément constructif dans une entreprise.", bg: 4, char: 0, sp: "Barbara", scene: 20}, // 13
    {con: "Au sein de la Webacadémie j'ai eu l'occasion d'acquérir des compétences aussi bien en front-end qu'en back-end.", bg: 4, char: 0, sp: "Barbara", scene: 21}, // 14
    {con: "A ce jour, j'ai acquis les compétences dans les technologies HTML 5, CSS 3, Javascript, Bootstrap, PHP 7 ainsi que les framework MVC CakePHP, Laravel et Symfony 4.", bg: 4, char: 0, sp: "Barbara", scene: 21}, // 15
    {con: "J'ai fait des réalisations avec l'aide de GIT afin de suivre l'avancement de mes projets en groupe ou individuel, sous le système d'exploitation Linux. L'utilisation de Photoshop et Illustrator m'ont aidé pour la réalisation de certains projets web.", bg: 4, char: 0, sp: "Barbara", scene: 21}, // 16
    {con: "Votre commande est servie", bg: 4, char: 7, sp: "Vivien", scene: 22}, // 17
    {con: "Passez une bonne journée !", bg: 4, char: 8, sp: "Vivien", scene: 23}, // 18
    {con: "...", bg: 4, char: 7, sp: "Vivien", scene: 23}, // 19
    {con: "Aucun soucis j'habite à Villeurbanne (69100).", bg: 4, char: 1, sp: "Barbara", scene: 24}, // 20
    {con: "Concernant cette situation, ce n'est pas une barrière pour moi. Si j'ai candidaté dans votre société, c'est que je suis prête à déménager pour travailler chez vous. Avant d'entrer à la Webacadémie j'habitais à Gaillard(74240), j'ai emménager sur Villeurbanne spécialement pour suivre la formation !", bg: 4, char: 2, sp: "Barbara", scene: 24}, // 21
    {con: "Vous êtes prêt ? 3..... 2........1 (cliquez).", bg: 9, char: 1, sp: "Barbara", scene: 0}, // 22
    {con: "Je vous souhaite une excellente journée. Pensez à laisser un message sur le répondeur si jamais.", bg: 9, char: 0, sp: "Barbara"}]; // 23

var background_content = document.getElementById('background');
var character_change = document.getElementById('char');
var conversation_character = document.getElementById('conversation');
var name_character = document.getElementById('speaker');

//DEFINITION DES VARIABLES DES INPUTS
var answer_user = document.getElementById('answer');
var answer_user_2 = document.getElementById('answer_2');
var answer_user_3 = document.getElementById('answer_3');
var answer_user_4 = document.getElementById('answer_4');

//INCREMENTATION DES ARRAY DE CONVERSATION
var index = 0;
var index_answer = 0;
var index_return_answer = 0;
var index_return_scene = 0;

//VARIABLE QUI PERMETTRA AU SETINTERVAL D'AFFICHER LETTRE PAR LETTRE
var convIndex = 0;

//RECUPERATION DU NUMERO DE LA QUESTION
var index_scene = scenes[index]["question"];

//RECUPERATIONN DU NUMERO DE LA SCENE
var answer_return_scene = answers[index_return_scene]['scene'];


//SETINTERVAL UNIQUEMENT
var disp;
var dis;

var general = questions[index_scene]['con'];

var increment_answer = questions[index_scene]["answer"];

var bool = true;
var answer_bool = false;
var return_scene_bool = false;
var index_general_bool = true;

//EVENEMENT SUR BOUTONS DES CHOIX
answer_user.addEventListener('click', function() {
    index_answer = 0;
    increment_question();

});
answer_user_2.addEventListener('click', function() {
    index_answer = 1;
    increment_question();
});

answer_user_3.addEventListener('click', function() {
    index_answer = 2;
    increment_question();

});
answer_user_4.addEventListener('click', function() {
    index_answer = 3;
    increment_question();
});

//FONCTIONS
function return_scene() {
    answer_user.innerHTML = "";
    answer_user_2.innerHTML = "";
    answer_user_3.innerHTML = "";
    answer_user_4.innerHTML = "";
    answer_return_scene = answers[increment_answer]['scene'];
    index = answer_return_scene;
    index_general_bool = false;
    increments();
}

function increments() {
    return_scene_bool = false;
    answer_bool = false;
    clearInterval(dis);
    clearInterval(disp);
    disp = undefined;
    convIndex = 0;
    if (index_general_bool === true) {

        index += 1;
    }
    index_scene = scenes[index]["question"];
    general = questions[index_scene]['con'];
    index_general_bool = true;

    createIntervals();
    conversation_character.innerHTML = "";
}

function createIntervals() {
    disp = setInterval(function() {
        conversation_character.innerHTML += general[convIndex];
        convIndex += 1;
        if(convIndex == general.length) {
            clearInterval(disp);
            disp = undefined;
            //MODIFICATION DES BOUTONS EN FONCTION DU NUMERO DE L'INPUT SUR L'ARRAY SCENES
            if (scenes[index]["input"] === 1){
                bool = false;
                answer_user.innerHTML = "Enchanté(e) également.";
                answer_user_2.innerHTML = "Je ne suis pas enchanté.";
            }
            else if (scenes[index]["input"] === 2){
                bool = false;
                answer_user.innerHTML = "Comment se passe la formation ?";
                answer_user_2.innerHTML = "Le contrat pro ?";
                answer_user_3.innerHTML = "Ce sera tout, merci !";
            }
            else if (scenes[index]["input"] === 3){
                bool = false;
                answer_user.innerHTML = "Pourquoi es-tu rentrée à la webacadémie ?";
                answer_user_2.innerHTML = "Ton expérience avant la Webacadémie ?";
                answer_user_3.innerHTML = "Ce que tu aimes dans la vie ?";
                answer_user_4.innerHTML = "Je te suis !";
            }
            else if (scenes[index]["input"] === 4) {
                bool = false;
                answer_user.innerHTML = "Je prendrai un thé, s'il vous plait !";
                answer_user_2.innerHTML = "Je prendrai un café, s'il vous plait !";
                answer_user_3.innerHTML = "Non merci ça ira !";
            }
            else if (scenes[index]["input"] === 5) {
                bool = false;
                answer_user.innerHTML = "Quel genre d'entreprise t'intéresse ?";
                answer_user_2.innerHTML = "Ton principal objectif ?";
                answer_user_3.innerHTML = "Mais encore ?";
            }
            else if (scenes[index]["input"] === 6){
                bool = false;
                answer_user.innerHTML = "Compétences Full Stack";
                answer_user_2.innerHTML = "Autres compétences";
                answer_user_3.innerHTML = "Mais encore ?";
            }
            else if (scenes[index]["input"] === 7){
                bool = false;
                answer_user.innerHTML = "Merci bien !";
                answer_user_2.innerHTML = "OK !";
            }
            else if (scenes[index]["input"] === 8){
                bool = false;
                answer_user.innerHTML = "Mon entreprise est situé en Rhone-Alpes.";
                answer_user_2.innerHTML = "Mon entreprise n'est pas situé en Rhone-Alpes.";
            }
            else if (scenes[index]["input"] === 9){
                bool = false;
                answer_user.innerHTML = "Recommencer la partie !";
                answer_user_2.innerHTML = "Non merci, ça ira !";
            }
        }
    }, 20);
    answer_user.innerHTML = "";
    answer_user_2.innerHTML = "";
    answer_user_3.innerHTML = "";
    answer_user_4.innerHTML = "";
    name_character.innerHTML = scenes[index]["sp"];
    background_content.style.background = "url("+bgs[scenes[index]['bg']]+") no-repeat";
    background_content.style.backgroundSize = "cover";
    character_change.style.background = "url("+chars[scenes[index]['char']]+") no-repeat";
}

function increment_question() {
    conversation_character.innerHTML = "";
    answer_user.innerHTML = "";
    answer_user_2.innerHTML = "";
    answer_user_3.innerHTML = "";
    answer_user_4.innerHTML = "";

    increment_answer = questions[index_scene]["answers"][index_answer];

    console.log(increment_answer);

    disp = setInterval(function() {
        conversation_character.innerHTML += answers[increment_answer]["con"][index_return_answer];
        if (bool === false) {
            index_return_answer += 1;
            if (index_return_answer == answers[increment_answer]["con"].length) {
                clearInterval(disp);
                disp = undefined;
                answer_bool = true;
                index_return_answer = 0;
                bool = true;
                return_scene_bool = true;
            }
        }
    }, 20);
    name_character.innerHTML = answers[increment_answer]["sp"];
    background_content.style.background = "url("+bgs[answers[increment_answer]['bg']]+") no-repeat";
    background_content.style.backgroundSize = "cover";
    character_change.style.background = "url("+chars[answers[increment_answer]['char']]+") no-repeat";
}

//EVENEMENT SUR INDEX HTML
function contConv() {
    if(disp === undefined && (!scenes[index]["input"] || answer_bool === true)) {
        if(bool === true && return_scene_bool === false){
            increments();
        }
        else if (bool === true && return_scene_bool === true){
            return_scene();
        }
    }
}

window.onload = createIntervals();