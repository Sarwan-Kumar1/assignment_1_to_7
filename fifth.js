document.write("<br><br><b>Chapter 5 </b><br><br>")
// first
var a=3, b=5, c=a+b;
document.write("<b>Question 1 </b><br><br>Sum of "+a+" and "+b+" is "+c);
// second

var a=3, b=5, c=a-b;
document.write("<br><br><b>Question 2 </b><br><br>Substraction of "+a+" and "+b+" is "+c);

var a=3, b=5, c=a*b;
document.write(" <br>Multiplication of "+a+" and "+b+" is "+c);

var a=3, b=5, c=a/b;
document.write("<br> Division of "+a+" and "+b+" is "+c);

var a=11, b=2, c=a%b;
document.write("<br> Modulus of "+a+" and "+b+" is "+c);

// third

var firstNumber;
document.write(" <br><br><b>Question 3 </b><br><br>Value after variable declaratio is:"+firstNumber);

firstNumber=5;
document.write("<br>Value after variable initialization is:"+firstNumber);

firstNumber=++firstNumber;
document.write("<br> Value after increment is:"+firstNumber);

firstNumber=firstNumber+7;
document.write("<br>Value after addition is:"+firstNumber);

firstNumber=--firstNumber;
document.write("<br>Value after decrement is:"+firstNumber);

firstNumber=firstNumber%3;
document.write("<br>The remainder:"+firstNumber);

// fourth

var oneTicket=600, ticketQuantity=5, totalCost=oneTicket*ticketQuantity;
document.write("<br><br><b>Question 4 </b><br><br>Total cost to by "+ticketQuantity+" tickets to a movies is "+totalCost);

// fifth
var tableNumber=4;

document.write("<br><br><b>Question 5 </b><br><br>table number is: "+tableNumber+"<br>")
for( var i=1; i<=10; i++){
   
    document.write(tableNumber+"*"+i+"="+tableNumber*i+"<br>");
}

// sixth
// convert F to C
var  F=80, C=(80-32)*5/9;
document.write("<br><br><b>Question 6 </b><br><br> Fahrenheit to Celsius Converter <br>"+F+"F to C is: "+C+"<br>");

// convert C to F
var C=26.7, F=(26.7*9/5)+32;
document.write("<br>Celsius to Fahrenheit Converter <br>"+C+"C to F is: "+F);

// seven
var item1=650, item2=100, shippingCharges=100, quantityItem1=3, quantityItem2=7, totalCost=(item1*quantityItem1)+(item2*quantityItem2)+shippingCharges;

document.write("<br><br><b>Question 7 </b><br><br>Price of item 1 is: "+item1);
document.write("<br>Quantity of item 1 is: "+quantityItem1);

document.write("<br>Price of item 2 is: "+item2);
document.write("<br>Quantity of item 2 is: "+quantityItem2);

document.write("<br> Shipping Charges is: "+shippingCharges);
document.write("<br>Total cost of your order is: "+totalCost);

// eight
var totalMarks=980, obetainedMarks=804, percentage=(obetainedMarks/totalMarks)*100;
 document.write("<br><br><b>Question 8 </b><br><br>Total marks: "+totalMarks);
 document.write("<br>Marks obtained: "+obetainedMarks);
 document.write("<br> Percentage: "+percentage+"%")

// nine
var dollar=10, riyals=25, oneDollar=104.80, oneRiyal=28, totalCurrency=(dollar*oneDollar)+(riyals*oneRiyal);

document.write("<br><br><b>Question 9 </b><br><br>Total currency in PKR: "+totalCurrency);

// ten
var number=10;

document.write("<br><br><b>Question 10 </b><br><br>Initail value is: "+number);
number=(number+5)*10/2
document.write("<br>add 5 <br> multiply by 10 <br>Divide by 2 <br>Total calculation is: "+ number);
 
// eleven
var currentYear=2016, birthYear=1992, yourAge=(currentYear-birthYear);
document.write("<br><br><b>Question 11 </b><br><br>Current Year: "+currentYear);
document.write("<br>Your Birth Year: "+birthYear)
document.write("<br>Your age is: "+yourAge);

// tewelve
var radius=20, cricumferenceCricle=2*3.142*radius, areaCricle=3.142*radius*radius;
document.write("<br><br><b>Question 12 </b><br><br>Radius of circle is: "+radius);
document.write("<br>Circumference of circle is: "+cricumferenceCricle);
document.write("<br>Area of circle is: "+areaCricle);
 
// thirteeen
var favoriteSnack= "chocolate chip", currentAge=15, estimatedMaxAge=65, amountOfSnacksPerDay=3;

document.write("<br><br><b>Question 13 </b><br><br>My favorite snack is: "+favoriteSnack);
document.write("<br>My current age is: "+currentAge);
document.write("<br>My estimated maximum age is: "+estimatedMaxAge);
document.write("<br>Amount of snacks I eat per day is: "+amountOfSnacksPerDay);

var remainingAge=estimatedMaxAge-currentAge;
var chocolateNeed=remainingAge*amountOfSnacksPerDay;
document.write("<br>You will need "+chocolateNeed+" chocolate chip to last you until the ripe old age of "+estimatedMaxAge);