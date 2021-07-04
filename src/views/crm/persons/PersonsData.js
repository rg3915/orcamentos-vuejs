const personsData = [
{'name': 'Diana Ramos', 'photo': 'img/avatars/1.jpg', 'email': 'diana-ramos@email.com', 'company': 'Jackson Group'},
{'name': 'Kimberly Barrera', 'photo': 'img/avatars/2.jpg', 'email': 'kimberly-barrera@email.com', 'company': 'Bennett, Wong and Estes'},
{'name': 'Joseph Daniel', 'photo': 'img/avatars/3.jpg', 'email': 'joseph-daniel@email.com', 'company': 'Richard and Sons'},
{'name': 'Heidi Mays', 'photo': 'img/avatars/4.jpg', 'email': 'heidi-mays@email.com', 'company': 'Walls-Thomas'},
{'name': 'Rebecca Jackson', 'photo': 'img/avatars/5.jpg', 'email': 'rebecca-jackson@email.com', 'company': 'Harrison-Palmer'},
{'name': 'Mr. David White', 'photo': 'img/avatars/7.jpg', 'email': 'mr-david-white@email.com', 'company': 'Brooks Ltd'},
{'name': 'Julie Hodge', 'photo': 'img/avatars/6.jpg', 'email': 'julie-hodge@email.com', 'company': 'Buckley, Brown and Fuller'},
{'name': 'Chris Johnson', 'photo': 'img/avatars/8.jpg', 'email': 'jennifer-smith@email.com', 'company': 'Harvey LLC'},
{'name': 'April Soto', 'photo': 'img/avatars/1.jpg', 'email': 'april-soto@email.com', 'company': 'Cunningham-Martinez'},
{'name': 'Cody Mcneil', 'photo': 'img/avatars/2.jpg', 'email': 'cody-mcneil@email.com', 'company': 'Edwards-Haley'},
{'name': 'Thomas Baldwin', 'photo': 'img/avatars/8.jpg', 'email': 'thomas-baldwin@email.com', 'company': 'Duncan, Mays and Welch'},
{'name': 'David Hill', 'photo': 'img/avatars/4.jpg', 'email': 'david-hill@email.com', 'company': 'Stevenson Group'},
{'name': 'Dawn Williams', 'photo': 'img/avatars/8.jpg', 'email': 'dawn-williams@email.com', 'company': 'Greene-Day'},
{'name': 'Howard Reed', 'photo': 'img/avatars/5.jpg', 'email': 'howard-reed@email.com', 'company': 'Luna-Jensen'},
{'name': 'Robert Hart', 'photo': 'img/avatars/4.jpg', 'email': 'robert-hart@email.com', 'company': 'Sawyer, Shields and Frank'},
{'name': 'Kimberly Webb', 'photo': 'img/avatars/8.jpg', 'email': 'kimberly-webb@email.com', 'company': 'Schmidt LLC'},
{'name': 'Richard Gonzalez', 'photo': 'img/avatars/8.jpg', 'email': 'richard-gonzalez@email.com', 'company': 'Willis-Smith'},
{'name': 'Christina Dalton', 'photo': 'img/avatars/6.jpg', 'email': 'christina-dalton@email.com', 'company': 'Love, Gonzalez and Fernandez'},
{'name': 'Regina Cook', 'photo': 'img/avatars/7.jpg', 'email': 'regina-cook@email.com', 'company': 'Mccoy Inc'},
{'name': 'Charles Miranda', 'photo': 'img/avatars/1.jpg', 'email': 'charles-miranda@email.com', 'company': 'Powers Group'},
{'name': 'Derek Arellano', 'photo': 'img/avatars/7.jpg', 'email': 'derek-arellano@email.com', 'company': 'Key and Sons'},
{'name': 'Julie Martinez', 'photo': 'img/avatars/6.jpg', 'email': 'julie-martinez@email.com', 'company': 'Gray, Joseph and Thomas'},
{'name': 'John Jones', 'photo': 'img/avatars/5.jpg', 'email': 'john-jones@email.com', 'company': 'Clark-Owens'},
{'name': 'Jeffrey Vang', 'photo': 'img/avatars/4.jpg', 'email': 'jeffrey-vang@email.com', 'company': 'Fletcher, Sparks and Fox'},
{'name': 'Stacy Jackson', 'photo': 'img/avatars/1.jpg', 'email': 'stacy-jackson@email.com', 'company': 'Meyers-Smith'},
{'name': 'Matthew Montoya', 'photo': 'img/avatars/8.jpg', 'email': 'matthew-montoya@email.com', 'company': 'Ruiz-Phillips'},
{'name': 'Daniel Williams', 'photo': 'img/avatars/2.jpg', 'email': 'daniel-williams@email.com', 'company': 'Lewis and Sons'},
{'name': 'Bobby Carter', 'photo': 'img/avatars/1.jpg', 'email': 'bobby-carter@email.com', 'company': 'Wolf-Wilson'},
{'name': 'Brandi Griffith', 'photo': 'img/avatars/5.jpg', 'email': 'brandi-griffith@email.com', 'company': 'Strong, Rogers and Stone'},
{'name': 'Jennifer Clark', 'photo': 'img/avatars/5.jpg', 'email': 'jennifer-clark@email.com', 'company': 'Smith Group'},
{'name': 'Mrs. Monica Duran', 'photo': 'img/avatars/1.jpg', 'email': 'mrs-monica-duran@email.com', 'company': 'Henry-Carr'},
{'name': 'Cheryl Reeves', 'photo': 'img/avatars/4.jpg', 'email': 'cheryl-reeves@email.com', 'company': 'Ashley-Lee'},
{'name': 'Summer Cooper', 'photo': 'img/avatars/4.jpg', 'email': 'summer-cooper@email.com', 'company': 'Martin Ltd'},
{'name': 'Jordan Spence', 'photo': 'img/avatars/8.jpg', 'email': 'jordan-spence@email.com', 'company': 'Park, Anderson and Warren'},
{'name': 'Mr. Timothy Diaz', 'photo': 'img/avatars/5.jpg', 'email': 'mr-timothy-diaz@email.com', 'company': 'Taylor LLC'},
{'name': 'Jake Smith', 'photo': 'img/avatars/2.jpg', 'email': 'jake-smith@email.com', 'company': 'Griffin-Peters'},
{'name': 'Alan Vazquez', 'photo': 'img/avatars/2.jpg', 'email': 'alan-vazquez@email.com', 'company': 'Mccarthy Ltd'},
{'name': 'Sarah Parrish', 'photo': 'img/avatars/6.jpg', 'email': 'sarah-parrish@email.com', 'company': 'Smith-Murphy'},
{'name': 'Kristen Peterson', 'photo': 'img/avatars/4.jpg', 'email': 'kristen-peterson@email.com', 'company': 'Payne Inc'},
{'name': 'Barbara Woods', 'photo': 'img/avatars/8.jpg', 'email': 'barbara-woods@email.com', 'company': 'Burton, Diaz and Garcia'},
{'name': 'Jill Rodgers', 'photo': 'img/avatars/8.jpg', 'email': 'jill-rodgers@email.com', 'company': 'Avery LLC'},
{'name': 'Lisa Garcia', 'photo': 'img/avatars/6.jpg', 'email': 'lisa-garcia@email.com', 'company': 'Ross Inc'},
{'name': 'Kristen Le', 'photo': 'img/avatars/2.jpg', 'email': 'kristen-le@email.com', 'company': 'Hodges, Booker and Washington'},
{'name': 'Robert Williams', 'photo': 'img/avatars/6.jpg', 'email': 'robert-williams@email.com', 'company': 'Williams Ltd'},
{'name': 'Melissa Brooks', 'photo': 'img/avatars/7.jpg', 'email': 'melissa-brooks@email.com', 'company': 'Martinez, Jackson and Stokes'},
{'name': 'David Ward', 'photo': 'img/avatars/1.jpg', 'email': 'david-ward@email.com', 'company': 'Garcia-Daniel'},
{'name': 'Bryan Miller', 'photo': 'img/avatars/6.jpg', 'email': 'bryan-miller@email.com', 'company': 'Rivera-Moreno'},
{'name': 'James Yates', 'photo': 'img/avatars/7.jpg', 'email': 'james-yates@email.com', 'company': 'Jones PLC'},
{'name': 'Patricia Harris', 'photo': 'img/avatars/4.jpg', 'email': 'patricia-harris@email.com', 'company': 'Ramirez Ltd'},
{'name': 'Kimberly Booker', 'photo': 'img/avatars/2.jpg', 'email': 'kimberly-booker@email.com', 'company': 'Burton-West'},
{'name': 'Thomas Smith', 'photo': 'img/avatars/2.jpg', 'email': 'thomas-smith@email.com', 'company': 'Holmes, Stanley and Maynard'},
{'name': 'Walter Nguyen', 'photo': 'img/avatars/3.jpg', 'email': 'walter-nguyen@email.com', 'company': 'Riley, Sloan and Thomas'},
{'name': 'Carrie Smith', 'photo': 'img/avatars/4.jpg', 'email': 'carrie-smith@email.com', 'company': 'Lopez-Davis'},
{'name': 'Robert Kennedy', 'photo': 'img/avatars/8.jpg', 'email': 'robert-kennedy@email.com', 'company': 'Williams-Thomas'},
{'name': 'Anthony Austin', 'photo': 'img/avatars/1.jpg', 'email': 'anthony-austin@email.com', 'company': 'Navarro PLC'},
{'name': 'Elizabeth Acosta', 'photo': 'img/avatars/8.jpg', 'email': 'elizabeth-acosta@email.com', 'company': 'Mills, Gordon and Lewis'},
{'name': 'Kevin Allen', 'photo': 'img/avatars/7.jpg', 'email': 'kevin-allen@email.com', 'company': 'Garcia, Nguyen and Oconnor'},
{'name': 'Ryan Prince', 'photo': 'img/avatars/4.jpg', 'email': 'ryan-prince@email.com', 'company': 'Wells and Sons'},
{'name': 'Paul Williamson', 'photo': 'img/avatars/6.jpg', 'email': 'paul-williamson@email.com', 'company': 'Daniel, Vazquez and Wu'},
{'name': 'Andrew Hawkins', 'photo': 'img/avatars/2.jpg', 'email': 'andrew-hawkins@email.com', 'company': 'Perez Inc'},
{'name': 'Eric Vasquez', 'photo': 'img/avatars/2.jpg', 'email': 'eric-vasquez@email.com', 'company': 'Jones, Jacobs and Daniels'},
{'name': 'Monica Alexander', 'photo': 'img/avatars/2.jpg', 'email': 'monica-alexander@email.com', 'company': 'Huffman LLC'},
{'name': 'Darren Myers', 'photo': 'img/avatars/3.jpg', 'email': 'darren-myers@email.com', 'company': 'Hudson Inc'},
{'name': 'Cassandra Lee', 'photo': 'img/avatars/7.jpg', 'email': 'cassandra-lee@email.com', 'company': 'Leach Ltd'},
{'name': 'David Ross', 'photo': 'img/avatars/3.jpg', 'email': 'david-ross@email.com', 'company': 'Avila Group'},
{'name': 'Dominique White', 'photo': 'img/avatars/7.jpg', 'email': 'dominique-white@email.com', 'company': 'Flowers LLC'},
{'name': 'Lindsay Shepard', 'photo': 'img/avatars/7.jpg', 'email': 'lindsay-shepard@email.com', 'company': 'Carter, Chandler and Mcdonald'},
{'name': 'William Mcclain', 'photo': 'img/avatars/5.jpg', 'email': 'william-mcclain@email.com', 'company': 'Smith, Hayes and Nelson'},
{'name': 'Dawn Phillips', 'photo': 'img/avatars/2.jpg', 'email': 'dawn-phillips@email.com', 'company': 'Harris-Hawkins'},
{'name': 'Janet Ortiz', 'photo': 'img/avatars/8.jpg', 'email': 'janet-ortiz@email.com', 'company': 'Martin-Strickland'},
{'name': 'Alexandra Macias', 'photo': 'img/avatars/5.jpg', 'email': 'alexandra-macias@email.com', 'company': 'Blair, Franklin and Dominguez'},
{'name': 'Steven Rogers', 'photo': 'img/avatars/8.jpg', 'email': 'steven-rogers@email.com', 'company': 'Cooper, Orr and King'},
{'name': 'Michael Page', 'photo': 'img/avatars/3.jpg', 'email': 'michael-page@email.com', 'company': 'Vaughn, Ramirez and Moore'},
{'name': 'Richard Cantrell', 'photo': 'img/avatars/4.jpg', 'email': 'richard-cantrell@email.com', 'company': 'Thompson, Rogers and Garcia'},
{'name': 'Erik Hickman', 'photo': 'img/avatars/6.jpg', 'email': 'erik-hickman@email.com', 'company': 'Walton Ltd'},
{'name': 'Elizabeth Wise', 'photo': 'img/avatars/4.jpg', 'email': 'elizabeth-wise@email.com', 'company': 'Hall Group'},
{'name': 'Jeffrey Wilson', 'photo': 'img/avatars/1.jpg', 'email': 'jeffrey-wilson@email.com', 'company': 'Thomas, Hayden and Davidson'},
{'name': 'Ashley Mora', 'photo': 'img/avatars/3.jpg', 'email': 'ashley-mora@email.com', 'company': 'Jacobson Ltd'},
{'name': 'Raymond Obrien', 'photo': 'img/avatars/4.jpg', 'email': 'raymond-obrien@email.com', 'company': 'Brown-Rice'},
{'name': 'Gina Cuevas', 'photo': 'img/avatars/6.jpg', 'email': 'gina-cuevas@email.com', 'company': 'Trujillo, Patel and Martin'},
{'name': 'Megan Santos', 'photo': 'img/avatars/6.jpg', 'email': 'megan-santos@email.com', 'company': 'Rich, Jones and Robertson'},
{'name': 'Sarah Nunez', 'photo': 'img/avatars/7.jpg', 'email': 'sarah-nunez@email.com', 'company': 'Thornton, May and Rivera'},
{'name': 'Brandon Welch', 'photo': 'img/avatars/5.jpg', 'email': 'brandon-welch@email.com', 'company': 'Ramirez Inc'},
{'name': 'Jeffery Gregory', 'photo': 'img/avatars/6.jpg', 'email': 'jeffery-gregory@email.com', 'company': 'Barnett, Wright and Nelson'},
{'name': 'Brett Fleming PhD', 'photo': 'img/avatars/1.jpg', 'email': 'brett-fleming-phd@email.com', 'company': 'Lee-Mejia'},
{'name': 'Franklin Hicks', 'photo': 'img/avatars/4.jpg', 'email': 'franklin-hicks@email.com', 'company': 'Coleman-Scott'},
{'name': 'Carolyn Schwartz', 'photo': 'img/avatars/7.jpg', 'email': 'carolyn-schwartz@email.com', 'company': 'Walker, King and Harris'},
{'name': 'Joseph Rivera', 'photo': 'img/avatars/7.jpg', 'email': 'joseph-rivera@email.com', 'company': 'Lewis, Castillo and Fox'},
{'name': 'Arthur Richardson MD', 'photo': 'img/avatars/7.jpg', 'email': 'arthur-richardson-md@email.com', 'company': 'Molina, Johnson and Figueroa'},
{'name': 'Keith Jones', 'photo': 'img/avatars/1.jpg', 'email': 'keith-jones@email.com', 'company': 'Martin PLC'},
{'name': 'Mary Campbell', 'photo': 'img/avatars/8.jpg', 'email': 'mary-campbell@email.com', 'company': 'Murphy, Beard and Jones'},
{'name': 'Chad Henderson', 'photo': 'img/avatars/7.jpg', 'email': 'chad-henderson@email.com', 'company': 'Schaefer, Ramirez and Benjamin'},
{'name': 'Michelle Woodard', 'photo': 'img/avatars/7.jpg', 'email': 'michelle-woodard@email.com', 'company': 'Wagner-Harvey'},
{'name': 'Christopher Kirby', 'photo': 'img/avatars/6.jpg', 'email': 'christopher-kirby@email.com', 'company': 'Martin-Barber'},
{'name': 'Kyle Wilson', 'photo': 'img/avatars/6.jpg', 'email': 'kyle-wilson@email.com', 'company': 'Hernandez, James and Hines'},
{'name': 'Jerry Velez', 'photo': 'img/avatars/8.jpg', 'email': 'jerry-velez@email.com', 'company': 'Moss PLC'},
{'name': 'Michele Cruz', 'photo': 'img/avatars/4.jpg', 'email': 'michele-cruz@email.com', 'company': 'Hurst Ltd'},
{'name': 'Aaron Tyler', 'photo': 'img/avatars/8.jpg', 'email': 'aaron-tyler@email.com', 'company': 'Lozano-Parker'},
{'name': 'Timothy Prince', 'photo': 'img/avatars/5.jpg', 'email': 'timothy-prince@email.com', 'company': 'Hoover and Sons'},
{'name': 'Anita Nunez', 'photo': 'img/avatars/1.jpg', 'email': 'anita-simpson@email.com', 'company': 'Graham-Taylor'},
]

export default personsData
