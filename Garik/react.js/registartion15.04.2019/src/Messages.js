const Messages = {
	generalInfo : {
        headInfo : {
            step : 1,
            textHead : "General information",
            iconHead : "fa fa-user"
        },
        inputInfo : {
            firstName : {placeholder : 'First Name ...', validEror : 'Name must contain no more than 10 letters and can not be empty'},
            lastName : {placeholder : 'Last Name ...', validEror : 'Last Name must contain no more than 20 letters and can not be empty'},
            country : {placeholder : 'Country ...', validEror : 'Country must contain no more than 10 letters and can not be empty'},
            city : {placeholder : 'City ...', validEror : 'City must contain no more than 10 letters and can not be empty'},
            address : {placeholder : 'Address ...', validEror : 'Address must contain no more than 10 characters and can not be empty'},
            email : {placeholder : 'Email ...', validEror : 'The input value is not email and can not be empty'},
            password : {placeholder : 'Password ...', validEror : 'The password must contain minimum 8 characters and can not be empty'}
        }
    },
    packageInfo : {
        headInfo : {
            step : 2,
            textHead : "Check your package",
            iconHead : "fa fa-credit-card"
        },
        inputLabels : {
            standart : "Standard Package",
            premium : "Premium Package"
        }
    },
    cardInfo : {
        headInfo : {
            step : 3,
            textHead : "Card information",
            iconHead : "fa fa-credit-card-alt"
        },
        inputInfo : {
            cardNumber : {placeholder : 'Credit Card number ...', validEror : "Credit Card numbers will be in the folowing format 0000-0000-0000-0000 and can not be empty"},
            cardName : {placeholder : 'Credit Card name ...', validEror : "Credit Card name must contain no more than 15 letters and can not be empty"},
            cardCvc : {placeholder : 'Credit Card cvc ...', validEror : "The Credit Card cvc must be 3 numbers and can not be empty"},
            cardExpiration : {placeholder : 'Credit Card expiration date ...', validEror : "Credit Card expiration will be in the folowing format DD/YY or DD/YYYY and can not be empty"}
        }
    }
};

export default Messages;