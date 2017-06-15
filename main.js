
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
console.log('Name:', 'Dylan Smith'.toUpperCase());
console.log('Career: Web Designer');
console.log('Description: I am a 27 year old developer from Birmingham, Alabama.' );
console.log("My Previous Experience:")
console.log(displayPosition(compName[0], title [0], descrip[0]))
console.log(displayPosition(compName[1],title[1],descrip[1]))
console.log(displayPosition(compName[2],title[2],descrip[2]))
console.log("My Interests:")
console.log(displaySkill('Painting', true))
console.log(displaySkill('Being lazy', false))
console.log(displaySkill('Eating dirt', false))
console.log(displaySkill('Writing poetry and prose', true))