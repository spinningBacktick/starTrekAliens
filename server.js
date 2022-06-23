const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const aliens = {
    'humans':{
        'speciesName': 'Humans',
        'homeworld': 'Earth',
        'features': 'Rounded ears, hair on head and face (sometimes)',
        'interestingFact':'Founded the United Federation of Planets after the first contact with the Vulcans',
        'notableExamples': 'James R. Kirk, Billy Joel, Robert Downy Jr.',
        'image': 'https://commons.wikimedia.org/wiki/File:Actor_Robert_Downey_Jr._photographed_by_the_California_Department_of_Corrections.jpg#/media/File:Actor_Robert_Downey_Jr._photographed_by_the_California_Department_of_Corrections.jpg'
    },
    'vulcans':{
        'speciesName': 'Vulcans',
        'homeworld': 'Vulcan',
        'features': 'Pointed ears, hair on head and face (sometimes), green blood',
        'interestingFact':'Capable of telepathy, mind-melding, and neck massage',
        'notableExamples': 'T\'pol in a catsuit, T\'pol in a sun dress, T\'pol in decon chamber',
        'image': 'https://commons.wikimedia.org/wiki/File:JoleneBlalockEgypt_3.jpg#/media/File:JoleneBlalockEgypt_3.jpg'
    },
    'klingons':{
        'speciesName': 'Klingons',
        'homeworld': 'Quonos',
        'features': 'Rounded ears, hair on head and face, forehead ridges',
        'interestingFact':'You are without honor!',
        'notableExamples': 'Worf, Arnold Schwarzenegger',
        'image': 'https://commons.wikimedia.org/wiki/File:Arnold_Schwarzenegger_1974.jpg#/media/File:Arnold_Schwarzenegger_1974.jpg'
    },
    'romulans':{
        'speciesName': 'Romulans',
        'homeworld': 'Romulus',
        'features': 'Pointed ears, hair on head and face (sometimes), pointy eyebrows',
        'interestingFact':'Spicy Vulcans',
        'notableExamples': 'Pardek, Narissa',
        'image': 'https://commons.wikimedia.org/wiki/File:Elon_Musk_Royal_Society_(crop2).jpg#/media/File:Elon_Musk_Royal_Society_(crop2).jpg'
    },
    'borg':{
        'speciesName': 'Borg',
        'homeworld': 'unknown',
        'features': 'comprised of various species controlled by nanobots and implants',
        'interestingFact':'We just want to be friends. C\'mon!',
        'notableExamples': 'All your old friends',
        'image': 'https://commons.wikimedia.org/wiki/File:Borg_dockingstation.jpg#/media/File:Borg_dockingstation.jpg',
    },
    'gorn':{
        'speciesName': 'Gorn',
        'homeworld': 'unknown',
        'features': 'Reptar',
        'interestingFact':'They don\'t eat chicken',
        'notableExamples': 'Mitch McConnel',
        'image': 'https://en.wikipedia.org/wiki/File:StarTrek-Gorn.jpg#/media/File:StarTrek-Gorn.jpg'
    },
    'trill':{
        'speciesName': 'Trill',
        'homeworld': 'Trill',
        'features': 'Gooey nougat center',
        'interestingFact':'Once you merge with your grandmother, she will see everything. Everything!',
        'notableExamples': 'The Bush family, Greta Thunberg',
        'image': 'https://commons.wikimedia.org/wiki/File:Greta_Thunberg_urges_MEPs_to_show_climate_leadership_(49618310531)_(cropped).jpg#/media/File:Greta_Thunberg_urges_MEPs_to_show_climate_leadership_(49618310531)_(cropped).jpg'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:alienName', (request, response)=>{
    const aliensName = request.params.alienName.toLowerCase();
    if(aliens[aliensName]){
        response.json(aliens[aliensName])
    }else{
        response.json(aliens['humans'])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log('Server is listening.')
})