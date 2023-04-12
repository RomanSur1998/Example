
let app = document.querySelector('#app');
let API = 'https://pokeapi.co/api/v2/pokemon/'


async function Pokemon(a) {
  let res = await fetch(a);
  let data = await res.json();
  
  data.results.forEach((elem,index) => {
    app.innerHTML += `
    <button  onclick="Pokemo(${index})">${elem.name}</button>
    `;
  });
}
Pokemon(API);





let more =  document.querySelector('.more')
    async function Pokemo(index) {
        more.style.display ='block'
        let res1 = await fetch(`${API}${index+1}`)
        let  data1 = await res1.json();
        console.log(data1);
        more.innerHTML=''
            more.innerHTML +=`
            <ul>
            <li> Вес ${data1.weight}</li>
            <li> Рост  ${data1.height }</li>
            <li> Тип ${data1.types[0].type.name }</li>
             <img src=" ${data1.sprites.front_default }" alt=""></ul> `

    
      }



      
      let prev = document.querySelector('.previous')
      let next = document.querySelector('.nex')



      // next.addEventListener('click',async function (){

      //   console.log('Add page')})

        let test=document.querySelector("#test")

        function test1(){
          console.log(test)
        }
        test.addEventListener("click", test1
        )
      

//       next.addEventListener('click',Nexpage)
        
// async function Nexpage(API){
    
//     let res = await fetch(API);
//     let data = await res.json()
// console.log(data)
//     API = data.next ;
//     Pokemon(API);
// }




