#!/usr/bin/python
from bs4 import BeautifulSoup
import mechanize
import sys
from time import gmtime, strftime
from datetime import datetime, timedelta
br = mechanize.Browser()

print "connecting..." #status
mytime = datetime.now()
#mytime += timedelta(hours=5,minutes=30)

name ="R D Teja - Last refreshed at "+mytime.strftime("%H:%M:%S");

r =br.open("https://www.iitm.ac.in/viewgrades/student.html")
new_r = '''
<form method="post" action="studentauth/login.php">
      <input type="text" name="rollno" size=16 maxlength=8>
      <input type="password" name="pwd" size=16>
    <input type="submit" name="submit" value="Submit">
</form> 
'''
r.set_data(new_r)
br.set_response(r)
br.select_form( nr = 0 )
br.form['rollno'] = "ae12b025"
br.form['pwd'] = "RDTeja@1993"	
r=br.submit()

#br.open("https://www.iitm.ac.in/viewgrades/student.html")
#br.select_form( nr = 0 )
#br.form['rollno'] = "ae12b025"
#br.form['pwd'] = "RDTeja@1993"	
#r=br.submit()
print "succesfully connected!" #status
print "Parsing HTML..." #status
br.open("https://www.iitm.ac.in/viewgrades/studentauth/studopts2.php")
br.open("https://www.iitm.ac.in/viewgrades/studentauth/btechdual.php")
html = br.response().get_data()
soup = BeautifulSoup(html)
side = soup.findAll("tr")
for i in range(1,70):
	soup.find("tr").decompose()
html = soup.prettify("utf-8")
comp=open("/home/radavaram/extensions/grades/popup.html","wb")
comp.write("<center><h3>"+name+"</h3></center>")
comp.write("<script src='popup.js' type='text/javascript'></script>")
comp.write(html);
rt_update = open("/home/radavaram/extensions/grades/sls.txt","wb")
rt_update.write(str(len(side) - 83)+"\n")


"""
#soup.table.decompose();
#soup.table.decompose();
side = soup.find("div","sidebar_item")
side2 = soup.find("ul")
soup.find("span","style32").decompose()
soup.find("span","style32").decompose()
side2.decompose();
side.decompose();
#side2.decompose();
soup.table.decompose();
soup.find("table").decompose()
soup.find("hr").decompose()
soup.find("marquee").decompose()
greens = len(soup.findAll('font', color="green"))
reds = len(soup.findAll('font',color="red"))

html = soup.prettify("utf-8")

comp_list.write("<center><h3>"+name+"</h3></center><center><span style='color:green'> Yes: <span id='green' >"+str(greens)+"</span></span> ------- <span style='color:red'> No: <span id='red' >"+str(reds)+"</span></span></center>")
comp_list.write("<script src='popup.js' type='text/javascript'></script>")
css = "<style>body{font-size: 14px;}</style>"
comp_list.write(html)
rt_update.write(str(greens)+"\n")
rt_update.write(str(reds)+"\n")


#### new companies
br.open("http://placement.iitm.ac.in/students/comp_list.php")
html = br.response().get_data();
comp=open("/home/radavaram/Desktop/Extension/company.html","wb")
soup = BeautifulSoup(html)
soup.find("div","sidebar_item").decompose()
soup.find("ul").decompose()
soup.find("span","style32").decompose()
soup.find("span","style32").decompose()
soup.find("table").decompose()
soup.find("table").decompose()
soup.find("table").decompose()
tot_table = soup.find("table").find_all('tr',align="center");
res_dedline = soup.find("table").find_all('tr',bgcolor="#FF9900");
alltables = soup.find_all("table");
alltables[1].decompose();
alltables[2].decompose();
alltables[3].decompose();
alltables[4].decompose();
rt_update.write(str(len(tot_table)-1)+"\n")
rt_update.write(str(len(res_dedline))+"\n")
#soup.find("hr").decompose()

html = soup.prettify("utf-8")
comp_list.write("<center><h2>"+str(len(tot_table)-1)+" Companies</h2></center>")
comp_list.write(html);

"""