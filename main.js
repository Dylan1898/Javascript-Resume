
function displaySkill(skill, cool){
    if (cool==true){
        return 'Check It:' + skill;
    }
    else{
        return skill;
    }
}
var compName = ['Springstone Equestiran','Creative Dog Training', 'Brick & Tin' ]
var title = [ 'Stablehand', 'Dog walker/ General care', 'Bartener']
var descrip = [ 'Feeding, cleaning stalls, administering medication', 'Walking, basic training, bathing, cleaning kennels', 'Producing high quality craft cocktails in a professional environment']

function displayPosition(compName, title, descrip){
    return '--' + compName + "--" + title + "--" + descrip;
}   

var interests = [ 'art', 'music', 'reading']



console.log('Name:', 'Dylan Smith'.toUpperCase());
console.log('Career: Web Designer');
console.log('Description: I am a 27 year old developer from Birmingham, Alabama.' );
console.log('My Interests:')
for (var i=0; i< interests.length; i++){
    console.log('*' + interests[i])
}
console.log("My Previous Experience:")
console.log(displayPosition(compName[0], title [0], descrip[0]))
console.log(displayPosition(compName[1],title[1],descrip[1]))
console.log(displayPosition(compName[2],title[2],descrip[2]))
console.log("My skills:")
console.log(displaySkill('Painting', true))
console.log(displaySkill('Being lazy', false))
console.log(displaySkill('Eating dirt', false))
console.log(displaySkill('Writing poetry and prose', true))


var jobs = [
{
comp: '--Springstone Equestiran--Stablehand--Feeding, cleaning stalls, administering medication',
},
{
comp: '--Creative Dog Training--Dog walker/ General care--Walking, basic training, bathing, cleaning kennels',
},
{comp: '--Brick & Tin--Bartener--Producing high quality craft cocktails in a professional environment',
}
]


/*
var job = [ 

{
compName: 'Springstone Equestiran',
compName: 'Creative Dog Training',
compName:  'Brick & Tin', 
},

{
title: 'Stablehand',
title: 'Dog walker/ General care',
title:  'Bartener',
},

{
descrip: 'Feeding, cleaning stalls, administering medication',
descrip:  'Walking, basic training, bathing, cleaning kennels',
descrip:  'Producing high quality craft cocktails in a professional environment',
}
]


*/



/*function list(job){
    
    var i;
for (i = 0; i < job.length; i++) {
    text += job[i] + "";
}
console.log(list)
*/



/*
for (var key in jobs){
    console.log('jobs.${key} = ${jobs.[key]}')
}


var text = "";
var i;
for (i = 0; i < compName.length; i++) {
    text += compName[i] + "";
}

var text = "";
var i;
for (i = 0; i < title.length; i++) {
    text += title[i] + "";
}

function work (jobs)
var text = "";
var i;
for (i = 0; i < descrip.length; i++) {
    text += descrip[i] + "";
}
*/

function jobbys (comps){
    for (var i = 0; i>=jobs.length; i++){
        return jobs()[i];
    }
}
