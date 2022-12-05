Custom Roster Designer

Project Purpose:
The primary objective of this project was to delve into, and elaborate upon the "factory design pattern" by implementing it within an executable code that could potentially prove of use in realistic scenarios. To illustrate, in this implementation of the assigned design pattern, coaches are provided with a convininet and efficient manner to scout players' performance and history within a variety of sports, and conduct any needed adjustments given a player's background. For the sake of demonstration, the following code offers a quite simplistic demo of the aforementioned implementation, utilizing the Golden State Warriors. 

How to Run:
Simply copy paste the URL of the "cover.html" onto a browser, or drag the html file onto a browser. 


Contributors:
1) Rawad Eid
2) Steven Francis
3) Mark Abi Saleh
4) Tony Sleiman


Basic Structure:
a) Home Page
b) About Page
c) Formation Page


a) Home Page:
When the code provided within the repository is properly executed, users will be presented with a home screen displaying the NBA's Golden State Warriors, along side a button labelled "Get Started", that will lead them to the next stage of the project: The About Page. 

b) About Page:
Here, users are shown brief descriptions of all the teams players, including their highlights and accomplishments. Within the same page, users may find a navigation bar that allows them to access the home page, or the main focus of this project: the Formation page. 

c) Formation Page:
Within this page, users are provided access to select amongst the players they wish to see on the court, aswell as display their performances via statistics to conclude which player may play.


Hardest Section & Lessons 
Multiple obstacles were tackled throughout the completion of this project. To elaborate, the select menus within the formation page were quite a hastle as adjusting its position within the screen in addition to its implementation on several instances within the same screen proved quite challenging. Additionally, due to our inexperience handling javascript, implenting the design pattern too was quite taxing. Finally, implenting the about page to function as it does required external resources not provided within the software utilized: Visual Studio Code. To elaborate on one of the issues faced, i.e. the multiple select menus:

<script>
				var selectField = document.getElementById("selectField");
				var selectText = document.getElementById("selectText");
				var options = document.getElementsByClassName("options");
				var list = document.getElementById("list");
				var arrowIcon = document.getElementById("arrowIcon");
			
				selectField.onclick = function(){
					list.classList.toggle("hide");
					arrowIcon.classList.toggle("rotate");
			
				}
			
			
				for(option of options){
					option.onclick = function(){
						selectText.innerHTML = this.textContent;
						list.classList.toggle("hide");
						arrowIcon.classList.toggle("rotate");
					}
				}
				
			</script>
			
The following code functioned as required for one of the select menus required to select players. However, we were required to implement this code multiple times. To fix this, we simply changed the id's of the headers.


Additional Challenges:
Designing and styling proved quite time-consuming, as there are a plethora of functions that can be implemented to adjust bery minimal details within the code. However, this simoultaneously was in a sense the most rewarding task, as some sections within the project, and sections that did not make it to the final version of the project were aesthetically pleasing.

Final Thoughts:
This project despite its challenges was extremely beneficial as it provided insight regarding the fields of coding and general computer engineering. Additionally, insight regarding a plehora of other coding softwares that we are not accustomed to using and seeing like HTML, CSS, and JS, was obtained, which is extremely beneficial on the long run. A plethora of tutorials online aided the completion of this assignment's smaller sections (like styling), which opened our minds to the magnitude of the coding community as a whole. 
