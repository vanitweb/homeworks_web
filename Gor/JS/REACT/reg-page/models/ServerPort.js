const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for ServerPort
const ServerPort = new Schema({
  personalData: {
    firstName: {
      type: String
	},
	lastName: {
      type: String
	},
	country: {
      type: String
	},
	city: {
      type: String
	},
	address: {
      type: String
	},
	email: {
      type: String
	},
	password: {
      type: String
	},
  },
  profileDetalis: {
      package: {
		  type: String
	  }
  },
  cardData: {
	  cardNumber: {
		  type: Number
	  },
	  cardName: {
		  type: String
	  },
	  cardCvc: {
		  type: Number
	  },
	  cardDate: {
		  type: String
	  },
  }
},
{
    collection: 'users'
});

module.exports = mongoose.model('ServerPort', ServerPort);