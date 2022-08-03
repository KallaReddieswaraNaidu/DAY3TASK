//1.For the given Json iterate over all loops
/*
var mydata = [{name:"KALLA REDDIESWARA NAIDU",
              Address:"Kallavaripalli, Ganugachintha, Piler, Chittoor district, Andhrapradesh",
              pincode:517214,
              mobile_number:7449206439,
              emailid:"kallaguvib27@gmail.com"},
              {education:{Btech:"VELTECH UNIVERSITY",
                         Course:"Mechanical Engineering",
                         YOP:2021,
                         cgpa:9.4,
                         intermediate:"Narayana Junior college",
                         marks:970,
                         tenthclass:"VSN Siddhartha High School",
                         } },
              { workexperience:{MNC:"SAP TECHNICAL CONSULTANT IN COGNIZANT",
                              Internships:"1.In-Plant Training in Global Automotive Research Centre(GARC) - 17th to 21st June 2019. 2. Two-week Winter Internship at AutomotiveResearch Association ofIndia (ARAI) -09th to 20th december 2020"}},
              { skillset:{Area_of_interest:"Software Development and Maintainance and ERP Systems",
                        Software:"SAP ABAP AND SAP MDG"}},
              {  ExtraCurriculars:"1. “National Service Scheme” (NSS) Camp-2020 ,                                                                                 2. Blood donation camp - 2019, 3. Active volunteer in Vel Tech “Community Pro Club” (CPC) 4. Technical Volunteer in “FISITA WORLD AUTOMOTIVE CONGRESS” 2018, conducted from 22nd to 55th October 2018 at Chennai Trade Center, Chennai"}]

*/
/*
     //Forin Loop
for(let property in mydata){
    console.log(property,":",mydata[property])}
 

//foreach loop
mydata.forEach(element => console.log(element));

//for of  loop
for (let element of mydata) {
  console.log(element)
};
*/

//2. Create your own Json Data by resume
/*
var mydata = {name:"KALLA REDDIESWARA NAIDU",
              Address:"Kallavaripalli, Ganugachintha, Piler, Chittoor district, Andhrapradesh",
              pincode:517214,
              mobile_number:7449206439,
              emailid:"kallaguvib27@gmail.com",
              education:{Btech:"VELTECH UNIVERSITY",
                         Course:"Mechanical Engineering",
                         YOP:2021,
                         cgpa:9.4,
                         intermediate:"Narayana Junior college",
                         marks:970,
                         tenthclass:"VSN Siddhartha High School",
                        },
              workexperience:{MNC:"SAP TECHNICAL CONSULTANT IN COGNIZANT",
                              Internships:"1.In-Plant Training in Global Automotive Research Centre(GARC) - 17th to 21st June 2019. 2. Two-week Winter Internship at AutomotiveResearch Association ofIndia (ARAI) -09th to 20th december 2020"},
              skillset:{Area_of_interest:"Software Development and Maintainance and ERP Systems",
                        Software:"SAP ABAP AND SAP MDG"},
                                      ExtraCurriculars:"1. “National Service Scheme” (NSS) Camp-2020 ,2. Blood donation camp - 2019, 3. Active volunteer in Vel Tech “Community Pro Club” (CPC) 4. Technical Volunteer in “FISITA WORLD AUTOMOTIVE CONGRESS” 2018, conducted from 22nd to 55th October 2018 at Chennai Trade Center, Chennai"}

*/

/*
Calling the JSON data:
Example 1.

Syntax: mydata.education.Btech;
Output: VELTECH UNIVERSITY
*/
