



function ClozeCard(text, cloze){
    this.fullText = function(){
        var part2 = text.split(".").splice(3,1)
        var full = cloze + " " + part2
        return full
    }
    ;
    this.cloze = cloze;
    this.partial = text;
}
module.exports = ClozeCard;