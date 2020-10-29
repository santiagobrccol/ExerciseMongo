

let users = ''
for (let i = 0; i < 20; i++ ){
    const name = faker.name.firstName()
    const city = faker.address.city()
    const profession = faker.name.jobTitle()
    const address = faker.address.streetAddress()
    const phone = faker.phone.phoneNumber()
    const email = faker.internet.email()
    const age = Math.floor(Math.random() * 65)
    const wage = faker.finance.amount()
    users += `{name: "${name}", city: "${city}", profession: "${profession}", address: "${address}", phone: "${phone}", email: "${email}", age: "${age}", wage: "${wage}" },`
}


console.log(users)




/**Users 
  {name: "Abbey", city: "Shaneberg", profession: "Human Data Orchestrator", address: "423 Collins Street", phone: "(224) 727-9458 x661", email: "Erich.Funk@gmail.com", age: 46, wage: 503.07 },
  {name: "Forest", city: "Port Ulisesborough", profession: "National Security Manager", address: "36872 Margarita Island", phone: "570.732.8041", email: "Arielle_Bayer@gmail.com", age: 48, wage: 54.97 },
  {name: "Lindsay", city: "East Deonview", profession: "Dynamic Branding Consultant", address: "1602 Goldner Rest", phone: "1-378-600-7867", email: "Eliane.Erdman79@yahoo.com", age: 5, wage: 592.08 },
  {name: "Kenneth", city: "Rebekahmouth", profession: "Future Directives Assistant", address: "2154 Littel Light", phone: "810.382.9003 x46797", email: "Enrico43@hotmail.com", age: 6, wage: 961.04 },
  {name: "Astrid", city: "Brownville", profession: "Product Security Producer", address: "66241 Balistreri Shoal", phone: "689.475.5756 x9585", email: "Nella81@gmail.com", age: 36, wage: 589.05 },
  {name: "Rubie", city: "North Stephanyburgh", profession: "Direct Brand Technician", address: "7950 Rosetta Stream", phone: "611.325.3552", email: "Monique29@hotmail.com", age: 36, wage: 41.47 },
  {name: "Tanya", city: "South Rosalinda", profession: "Human Program Assistant", address: "2869 Cortez Causeway", phone: "815-698-5564 x103", email: "Alene_Maggio@gmail.com", age: 25, wage: 122.13 },
  {name: "Beth", city: "Port Kaylin", profession: "Dynamic Quality Manager", address: "3882 Isai Via", phone: "475.607.8860", email: "Kareem.OConnell@hotmail.com", age: 37, wage: 818.01 },
  {name: "Lambert", city: "Ricardofort", profession: "Senior Metrics Manager", address: "3999 Consuelo Villages", phone: "(441) 285-2934 x403", email: "Marcos.Deckow1@gmail.com", age: 18, wage: 338.28 },
  {name: "Ken", city: "Ginohaven", profession: "Future Branding Executive", address: "7418 Mann Crest", phone: "854-405-9488 x97117", email: "Keven_Robel79@hotmail.com", age: 48, wage: 682.12 },
  {name: "Pascale", city: "Reynoldsview", profession: "Corporate Communications Planner", address: "647 Cheyenne Shores", phone: "(576) 711-5701", email: "Lowell_Koss69@yahoo.com", age: 39, wage: 946.19 },
  {name: "Lurline", city: "South Heidiport", profession: "Investor Operations Executive", address: "779 Katrine Canyon", phone: "(649) 467-2413 x10951", email: "Mireya.Keebler@hotmail.com", age: 13, wage: 169.04 },
  {name: "Garret", city: "East Ashlyfort", profession: "Senior Implementation Engineer", address: "71402 Roberts Inlet", phone: "(437) 392-9904 x7977", email: "Ansel.Daniel@gmail.com", age: 16, wage: 429.1 },
  {name: "Pearlie", city: "Gradyfurt", profession: "Corporate Response Assistant", address: "332 Loma Plains", phone: "310.383.3663 x5656", email: "Eduardo.Smitham@yahoo.com", age: 16, wage: 659.11 },
  {name: "Jerrold", city: "Shanyfurt", profession: "Direct Optimization Orchestrator", address: "12594 Zulauf Island", phone: "500-502-6906", email: "Cynthia.Armstrong@yahoo.com", age: 30, wage: 467.75 },
  {name: "Vernice", city: "Goyetteside", profession: "Dynamic Factors Designer", address: "06515 Louisa Ports", phone: "958.249.0753", email: "Jasmin_Cole@gmail.com", age: 11, wage: 835.27 },
  {name: "Kiara", city: "Lake Raymondberg", profession: "Product Group Associate", address: "7043 Monahan Park", phone: "337.624.3328", email: "Rebekah77@gmail.com", age: 45, wage: 178.34 },
  {name: "Dan", city: "North Lornashire", profession: "National Accounts Executive", address: "0286 Leannon Ridges", phone: "1-217-576-9246", email: "Vincent8@hotmail.com", age: 3, wage: 154.43 },
  {name: "Ford", city: "West Jesusfort", profession: "Forward Data Facilitator", address: "318 Carroll Port", phone: "1-693-541-3872", email: "Rowena59@gmail.com", age: 2, wage: 92.87 },
  {name: "Fern", city: "East Kylee", profession: "Chief Response Agent", address: "918 Sonya Tunnel", phone: "344-508-3085 x9553", email: "Francisca45@gmail.com", age: 3, wage: 605.97 }
*/




