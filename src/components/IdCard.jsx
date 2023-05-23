

function IdCard() {
    const idCard = [{
        lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:178,
  birth:new Date("1992-07-14").toString(),
  picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
        lastName:'Delores',
        firstName:'Obrien',
        gender:'female',
        height:172,
        birth:new Date("1988-05-11").toString(),
        picture:"https://randomuser.me/api/portraits/women/44.jpg"
    }
]

  return (
    idCard.map((eachElement, index)=>{
        return(
            <div key={index} className="idcard">
                <div>
                    <img src={eachElement.picture} alt="img" />
                </div>
                <div>
                    <h4>Firstname: {eachElement.firstName} </h4>
                    <h4>Lastname: {eachElement.lastName} </h4>
                    <h4>Gender: {eachElement.gender}</h4>
                    <h4>Height: {eachElement.height} </h4>
                    <h4>Birthday : {eachElement.birth}</h4>
                </div>
            </div>
        )
    })
    
  )
}

export default IdCard