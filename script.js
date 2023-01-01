

// }
// day()

// var prom1=new Promise((resolve, reject)=>{
//     resolve("yeah it is resolved")
//    console.log("fullfilled state")
// })
// console.log(prom1)
// prom1
// .then((res)=>{
//     console.log(res)
// }
// )

// var prom1=new Promise((resolve, reject)=>{
//     reject("it is rejected")
//    console.log("fullfilled state")
// })
// console.log(prom1)
// prom1
// .catch((res)=>{
//     console.log(res)
// }
// )

// function clorchange(){
//     var color= 'red'

//     setTimeout(()=>{
//         console.log(9);
//         console.log(color);
//         document.body.style.backgroundColor = color
//         var color = 'pink'

//         setTimeout(()=>{
//             console.log(8);
//             console.log(color);
//             document.body.style.backgroundColor = color
//             var color = 'blue'

//             setTimeout(()=>{
//                 document.body.style.backgroundColor = color
//                 var color = 'green'
//                 console.log(color);

//                 console.log(7);
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor = color
//                     console.log(6);
//                     var color = 'yellow'
//                     console.log(color);

//                     setTimeout(()=>{
//                     console.log(color);

//                         document.body.style.backgroundColor = color
//                         console.log(5);
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// }
// var color = 'green'
// setTimeout(()=>{
//     console.log(10);
//     document.body.style.backgroundColor = color
//     color = 'blue'
//       setTimeout(()=>{
//           console.log(9);
//           document.write('<p id="number">9</p>')
//           document.body.style.backgroundColor = color
//           color = 'yellow'
//             setTimeout(()=>{
//                 document.write('<p id="number">9</p>')
//                 document.body.style.backgroundColor = color
//             },1000)
//      },1000)
// },1000)

// var display=document.createElement('p')
// function one(){
//     two(three);
//     setTimeout(()=>{
//         console.log("1")
//         document.write('<p>1</p>')
//         display.innerText="1"

//     },4000)
// }
// function two(three){
//     three(four);
//     setTimeout(()=>{
//      console.log("2") 
//      document.write('<p id="number1">2</p>')
//     },3000)
// }
// function three(four){
//     four();
//     setTimeout(()=>{
//      console.log("3")
//      document.write('<p id="number2">3</p>')
//    },2000)
// }
// function four(){
//     setTimeout(()=>{
//      console.log("4") 
//      document.write('<p id="number3">4</p>')
//     },1000)
// }

// one()

// var num=document.createElement("p");

setTimeout(()=>{
    console.log("10")
    document.write('<p id="number">10</p>')
    setTimeout(()=>{
        console.log("9")
        document.write('<p id="number">9</p>')
        setTimeout(()=>{
            console.log("8")
            document.write('<p id="number">8</p>')
            setTimeout(()=>{
                console.log("7")
                document.write('<p id="number">7</p>')
                setTimeout(()=>{
                    console.log("6")
                    document.write('<p id="number">6</p>')
                    setTimeout(()=>{
                        console.log("5")
                        document.write('<p id="number">5</p>')
                        setTimeout(()=>{
                            console.log("4")
                            document.write('<p id="number">4</p>')
                            setTimeout(()=>{
                                console.log("3")
                                document.write('<p id="number">3</p>')
                                setTimeout(()=>{
                                    console.log("2")
                                    document.write('<p id="number">2</p>')
                                    setTimeout(()=>{
                                        console.log("1")
                                        document.write('<p id="number">1️</p>')
                                        setTimeout(()=>{
                                            document.write('<h2>HAPPY INDEPENDENCE DAY💞💞💞</h2>')
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)

},1000)



// var number=document.createElement('p')
//     //   number.innerHTML=i
//     //   document.body.appendChild(number);

// for (let i = 1; i <=10; i++) {
//     setTimeout(() => {
//       console.log(i)
//       //var number=document.createElement('p')
//       number.innerHTML=i
//       document.body.appendChild(number);
//     },(i*1000))
//   }

//   setTimeout(()=>{
//     number.innerHTML="HAPPY INDENPENDENCE DAY"
//   },6000)