/**
 * Increase wages
> db.fakerUsers.update({ city: "Shaneberg" }, { $inc: { wage: 65 } })
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

> db.users.findOne()
{
        "_id" : ObjectId("5f9a2fdd1b2ad28830612de3"),
        "name" : "Abbey",
        "city" : "Shaneberg",
        "profession" : "Human Data Orchestrator",
        "address" : "423 Collins Street",
        "phone" : "(224) 727-9458 x661",
        "email" : "Erich.Funk@gmail.com",
        "age" : "46",
        "wage" : 568.0699999999999
}
>
*/

/** 
 * Delete Under 18
db.fakerUsers.deleteMany( { age: { $lt: 18  }} );
{ "acknowledged" : true, "deletedCount" : 9 }
> db.fakerUsers.find()
{ "_id" : ObjectId("5f9a342a1b2ad28830612df7"), "name" : "Abbey", "city" : "Shaneberg", "profession" : "Human Data Orchestrator", "address" : "423 Collins Street", "phone" : "(224) 727-9458 x661", "email" : "Erich.Funk@gmail.com", "age" : 46, "wage" : 568.0699999999999 }
{ "_id" : ObjectId("5f9a342a1b2ad28830612df8"), "name" : "Forest", "city" : "Port Ulisesborough", "profession" : "National Security Manager", "address" : "36872 Margarita Island", "phone" : "570.732.8041", "email" : "Arielle_Bayer@gmail.com", "age" : 48, "wage" : 54.97 }
{ "_id" : ObjectId("5f9a342a1b2ad28830612dfb"), "name" : "Astrid", "city" : "Brownville", "profession" : "Product Security Producer", "address" : "66241 Balistreri Shoal", "phone" : "689.475.5756 x9585", "email" : "Nella81@gmail.com", "age" : 36, "wage" : 589.05 }
{ "_id" : ObjectId("5f9a342a1b2ad28830612dfc"), "name" : "Rubie", "city" : "North Stephanyburgh", "profession" : "Direct Brand Technician", "address" : "7950 Rosetta Stream", "phone" : "611.325.3552", "email" : "Monique29@hotmail.com", "age" : 36, "wage" : 41.47 }
{ "_id" : ObjectId("5f9a342a1b2ad28830612dfd"), "name" : "Tanya", "city" : "South Rosalinda", "profession" : "Human Program Assistant", "address" : "2869 Cortez Causeway", "phone" : "815-698-5564 x103", "email" : "Alene_Maggio@gmail.com", "age" : 25, "wage" : 122.13 }
{ "_id" : ObjectId("5f9a342a1b2ad28830612dfe"), "name" : "Beth", "city" : "Port Kaylin", "profession" : "Dynamic Quality Manager", "address" : "3882 Isai Via", "phone" : "475.607.8860", "email" : "Kareem.OConnell@hotmail.com", "age" : 37, "wage" : 818.01 }
{ "_id" : ObjectId("5f9a342a1b2ad28830612dff"), "name" : "Lambert", "city" : "Ricardofort", "profession" : "Senior Metrics Manager", "address" : "3999 Consuelo Villages", "phone" : "(441) 285-2934 x403", "email" : "Marcos.Deckow1@gmail.com", "age" : 18, "wage" : 338.28 }
{ "_id" : ObjectId("5f9a342a1b2ad28830612e00"), "name" : "Ken", "city" : "Ginohaven", "profession" : "Future Branding Executive", "address" : "7418 Mann Crest", "phone" : "854-405-9488 x97117", "email" : "Keven_Robel79@hotmail.com", "age" : 48, "wage" : 682.12 }
{ "_id" : ObjectId("5f9a342a1b2ad28830612e01"), "name" : "Pascale", "city" : "Reynoldsview", "profession" : "Corporate Communications Planner", "address" : "647 Cheyenne Shores", "phone" : "(576) 711-5701", "email" : "Lowell_Koss69@yahoo.com", "age" : 39, "wage" : 946.19 }
{ "_id" : ObjectId("5f9a342a1b2ad28830612e05"), "name" : "Jerrold", "city" : "Shanyfurt", "profession" : "Direct Optimization Orchestrator", "address" : "12594 Zulauf Island", "phone" : "500-502-6906", "email" : "Cynthia.Armstrong@yahoo.com", "age" : 30, "wage" : 467.75 }
{ "_id" : ObjectId("5f9a342a1b2ad28830612e07"), "name" : "Kiara", "city" : "Lake Raymondberg", "profession" : "Product Group Associate", "address" : "7043 Monahan Park", "phone" : "337.624.3328", "email" : "Rebekah77@gmail.com", "age" : 45, "wage" : 178.34 }
*/