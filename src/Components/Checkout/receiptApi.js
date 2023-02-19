const options = {};

async function generate_receipt(name, address) {
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
      body: '{"StoreDetails":{"Name":"2AM","LogoUrl":"https://3000-ashleylem-group1miamipt-xwc785e3jks.ws-us87.gitpod.io/static/media/logo.8fdc2ba649df667a0fdf.png","ReceiptHeader":"Welcome to 2AM","ReceiptFooter":"Thanks for Shopping at 2AM","CustomerDetails":{"Name":name,"Phone":"","CountryCode":"","Email":{"recepientEmail":email,"subject":"Here is the receipt for your recent order from 2AM","fromEmail":"receipts@oxebox.com","fromName":"2AM","replyToEmail":""}},"BillingDetails":{"BillReceiptID":"Rec-1088686AABC","TransactionDate":"2018-11-30","TransactionTime":"22:10:01","AdditionalDetails":[{"Name":"Table No","Value":"1234"},{"Name":"Order No","Value":"06161"}],"PaymentDetails":[{"Amount":4000,"Type":"card","Cashier":"John Rock"},{"Amount":1646,"Type":"cash","Cashier":"John Rock"}],"ItemDetails":[{"ItemCode":"Pizza - 01","ItemName":"Exotica Supreme Pizza","ItemHeader":"12 medium, extra cheeze,olives","ItemQty":20,"ItemUnit":"pcs","ItemPrice":40,"ItemTotal":800,"SubItems":[{"ItemName":"Extra cheese","ItemQty":1,"ItemUnit":"pcs","ItemPrice":29,"ItemTotal":29},{"ItemName":"Extra Toppings","ItemQty":2,"ItemUnit":"pcs","ItemPrice":55,"ItemTotal":110}]},{"ItemCode":"Pizza-02","ItemName":"Triple chicken feast pizza","ItemHeader":"Crust: Pan, Medium, spicy","ItemQty":40,"ItemUnit":"pcs","ItemPrice":100,"ItemTotal":4000,"Discounts":[{"Name":"Store Promo","Total":99,"Percent":0},{"Name":"Additional discount","Total":18,"Percent":9}],"Taxes":[{"Name":"SGST 6","Total":240,"Percent":6},{"Name":"SGST 9","Total":240,"Percent":9}]}],"Discounts":[{"Name":"Store Promo","Total":99,"Percent":""},{"Name":"Bulk discount","Total":400,"Percent":""}],"Taxes":[{"Name":"SGST","Total":222.86,"Percent":6},{"Name":"CGST","Total":222.86,"Percent":9}],"SubTotal":5600,"GrandTotal":0,"RoundOff":0.29,"TotalBillAmount":5646,"AdditionalCharges":[{"Name":"Delivery Charges","Amount":4000,"Discounts":[{"Name":"Store Promo","Total":99,"Percent":""},{"Name":"Additional discount","Total":18,"Percent":9}],"Taxes":[{"Name":"CGST 9","Total":7.63,"Percent":9},{"Name":"SGST 9","Total":7.63,"Percent":9}]}],"BillingAddress":{"AddressLine1":"954 Dui. St.","AddressLine2":"Leganes ACT","Area":"BTM","City":"Hartford","State":"Mayotte","Zip":16205,"Country":"SPAIN","Name":"Isaiah Marquez","Phone":"+61423475219"},"ShippingAddress":{"AddressLine1":"954 Dui. St.","AddressLine2":"Leganes ACT","Area":"BTM","City":"Hartford","State":"Mayotte","Zip":16205,"Country":"SPAIN","Name":"Isaiah Marquez","Phone":"+61423475219"}}}',
    }
  );
}

const receipt = (buyerInfo, addressInfo)=> {
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
    Name: buyerInfo.name,
    Phone: "",
    CountryCode: "",
    Email: {
      recepientEmail: buyerInfo.email,
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
        Amount: Total,
        Type: "card",
      },
    ],
    ItemDetails: [
      {
        ItemCode: "",
        ItemName: "",
        ItemHeader: "",
        ItemQty: 1,
        ItemUnit: "unit",
        ItemPrice: price,
        ItemTotal: "",
      },
    ],
    SubTotal: 5600,
    GrandTotal: 0,
    RoundOff: 0.29,
    TotalBillAmount: 5646,

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
};
