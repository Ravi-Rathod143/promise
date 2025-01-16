// ---------------------    currying ---------------------------------------------------------------------------------------------------

// currying jo process he wo Aadha kaam krana  and adha kaam baad me krna (A function which returns a function)
// eg  mere paas do fn he  boilnoodles  and  cookNoodle 
// muze noodle ko boil krke rakhana he and cook baad me krna he
// to yahan pe maine ek simply ek Spectial function banaya he that is curry
// and jiska kaam he noodle ko boil krna and ek function ko return krna jo ki noodle ko cook karega
// ab ye jo fn me return kr rha hun and me jb isko call krunga tbhi noodle cook hona start honge
// maine simply cookMyFood ek variable create kiya  a,d curry function call kr liya
// is curry function ka kaam he process ko shuru krna
// isne aadhi process shuru kardi and baaki adhi process ka control muze de diya
//  after 5 second jb bhi me cookMyFood ko execute krunga to baaki ki bachi hui process run hojayegi 

let hasCustomerCame=false;
function boilNoodles(){
    console.log("boiled noodles");
    
}
function cookNoodle(){
    console.log("cookNoodles");
    
}
function curry(){
    boilNoodles()
    return function (){
        cookNoodle()
    }
}
const cookMyFood=curry()  // mazya kde fkt boiled ch ahe cookNoodle alach nahi tr te yenyasathi settimeut madhe cookMyFood call kr tr remaining part yeto

setTimeout(()=>{
    hasCustomerCame=true;
    cookMyFood()
},5000)








































































































