const sequelize = require('../config/db');
const Doer = require('../models/Doer');

const seedDoers = async () => {
  try {
    await sequelize.sync();

//         const names = [
//   "ANITA DORJEE",
//   "ANISHA LYNGDOH",
//   "ALVIN KHARBAMON",
//   "AIDAHUNLIN NALLE JYRWA",
//   "BANROILANG",
//   "BANSHANLANG",
//   "BANTYNSHAIN LYNGDOH",
//   "BHAGYASHREE SINHA",
//   "DORIS",
//   "EVAMEDALYNE LANGSTANG",
//   "FANNY",
//   "HIMANI",
//   "JENNIFER JYRWA",
//   "JOEY",
//   "KIRAN DAS",
//   "MONICA LYNGDOH",
//   "MOHAMMED SERAJ ANSARI",
//   "MEWANKHRAW MAJAW",
//   "RAJESH KUMAR THAKUR",
//   "SANJAY THAPA",
//   "SAFIRALIN",
//   "ROSHAN",
//   "SICOVONTRITCHZ D THANGKHIEW",
//   "TITU BHOWMICK",
//   "WANHUNLANG KHARSATI",
//   "YUMNAM JACKSON SINGH",
//   "SHANLANG",
//   "IARAP"
// ];
    const names = ["EWAN HA I SHYLLA"];

    const doers = names.map(name => ({
      name,
      telegramId: null // You can update later when they register
    }));

    await Doer.bulkCreate(doers, { ignoreDuplicates: true });
    console.log('✅ All doers inserted successfully.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error inserting doers:', error);
    process.exit(1);
  }
};

seedDoers();
