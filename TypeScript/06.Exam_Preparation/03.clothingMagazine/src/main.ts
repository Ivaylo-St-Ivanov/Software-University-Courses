import { Magazine } from "./Magazine";
import { Cloth } from "./Cloth";

function main() {  
    const magazine = new Magazine("Zara", 20);
    
    const cloth1 = new Cloth("red", 36, "dress"); 
    
    console.log(cloth1.toString());
    // Product: dress with size 36, color red 
    
    magazine.addCloth(cloth1); 
    
    console.log(magazine.removeCloth("black"));  // false 
    
    const cloth2 = new Cloth("brown", 34, "t-shirt"); 
    const cloth3 = new Cloth("blue", 32, "jeans"); 
    
    magazine.addCloth(cloth2); 
    magazine.addCloth(cloth3);
    
    const smallestCloth = magazine.getSmallestCloth(); 
    console.log(smallestCloth?.toString()); 
    // Product: jeans with size 32, color blue 
    
    const getCloth = magazine.getCloth("brown"); 
    console.log(getCloth?.toString());
    // Product: t-shirt with size 34, color brown

    console.log(magazine.getClothCount());
    
    console.log(magazine.report()); 
    // Zara magazine contains: 
    // Product: jeans with size 32, color blue 
    // Product: t-shirt with size 34, color brown 
    // Product: dress with size 36, color red 
}

main();