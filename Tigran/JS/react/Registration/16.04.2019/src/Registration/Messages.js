const Messages = {
	generalInfo : {
        headInfo : {
            step : 1,
            title : "Tell us who you are: "
        }
    },
    packageInfo : {
        headInfo : {
            step : 2,
            textHead : "Enter your package"
        },
        inputLabels : {
            standart : "Standard Package",
            premium : "Premium Package"
        }
    },
    cardInfo : {
        headInfo : {
            step : 3,
            textHead : "Card information"
        },
        inputInfo : {
            cardNumber : {placeholder : 'Credit Card number'},
            cardName : {placeholder : 'Credit Card name'},
            cardCvc : {placeholder : 'Credit Card cvc'},
            cardExpiration : {placeholder : 'Credit Card expiration date'}
        }
    },
    generalInfoInputs : [
        {placeholder : 'First Name', name : 'firstName'},
        {placeholder : 'Last Name', name : 'lastName'},
        {placeholder : 'Country', name : 'country'},
        {placeholder : 'City', name : 'city'},
        {placeholder : 'Address', name : 'address'},
        {placeholder : 'email', name : 'email'},
        {placeholder : 'password', name : 'password'},

        {placeholder : 'credit card number', name : 'creditCardNumber', },
        {placeholder : 'credit card name', name : 'creditCardName', },
        {placeholder : 'credit card cvc', name : 'creditCardCvc', },
        {placeholder : 'credit card expirationDate', name : 'creditCardExpirationDate', }
    ],

    classes : {
        validClassName : 'mb-4 form-control is-valid',
        inValidClassName : 'mb-4 form-control is-invalid',
        defaultClassName : 'mb-4 form-control'
    }
};

export default Messages;