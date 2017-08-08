const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/heroes', (req, res) => {
    const data = [
    {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957182-superman_avatar.jpg',
      profile_picture: 'https://static.comicvine.com/uploads/original/13/136345/5978025-superman_profile.jpg',
      real_name: 'Clark Kent',
      superhero_name: 'Superman',
      tier: 'Power House',
      publisher: 'DC',
      id: '1',
      feats: {
        'Strength/Power': {
          title: 'Superman\'s punches shake an entire planet ',
          description: 'Superman\'s pushes are powerful enough to shake an entire planet, despite not hitting the Earth itself.',
          images: 
          [
            {
              src: 'https://static.comicvine.com/uploads/scale_super/11114/111142337/4282381-planet+shaking+punch+part+1.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/scale_super/11114/111142337/4282381-planet+shaking+punch+part+1.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            },
            {
              src: 'https://static.comicvine.com/uploads/original/11114/111142337/4282387-planet+shaking+punch+part+2.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/original/11114/111142337/4282387-planet+shaking+punch+part+2.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            }
          ]
        }
      }
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957179-batman_avatar.jpg',
      profile_picture: 'https://static.comicvine.com/uploads/original/13/136345/5978026-batman_profile.jpg',
      real_name: 'Bruce Wayne',
      superhero_name: 'Batman',
      tier: 'Street Leveler',
      publisher: 'DC',
      id: '2',
      feats: {
        'Strength/Power': {
          title: 'Bruce Wayne lifts 1000lbs',
          description: 'Bruce Wayne lifts over 1000lbs inside the wayne manor',
          images: 
          [
            {
              src: 'https://static.comicvine.com/uploads/original/13/139138/3057921-batweightraining.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/original/13/139138/3057921-batweightraining.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            }
          ]
        }
      }
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957181-spider-man_avatar.jpg',
      profile_picture: 'https://static.comicvine.com/uploads/original/13/136345/5978024-spider-man_profile.jpg',
      real_name: 'Peter Parker',
      superhero_name: 'Spider-Man',
      tier: 'Street Levevler',
      publisher: 'Marvel',
      id: '3',
      feats: {
        'Skills/Fights': {
          title: 'Spider-Man vs Deadpool',
          description: 'Spider-Man takes on and knocks down Deadpool',
          images: 
          [
            {
              src: 'https://static.comicvine.com/uploads/scale_super/11126/111268742/4990000-5153617557-46666.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/scale_super/11126/111268742/4990000-5153617557-46666.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            }
          ]
        }
      }
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957189-carol_danvers_avatar.jpg',
      profile_picture: 'https://static.comicvine.com/uploads/original/13/136345/5978033-carol_danversl_profile.jpg',
      real_name: 'Carol Danvers',
      superhero_name: 'Captain Marvel',
      tier: 'Power House',
      publisher: 'Marvel',
      id: '4',
      feats: {
        'Durability/Endurance': {
          title: 'Takes a blast by Thanos',
          description: 'Carol Danvers takes an energy blast by thanos',
          images: 
          [
            {
              src: 'http://i.imgur.com/aU5xz6c.jpg',
              thumbnail: 'http://i.imgur.com/aU5xz6c.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            }
          ]
        },
        'Strength/Power': {
          title: 'Contains an energy field',
          description: 'Carol creates and contains an energy field',
          images: 
          [
            {
              src: 'http://i.imgur.com/Jd3zQl5.jpg',
              thumbnail: 'http://i.imgur.com/Jd3zQl5.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            },
            {
              src: 'http://i.imgur.com/gq8YEHM.jpg',
              thumbnail: 'http://i.imgur.com/gq8YEHM.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            }
          ]
        }
      }
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957180-lantern_avatar.jpg',
      profile_picture: 'https://static.comicvine.com/uploads/original/13/136345/5978023-green_lantern_profile.jpg',
      real_name: 'John Stewart',
      superhero_name: 'Green Lantern',
      tier: 'Power House',
      publisher: 'DC',
      id: '5',
      feats: {
        'Skills/Fights': {
          title: 'John Stewart takes on the Justice League',
          description: 'Parallax is infecting the GL rings, thus removing the morals of the ring bearers. John Stewart takes down the JLA, takes out Supes with one hit, rapid fires at Flash, and turns WW\'s lasso against her ',
          images: 
          [
            {
              src: 'https://static.comicvine.com/uploads/original/13/136345/3334620-john+solos+jla+1.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/3334620-john+solos+jla+1.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            },
            {
              src: 'https://static.comicvine.com/uploads/original/13/136345/3334622-john+solos+jla+2.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/3334622-john+solos+jla+2.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            },
            {
              src: 'https://static.comicvine.com/uploads/original/13/136345/3334624-john+solos+jla+3.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/3334624-john+solos+jla+3.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            }
          ]
        },
        'Strength/Power': {
          title: 'John Stewart\'s ring sparks',
          description: 'John Stewart\'s ring sparks when he gets close to the new Blue Beetle',
          images: 
          [
            {
              src: 'https://static.comicvine.com/uploads/original/13/136345/3995817-john%27s+ring+sparks+like+guy.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/3995817-john%27s+ring+sparks+like+guy.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
           }
          ]
        }
      }
    }, {
      thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/5957193-daredevil_avatar.jpg',
      profile_picture: 'https://static.comicvine.com/uploads/original/13/136345/5978022-daredevil_profile.jpg',
      real_name: 'Matthew Murdock',
      superhero_name: 'Daredevil',
      tier: 'Street Levevler',
      publisher: 'Marvel',
      id: '6',
      feats: {
        'Skills/Fights': {
          title: 'Daredevil takes on Iron First',
          description: 'Daredevil takes on Iron Fist, who\'s trying to replicate Matt\'s martial arts moves and wearing Daredevil\'s costume ',
          images: 
          [
            {
              src: 'https://static.comicvine.com/uploads/original/13/136345/3835994-dd+vs+if+1.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/3835994-dd+vs+if+1.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            },
            {
              src: 'https://static.comicvine.com/uploads/original/13/136345/3835995-dd+vs+if+2.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/3835995-dd+vs+if+2.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            },
            {
              src: 'https://static.comicvine.com/uploads/original/13/136345/3835996-dd+vs+if+3.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/3835996-dd+vs+if+3.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            },
            {
              src: 'https://static.comicvine.com/uploads/original/13/136345/3835997-dd+vs+if+4.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/3835997-dd+vs+if+4.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            }
          ]
        },
        'Misc': {
          title:'Daredevil catches a card from lester',
          description: 'Daredevil catches a card from lester, which Elektra couldn\'t react towards it',
          images: 
          [
            {
              src: 'https://static.comicvine.com/uploads/original/13/136345/3806451-dd+reflexes.jpg',
              thumbnail: 'https://static.comicvine.com/uploads/original/13/136345/3806451-dd+reflexes.jpg',
              thumbnailWidth: 90,
              thumbnailHeight: 115
            }
          
          ]
        }
      }
    }
    ];
    res.setHeader('Content-Type', 'application/json');

    res.status(200).send(JSON.stringify(data));
});

module.exports = router;
