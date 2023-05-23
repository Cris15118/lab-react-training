

function CreditCard() {
    const creditCard =[{
        type:"Visa",
     number: "0123456789018845",
    expirationMonth:3,
    expirationYear: 2021,
     bank:"BNP",
     owner:"Maxence Bouret",
     bgColor:"#11aa99",
    color:"white" ,
    },
{
    type:"Master Card",
  number:"0123456789010995",
  expirationMonth:3,
  expirationYear: 2021,
  bank:"N26",
  owner:"Maxence Bouret",
  bgColor:"#eeeeee",
  color:"#222222",
},
    
{
  type:"Visa",
  number:"0123456789016984",
  expirationMonth:12,
  expirationYear:2019,
  bank:"Name of the Bank",
  owner:"Firstname Lastname",
  bgColor:"#ddbb55",
  color:"white" 
}]
  return (
    creditCard.map((eachCard, index)=>{
        return(
            <div key={eachCard.index} style={{backgroundColor: eachCard.bgColor, color: eachCard.color}} className="credito">
                <h4> {eachCard.type} </h4>
                <p> {eachCard.number} </p>
                <p> Expires{eachCard.expirationMonth}/{eachCard.expirationYear} {eachCard.bank} </p>
                <p>{eachCard.owner} </p>
            </div>
        )
    })
    
  )
}

export default CreditCard