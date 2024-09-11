 
var a=10;
document.write("<b>Question 1 </b><br><br>Result: <br><br> The value of a is: "+a+"<br>.................................................");
a=a++;
document.write("The value of a is: "+a+"<br>.................................................");
var a=++a;
document.write("<br>The value of ++a is: "+a+"<br> Now the value of a is: "+a);

var a=++a;
document.write("<br><br>The value of ++a is: "+a+"<br> Now the value of a is: "+a);

var a=--a;
document.write("<br><br>The value of ++a is: "+a+"<br> Now the value of a is: "+a);

var a=--a;
document.write("<br><br>The value of ++a is: "+a+"<br> Now the value of a is: "+a);

 
document.write("<br><br><b>second question</b>");
var a=2, b=1;
var result=--a;
document.write("<br><br>The value of --a is: "+result);

result=--a - --b;
document.write("<br><br>The value of --a - --b is: "+result);

result=--a - --b + ++b;
document.write("<br><br>The value of --a - --b + ++b is: "+result);

result=--a - --b + ++b + b--;
document.write("<br><br>The value of --a - --b + ++b + b-- is: "+result);

document.write("<br> <br>the value of a is: "+a);
document.write("<br> the value of b is: "+b);
document.write("<br> the total result: "+result);
 
 
var userInput=prompt("Question Third \n Enter your name:",userInput);
document.write("<br><br><b>third question</b>");
document.write("<br><br> Hello "+userInput+" , welcome to my website");

 
document.write("<br><br><b>Question Five</b>");

var number=5;

number=prompt("Enter your number",number);

document.write("<br><br> The number you entered is: "+number);

for(var i=1; i<=10; i++){
    document.write("<br>"+i+"*"+number+"="+(i*number));
}

 

document.write("<br><br><b>Question Six</b>");
 var sub1,obtaindMark1,totalMarks=100;
var percent=obtaindMark1*totalMarks;

 sub1=prompt("Enter your First Subject",sub1);
 obtaindMark1=prompt("enter your Fist subject marks",obtaindMark1)
 document.write("<b> Sub    Total_Marks   Obtaind_Marks    Percentage</b> ");
 document.write("<br><br>" +sub1+"   "+totalMarks+"   "+obtaindMark1+"   "+percent);

 var sub2,obtaindMark2,totalMarks=100;
 var percent2=obtaindMark2*totalMarks;
 
  sub2=prompt("Enter your Second Subject",sub2);
  obtaindMark2=prompt("enter your Second subject marks",obtaindMark2)
 
  document.write("<br><br>" +sub2+"   "+totalMarks+"   "+obtaindMark2+"   "+percent2);
 

 
