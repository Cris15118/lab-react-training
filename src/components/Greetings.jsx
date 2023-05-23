

function Greetings() {
const greetingsArray =[
    {lang: "Hallo", name: "Ludwig" },
    { lang: "Bonjour", name:"François"},
    {lang: "Hello", name: "Bob"},
    {lang: "Hola", name:"Cristina"}
]



  return (
    <div  >
    {greetingsArray.map((eachElement, index)=>{
        return(
            <div key={index} className="card-hello">
 <p>{eachElement.lang} {eachElement.name}</p>
            </div>
           
        )
    })}
        
        </div>
  )
}

export default Greetings