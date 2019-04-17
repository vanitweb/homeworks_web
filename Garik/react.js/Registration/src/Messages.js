const Messages = {
	generalInfo : {
        headInfo : {
            step : 1,
            textHead : "General information",
            iconHead : "fa fa-user"
        },
        placholders : {
            firstName : 'First Name ...',
            lastName : 'Last Name ...',
            country : 'Country ...',
            city : 'City ...',
            address : 'Address ...',
            email : 'Email ...',
            password : 'Password ...'
        }
    },
    packageInfo : {
        headInfo : {
            step : 2,
            textHead : "Check your package",
            iconHead : "fa fa-credit-card"
        }
    },
    cardInfo : {
        headInfo : {
            step : 3,
            textHead : "Card information",
            iconHead : "fa fa-credit-card-alt"
        },
        placholders : {
            cardNumber : 'Credit Card number ...',
            cardName : 'Credit Card name ...',
            cardCvc : 'Credit Card cvc ...',
            cardExpiration : 'Credit Card expiration date ...'
        }
    }
};

export default Messages;