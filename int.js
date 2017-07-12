var mapping = {
    'hello': {
        'en':'hello',
        'es':'hola'
    },
    'beer': {
        'en':'beer',
        'es':'caevesa'
    }
};
module.exports = function translate(phrase,lang){
    var phraseMap = mapping[phrase];
    if(!phraseMap){
        return phrase
    }
    return phraseMap[lang] || phraseMap[phrase]
};