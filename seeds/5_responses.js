'use strict';

/* eslint-disable camelcase, max-len */

exports.seed = function(knex) {
  return knex('responses').del()
    .then(() => {
      return knex('responses').insert([{
        id: 1,
        question_id: 1,
        application_id: 1,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. I love Tim Ferris and I drink lots of soylent to make sure I am as productive as possible. I will fit in so well with your team. I love writing testable, maintainable code. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 2,
        question_id: 1,
        application_id: 2,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. I love Tim Ferris and I drink lots of soylent to make sure I am as productive as possible. I will fit in so well with your team. I love writing testable, maintainable code. I CAN MAKE CHOCOLATE CHIP COOKIES!!!! I HAVE TROUBLE CONTROLLING THE VOLUME OF MY VOICE!!! I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 3,
        question_id: 1,
        application_id: 3,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. I love Tim Ferris and I drink lots of soylent to make sure I am as productive as possible. I will fit in so well with your team. I love writing testable, maintainable code. I CAN MAKE CHOCOLATE CHIP COOKIES!!!! I HAVE TROUBLE CONTROLLING THE VOLUME OF MY VOICE!!! I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 4,
        question_id: 1,
        application_id: 4,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. What makes me such a good fit is that I can change sizes. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 5,
        question_id: 1,
        application_id: 5,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. What makes me such a good fit is that I can change sizes. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 6,
        question_id: 1,
        application_id: 6,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. What makes me such a good fit is that I can change sizes. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 7,
        question_id: 1,
        application_id: 7,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. What makes me such a good fit is that I can change sizes. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 8,
        question_id: 1,
        application_id: 8,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. What makes me such a good fit is that I can change sizes. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 9,
        question_id: 2,
        application_id: 1,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 10,
        question_id: 2,
        application_id: 2,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 11,
        question_id: 2,
        application_id: 3,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 12,
        question_id: 2,
        application_id: 4,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 13,
        question_id: 2,
        application_id: 5,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 14,
        question_id: 2,
        application_id: 6,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 15,
        question_id: 2,
        application_id: 7,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 16,
        question_id: 2,
        application_id: 8,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 17,
        question_id: 3,
        application_id: 9,
        text: 'I bring excellent leadership skills to any team. Being a leader does not necessarily mean being the loudest voice in the room. It is the ability to work with a group of people and assess how you and your team can work together to maximize your productivity. Sometimes that means listening to others and empowering them to work independently. Other times it involves taking more direct control of a project and driving it yourself. I understand this balance.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 18,
        question_id: 3,
        application_id: 10,
        text: 'I bring excellent leadership skills to any team. Being a leader does not necessarily mean being the loudest voice in the room. It is the ability to work with a group of people and assess how you and your team can work together to maximize your productivity. Sometimes that means listening to others and empowering them to work independently. Other times it involves taking more direct control of a project and driving it yourself. I understand this balance.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 19,
        question_id: 3,
        application_id: 11,
        text: 'I have the experience and the know-how to be an effective leader on both big and small teams. My experience as a manager has honed my ability to look at my team and determine exactly what strengths my different team members have. This way I am able to maximize my entire team. Another key component of this is communication. Making sure that the entire team is communicating effectively is key to the success of any team.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 20,
        question_id: 3,
        application_id: 12,
        text: 'I\'m a pretty good leader. People seem to respond to me well overall. I do not have a ton of experience being the point person but I try my best and that is all you can ask really.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 21,
        question_id: 3,
        application_id: 13,
        text: 'I\'m a pretty good leader.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 22,
        question_id: 3,
        application_id: 14,
        text: 'I bring excellent leadership skills to any team. Being a leader does not necessarily mean being the loudest voice in the room. It is the ability to work with a group of people and assess how you and your team can work together to maximize your productivity. Sometimes that means listening to others and empowering them to work independently. Other times it involves taking more direct control of a project and driving it yourself. I understand this balance.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 23,
        question_id: 3,
        application_id: 15,
        text: 'I have the experience and the know-how to be an effective leader on both big and small teams. My experience as a manager has honed my ability to look at my team and determine exactly what strengths my different team members have. This way I am able to maximize my entire team. Another key component of this is communication. Making sure that the entire team is communicating effectively is key to the success of any team. I bring excellent leadership skills to any team. Being a leader does not necessarily mean being the loudest voice in the room. It is the ability to work with a group of people and assess how you and your team can work together to maximize your productivity. Sometimes that means listening to others and empowering them to work independently. Other times it involves taking more direct control of a project and driving it yourself. I understand this balance.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 24,
        question_id: 4,
        application_id: 9,
        text: 'I love changing directions because it forces me to think in new ways. When I have to pivot is when I shine. I also have a background in sailing which feels extremely relevant to the current discussion. Because in sailing it\'s all about how you point your sails so that you catch the right wind. And then you can choose your direction. See how the sailing connects to the question?',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 25,
        question_id: 4,
        application_id: 10,
        text: 'I love changing directions because it forces me to think in new ways. When I have to pivot is when I shine. I also have a background in sailing which feels extremely relevant to the current discussion. Because in sailing it\'s all about how you point your sails so that you catch the right wind. And then you can choose your direction. See how the sailing connects to the question?',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 26,
        question_id: 4,
        application_id: 11,
        text: 'Agile development is essential to being competitive in modern software development. Constant iteration and shipping code quickly allows us as engineers to keep our customers in the loop throughout product development. We are able to respond to feedback on a weekly basis rather than a longer term schedule. I understand that software is about people, and I have the perspective to realize that changing a product based on customer feedback is not only necessary, but it\'s the whole point!',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 27,
        question_id: 4,
        application_id: 12,
        text: 'Being able to respond to changing demands is the name of the game in modern software development. If you cannot handle the heat please get out of the kitchen I say. I know how to change directions quickly in the process of developing software and understand the importance of being nimble.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 28,
        question_id: 4,
        application_id: 13,
        text: 'The thing that I love most about software engineering is the opportunities for creative problem solving that it provides. When a customer\'s needs change and we need to pivot as a development team I just see it as another opportunity to reexamine the problem. I find that changing directions is actually the thing that has most contributed to my development as a programmer. When you are able to step back from a problem and challenge assumptions, it forces you to recontextualize the problem such that your understanding is that much deeper. I embrace changing directions on a project.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 29,
        question_id: 4,
        application_id: 14,
        text: 'The thing that I love most about software engineering is the opportunities for creative problem solving that it provides. When a customer\'s needs change and we need to pivot as a development team I just see it as another opportunity to reexamine the problem. I find that changing directions is actually the thing that has most contributed to my development as a programmer. When you are able to step back from a problem and challenge assumptions, it forces you to recontextualize the problem such that your understanding is that much deeper. I embrace changing directions on a project.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 30,
        question_id: 4,
        application_id: 15,
        text: 'I find it really difficult to change directions. I have a pretty one track mind so when things change I kind of just freak out. I need the security of knowing that things are going to stay the same forever.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 31,
        question_id: 5,
        application_id: 16,
        text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 32,
        question_id: 5,
        application_id: 17,
        text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 33,
        question_id: 5,
        application_id: 18,
        text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 34,
        question_id: 5,
        application_id: 19,
        text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 35,
        question_id: 5,
        application_id: 20,
        text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 36,
        question_id: 5,
        application_id: 21,
        text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 37,
        question_id: 5,
        application_id: 22,
        text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 38,
        question_id: 6,
        application_id: 16,
        text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 39,
        question_id: 6,
        application_id: 17,
        text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 40,
        question_id: 6,
        application_id: 18,
        text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 41,
        question_id: 6,
        application_id: 19,
        text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 42,
        question_id: 6,
        application_id: 20,
        text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 43,
        question_id: 6,
        application_id: 21,
        text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      },
      {
        id: 44,
        question_id: 6,
        application_id: 22,
        text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.',
        created_at: new Date('2016-08-15 14:26:16 UTC'),
        updated_at: new Date('2016-08-15 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('responses_id_seq', (SELECT MAX(id) FROM responses));"
      );
    });
};
