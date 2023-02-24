const options = {};

async function generate_receipt(body) {
  fetch(
    "https://oxebox-generate-a-new-oxebox-bill-receipt-v1.p.rapidapi.com/generateNewBill",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "e4d507f755msh79162ed1d20a69dp126773jsnce4d274e856c",
        "X-RapidAPI-Host":
          "oxebox-generate-a-new-oxebox-bill-receipt-v1.p.rapidapi.com",
      },
      body: JSON.stringify(body)
    }
  )
  .then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

function receipt (buyerInfo, addressInfo, items){
  const itemDetails = items.map((item) => ({
    ItemName: item.name,
    ItemPrice: item.price,
  }));
  console.log(buyerInfo)
  const name= buyerInfo.first_name +" "+ buyerInfo.last_name
  const email= buyerInfo.email
  const body= {
  StoreDetails: {
    Name: "2AM",
    LogoUrl:
      "https://3000-ashleylem-group1miamipt-xwc785e3jks.ws-us87.gitpod.io/static/media/logo.8fdc2ba649df667a0fdf.png",
    TaxDetails: "",
    Phone: "",
    ReceiptHeader: "Welcome to 2AM",
    ReceiptFooter: "Thanks for shopping at 2AM!",
    Address: {
      AddressLine1: "",
      AddressLine2: "",
      City: "",
      Area: "",
      Zipcode: "",
      Country: "United States",
    },
  },
  CustomerDetails: {
    Name: name,
    Phone: "",
    CountryCode: "",
    Email: {
      recepientEmail: email,
      subject: "Here is the receipt for your recent order from 2AM",
      fromEmail: "receipts@oxebox.com",
      fromName: "2AM",
      replyToEmail: "",
    },
  },
  BillingDetails: {
    BillReceiptID: "",
    TransactionDate: "",
    TransactionTime: "",
    PaymentDetails: [
      {
        Amount: "",
        Type: "card",
      },
    ],
    ItemDetails: itemDetails,
    SubTotal: 5600,
    GrandTotal: 0,
   

    BillingAddress: {
      AddressLine1: addressInfo.address,
      AddressLine2: "",
      Area: "",
      City: addressInfo.city,
      State: addressInfo.state,
      Zip: addressInfo.zip,
      Country: "USA",
      Name: buyerInfo.name,
      Phone: "",
    },
    ShippingAddress: {
      AddressLine1: addressInfo.address,
      AddressLine2: "",
      Area: "",
      City: addressInfo.city,
      State: addressInfo.state,
      Zip: addressInfo.zip,
      Country: "USA",
      Name: buyerInfo.name,
      Phone: "",
    },
  },}
  return body
};
 export {receipt, generate_receipt};