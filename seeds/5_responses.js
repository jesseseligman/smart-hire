'use strict';

exports.seed = function(knex) {
  return knex('responses').del()
    .then(() => {
      return knex('responses').insert([{
        question_id: 1,
        application_id: 1,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. I love Tim Ferris and I drink lots of soylent to make sure I am as productive as possible. I will fit in so well with your team. I love writing testable, maintainable code. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.'
      },
      {
        question_id: 1,
        application_id: 2,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. I love Tim Ferris and I drink lots of soylent to make sure I am as productive as possible. I will fit in so well with your team. I love writing testable, maintainable code. I CAN MAKE CHOCOLATE CHIP COOKIES!!!! I HAVE TROUBLE CONTROLLING THE VOLUME OF MY VOICE!!! I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.'
      },
      {
        question_id: 1,
        application_id: 4,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. What makes me such a good fit is that I can change sizes. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.'
      },
      {
        question_id: 1,
        application_id: 5,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. What makes me such a good fit is that I can change sizes. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.'
      },
      {
        question_id: 1,
        application_id: 6,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. What makes me such a good fit is that I can change sizes. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.'
      },
      {
        question_id: 1,
        application_id: 7,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. What makes me such a good fit is that I can change sizes. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.'
      },
      {
        question_id: 1,
        application_id: 8,
        text: 'I am a great fit for this role. I am a self starter. I do all of the things they say to do in the self help books. What makes me such a good fit is that I can change sizes. I also like clean, elegant code. No need to be overly robust with the syntactic sugar. That is why I am a great fit for this role because I am just such a great fit for this role.'
      },
      {
        question_id: 2,
        application_id: 1,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!'
      },
      {
        question_id: 2,
        application_id: 2,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!'
      },
      {
        question_id: 2,
        application_id: 3,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!'
      },
      {
        question_id: 2,
        application_id: 4,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!'
      },
      {
        question_id: 2,
        application_id: 5,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!'
      },
      {
        question_id: 2,
        application_id: 6,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!'
      },
      {
        question_id: 2,
        application_id: 7,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!'
      },
      {
        question_id: 2,
        application_id: 8,
        text: 'My strengths are that I know my weaknesses. That is what makes me so special. I also have invented a number of life saving technologies. I am fluent in 43 languages. I don\'t need to sleep. I can sing three operas from memory. You never need to tell me to do something twice. I love work and I am a workaholic and that is all I care about!'
      },
      {
        question_id: 3,
        application_id: 9,
        text: 'I bring excellent leadership skills to any team. Being a leader does not necessarily mean being the loudest voice in the room. It is the ability to work with a group of people and assess how you and your team can work together to maximize your productivity. Sometimes that means listening to others and empowering them to work independently. Other times it involves taking more direct control of a project and driving it yourself. I understand this balance.'
      },
      {
        question_id: 3,
        application_id: 10,
        text: 'I bring excellent leadership skills to any team. Being a leader does not necessarily mean being the loudest voice in the room. It is the ability to work with a group of people and assess how you and your team can work together to maximize your productivity. Sometimes that means listening to others and empowering them to work independently. Other times it involves taking more direct control of a project and driving it yourself. I understand this balance.'
      },
      {
        question_id: 3,
        application_id: 11,
        text: 'I bring excellent leadership skills to any team. Being a leader does not necessarily mean being the loudest voice in the room. It is the ability to work with a group of people and assess how you and your team can work together to maximize your productivity. Sometimes that means listening to others and empowering them to work independently. Other times it involves taking more direct control of a project and driving it yourself. I understand this balance.'
      },
      {
        question_id: 3,
        application_id: 12,
        text: 'I bring excellent leadership skills to any team. Being a leader does not necessarily mean being the loudest voice in the room. It is the ability to work with a group of people and assess how you and your team can work together to maximize your productivity. Sometimes that means listening to others and empowering them to work independently. Other times it involves taking more direct control of a project and driving it yourself. I understand this balance.'
      },
      {
        question_id: 3,
        application_id: 13,
        text: 'I bring excellent leadership skills to any team. Being a leader does not necessarily mean being the loudest voice in the room. It is the ability to work with a group of people and assess how you and your team can work together to maximize your productivity. Sometimes that means listening to others and empowering them to work independently. Other times it involves taking more direct control of a project and driving it yourself. I understand this balance.'
      },
      {
        question_id: 3,
        application_id: 14,
        text: 'I bring excellent leadership skills to any team. Being a leader does not necessarily mean being the loudest voice in the room. It is the ability to work with a group of people and assess how you and your team can work together to maximize your productivity. Sometimes that means listening to others and empowering them to work independently. Other times it involves taking more direct control of a project and driving it yourself. I understand this balance.'
      },
      {
        question_id: 3,
        application_id: 15,
        text: 'I bring excellent leadership skills to any team. Being a leader does not necessarily mean being the loudest voice in the room. It is the ability to work with a group of people and assess how you and your team can work together to maximize your productivity. Sometimes that means listening to others and empowering them to work independently. Other times it involves taking more direct control of a project and driving it yourself. I understand this balance.'
      },
      {
        question_id: 4,
        application_id: 9,
        text: 'I love changing directions because it forces me to think in new ways. When I have to pivot is when I shine. I also have a background in sailing which feels extremely relevant to the current discussion. Because in sailing it\'s all about how you point your sails so that you catch the right wind. And then you can choose your direction. See how the sailing connects to the question?'
      },
      {
        question_id: 4,
        application_id: 10,
        text: 'I love changing directions because it forces me to think in new ways. When I have to pivot is when I shine. I also have a background in sailing which feels extremely relevant to the current discussion. Because in sailing it\'s all about how you point your sails so that you catch the right wind. And then you can choose your direction. See how the sailing connects to the question?'
      },
      {
        question_id: 4,
        application_id: 11,
        text: 'I love changing directions because it forces me to think in new ways. When I have to pivot is when I shine. I also have a background in sailing which feels extremely relevant to the current discussion. Because in sailing it\'s all about how you point your sails so that you catch the right wind. And then you can choose your direction. See how the sailing connects to the question?'
      },
      {
        question_id: 4,
        application_id: 12,
        text: 'I love changing directions because it forces me to think in new ways. When I have to pivot is when I shine. I also have a background in sailing which feels extremely relevant to the current discussion. Because in sailing it\'s all about how you point your sails so that you catch the right wind. And then you can choose your direction. See how the sailing connects to the question?'
      },
      {
        question_id: 4,
        application_id: 13,
        text: 'I love changing directions because it forces me to think in new ways. When I have to pivot is when I shine. I also have a background in sailing which feels extremely relevant to the current discussion. Because in sailing it\'s all about how you point your sails so that you catch the right wind. And then you can choose your direction. See how the sailing connects to the question?'
      },
      {
        question_id: 4,
        application_id: 14,
        text: 'I love changing directions because it forces me to think in new ways. When I have to pivot is when I shine. I also have a background in sailing which feels extremely relevant to the current discussion. Because in sailing it\'s all about how you point your sails so that you catch the right wind. And then you can choose your direction. See how the sailing connects to the question?'
      },
      {
        question_id: 4,
        application_id: 15,
        text: 'I love changing directions because it forces me to think in new ways. When I have to pivot is when I shine. I also have a background in sailing which feels extremely relevant to the current discussion. Because in sailing it\'s all about how you point your sails so that you catch the right wind. And then you can choose your direction. See how the sailing connects to the question?'
      },
      {
          question_id: 5,
          application_id: 16,
          text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.'
      },
      {
          question_id: 5,
          application_id: 17,
          text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.'
      },
      {
          question_id: 5,
          application_id: 18,
          text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.'
      },
      {
          question_id: 5,
          application_id: 19,
          text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.'
      },
      {
          question_id: 5,
          application_id: 20,
          text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.'
      },
      {
          question_id: 5,
          application_id: 21,
          text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.'
      },
      {
          question_id: 5,
          application_id: 22,
          text: 'I am good at a great assortment of things. I have excellent communication skills which is really what makes me vibrant. I am good at archery. I am also very skilled in martial arts including kung fu. I can play the cello and have perfect pitch. I am a journeyman electrician. I have studied classic literature and can recite the Odyssey from memory.'
      },
      {
          question_id: 6,
          application_id: 16,
          text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.'
      },
      {
          question_id: 6,
          application_id: 17,
          text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.'
      },
      {
          question_id: 6,
          application_id: 18,
          text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.'
      },
      {
          question_id: 6,
          application_id: 19,
          text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.'
      },
      {
          question_id: 6,
          application_id: 20,
          text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.'
      },
      {
          question_id: 6,
          application_id: 21,
          text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.'
      },
      {
          question_id: 6,
          application_id: 22,
          text: 'My old boss would tell you that I am the hardest worker that they ever had. I regularly put in 14 hour work days, sometimes even on the weekend. They used to call me "desky" because I slept in the office so much. My old boss also will tell you that I stole toilet paper from the bathroom but that is a lie. I loved my old job but I am just ready for something new, a new challenge I guess. Even though my old boss thought I was great.'
      }]);
    })
    // .then(() => {
    //   return knex.raw(
    //     "SELECT setval('responses_id_seq', (SELECT MAX(id) FROM questions));"
    //   );
    // });
};
