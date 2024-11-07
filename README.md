[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/LPjyprd6)

Name: Bophelo Thwala 

 

Student No.: ST10446904 

 

Module Code: WEDE5020 

 

Lecturer: Mr. Kincade Garanganga 

 

 

Introduction to Web Development POE part 1 - 3

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

WEDE 5020 POE - Part1 

 

IDEAS FOR THE WEBSITE 

 

The website will be made for a company called “Code for All”, it is an organization that is international, we seek to make a natural, positive impact through technology and digital media in anyway, and anywhere around the world with almost 89 countries and counting. 

 

I chose “Code for All” because Code for All is a tech company that strives to make a positive impact around the world through technology and digital media as collaborations does happen in this organization.  

 

The type of website made will be a volunteer coordination platform as this organization is an NGO. 

 

Volunteer coordination platforms offer a suite of services that significantly enhance the efficiency and effectiveness of organizational operations. By implementing features such as a filterable list of opportunities, an interactive event calendar, and comprehensive resource sections, these platforms can streamline volunteer management and improve overall engagement. 

One of the key services provided is a filterable list of volunteer opportunities. This allows users to search for opportunities based on location, skill set, and time commitment. Potential volunteers can easily find positions that align with their interests and schedules, increasing the likelihood of their participation. Additionally, integrated signup forms and calendars simplify the process, reducing administrative tasks and ensuring that volunteers are well-informed about their commitments. 

Another valuable service is the interactive event calendar. This feature provides detailed information about upcoming events, along with registration options. It ensures that volunteers are aware of all opportunities and can plan their participation accordingly. The inclusion of email reminders and notifications helps keep volunteers engaged and informed, reducing the chances of missed commitments and enhancing overall event turnout. 

Finally, the testimonials feature adds a personal touch to the platform. Volunteers can share their stories, which helps build a sense of community and encourages others to get involved. The moderation and approval system ensures that the content is appropriate and aligned with the organization’s values, maintaining a positive and inspiring environment. 

In conclusion, a well-organized volunteer coordination platform with integrated services can greatly benefit any organization. By providing easy access to volunteer opportunities, detailed event information, valuable resources, and personal testimonials, these platforms can attract and retain volunteers more effectively. This, in turn, contributes to the success of the organization’s mission, ensuring that they can make a meaningful impact in their community. 

 

 

 

REFERENCES (for assets folder) 

 

Header Image/Logo: “assets/CFA.png”  

            

Obtained from: Decent jobs for the youth 

            

 Link: https://www.decentjobsforyouth.org/partner/174  

            

  Author: Code For All 

            

  Author profile/website: https://codeforall.org 

 Image source = "world-map.gif” 

obtained from: Geology 

link: https://geology.com/world/world-map.shtml#google_vignette 

 

 

GitHub link: https://github.com/IIEWFL/wede5020-part-1-Bophelo-G-THWALA.git 


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

WEDE5020 POE – PART 2 

    

  Changes / Improvements made to the website of part 1 

 

HEADER AND FOOTER: 

 

         Based on the feedback received about the header and footer, changes were implemented to ensure that the header and footer was very well styled, appeared on every page made for the whole website by put the header and footer in each html page in the codes. 

 

NEW TABS: 

 

         The feedback received on (pages opening on separate pages), this issue has been addressed by using the “target=_blank” function inside each tag with links to other pages, this ensures that the pages open on separate tabs. 

 

Example 1: Home Page Link on the navigation bar 

 

<li><a href="index.html" target="_blank" role="button">Home</a></li> 

 

Example 2: Twitter (X) Page Link on the footer 

 

<a href="https://x.com/codeforall" target="_blank"><img src="Assets/Twitter (X).jpg" height="50" width="50"></a> 

 

BROKEN ASSETS / IMAGES AND LOW QUALITY IMAGES: 

       

        I have addressed this by downloading high quality images, putting them in the “Assets” folder and naming them with using “Assets/photoname.photo extension file”. 

 

Example 1: The Logo of the website 

 

<a href="index.html" target="_blank"><img id="logoHeader" src="Assets/CFA.png" alt="Company Logo"></a> 

 

Example 2:  Images used in the website 

 

<img id="About-Image" src="Assets/peerLearning.png" alt="Peer Learning"> 

 

 

CAPTIONING IMAGES: 

 

        This issues was addressed by putting caption or names of the photos using the “alt” function inside the image <img> tag. 

 

Example 1: 

<img id="NewsletterImage" src="Assets/CFANewsletter.png" alt="News 01 Photo"> 

 

 

MORE CONTENT: 

 

        Based on the feedback involving this issues, I have added extra or additional content on the website. 

 

MAIN PAGES (NAVIGATION BAR PAGES) 

 

Home Page 

 

          Added an introduction and explaination of the company on the website and briefly explained. 

 

Added a map interactive map which shows the location of the company. 

 

Added a YouTube channel link of the company in the website. 

 

Featured projects are added with links which briefly explains any project the user (you) clicks on. 

 

The logo has a link which take you back to the home page. 

 

 

About Page 

 

        A more briefly explanation of the goals and mission is added. 

 

 

Products and Services 

 

               Case Studies of the companies Code for All has worked with and how Code for All has impacted those companies. 

 

            A brief explanation on the services the company provides on the website. 

 

          A form that you can fill in to donate money. 

 

 

News Page 

 

The newsletters added from part 1 of the website has been styled well. 

 

Upcoming events the company will host include workshops, bootcamps and hackathons have been added. 

 

You can also view blogs written by different people based on topics such as using technology and data to fight everyday big issues facing countries and the world. 

 

 

 

Link to the GitHub of the website with changes 

 

Link: https://github.com/IIEWFL/wede5020-part-2-Bophelo-G-THWALA.git 

 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

WEDE POE – PART 3 (FINAL) 

  

  

Changes / Improvements made to the website of part 2 

  

 1.File and Folder Structure 

  

Based on the feedback received on file and folder structure, I have rectified this problem by making folders for html files, css files, javascript files and to ensure that the website works with through folder structures by linking links, image assets, html pages, stylesheets(CSS) and scripts(JavaScript) by “..(return to parent folder or main folder)/(folder name)/(script or stylesheet name).(programming language extension format)” 

  

Example: 

Html 

<a href="About Us.html" target="_blank" role="button"><button id="AboutButton">Learn More</button></a><br><br> 

 (html inside HTML pages folder on the project) 

  

CSS 

<link rel="stylesheet" href="../CSS/home page.css"> 

(css inside CSS folder on the project) 

  

JS 

<script src="../JS/products And Services.js"></script> 

(javascript inside JS folder on the project) 

  

2.Modern font across all pages 

Based on the feedback received, I have fixed this problem by adding font-family on the <body> and <html> of every css file, so that the font appears on the whole page. 

Font Added: Arial, Helvetica, sans-serif; 

  

Example: 

  

Home Page 

  

html, body { 

  height: 100%; 

  width: 100%; 

  margin: 0; 

  padding: 0; 

  overflow-x: hidden; 

  background-image: url("../Assets/backImage.png"); 

  background-size: cover; 

  background-position: center; 

  font-family: Arial, Helvetica, sans-serif; 

} 

3. Navigation section is uniform 

  

Based on the feedback received, I have dealt with this by checking every css file of each page to ensure that  the header and footer styling and responsiveness are the same in every html page. 

  

4. Responsiveness Fix 

  

Based on the feedback received, I have ensured that responsiveness is correctly applied and works. Responsiveness is tested by making sure that the content on each page responds to each page size (@media 960px with adjustments) was applied, and horizontal scrolling should not appear. 

  

  

  

  

  

  

  

 

 

 

 

 

 

Functionality Implementation 

  

  

 1.Products And Services Page 

 

1.1 Calendar (Products and Services Page) 

I could implement JavaScript through a dynamic calendar that is structured and styled. A calendar is functional by these JavaScript codes below 

 Step 1: Initialized and declared month, year, day variables to get the current date. 

 

Step 2: Create a function to manage the calendar. 

 

Step 3: Initialize variables for the functionality of the calendar. 

 

Step 4: Created “for” loops to handle calendar functionality by iterating through the 7 days of the week. 

 

Step 5: Made “if” statements to handle empty cells for days before the 1st and after the last day of the month, highlight and get today's date. 

 

2.Forms (Products and services, sign-up, contact us pages) 

I have implemented JavaScript in the forms of the pages mentioned above by getting information the user has entered in these inputs. 

Step 1: Initialized variables to get user information (not permanently stored) 

Step 2: Use “if” statements to handle user inputs and send data to another page. 

Step 3: Initialize variables to receive data sent from the form pages. 

 

 

 

 

 

 

 

 

 

 

 

 

SEO (Search Engine Optimization) Techniques / Steps Used 

  

1.Use of descriptive links 

I made the buttons of the header more descriptive to make it more accessible, enhance user experience and more meaningful. 

  

Example: 

  

 <li><a href="Home Page.html" target="_blank" role="button">Return to the Home Page</a></li> 

        <li><a href="About Us.html" target="_blank" role="button">Learn more About Us</a></li> 

        <li><a href="Products and Services.html" target="_blank" role="button">Explore Our Products and Services</a></li> 

        <li><a href="News.html" target="_blank" role="button">Check Our Latest News</a></li> 

        <li><a href="Contact Us.html" target="_blank" role="button">Get In Touch with Us</a></li> 

        <li><a href="Products and Services.html" target="_blank" role="button"><button id="DonateButton">Donate to support</button> 

        </li></a> 

  

2.Title-Tag optimization 

  

I ensured that the title tag has more descriptive and relevant text and keywords, so that it can appear in search engine results. 

  

Example: 

  

 <title>Code For All - Empowering Communities with Technology & Digital Solutions</title> 

  

3.Meta Description 

It provides a summary of your page’s content. While it doesn’t directly influence rankings, it plays a critical role in click-through rates (CTR) from search engine results. 

  

Example: 

 <meta name="description" content="Code For All empowers global communities through innovative technology solutions,  

    bridging the gap between technology and social impact. Join us to drive positive change."> 

  

4.Heading Structure 

I made sure that header tags are organized and used in the correct places as to not confuse readers / users of the website. 

  

  

5.Social Media Sharing Optimization 

I applied this technique by ensuring that Open Graph (OG) and Twitter Card meta tags are used to ensure your content appears attractively when shared on social media. 

  

Example:  

  

<meta property="og:title" content="Code For All - Empowering Communities with Technology"> 

  <meta property="og:description" content="Join Code For All to drive social impact through innovative tech solutions."> 

  <meta property="og:image" content="https://codeforall.org/Assets/CFA.png"> 

  <meta property="og:url" content="https://codeforall.org"> 

  <meta name="twitter:card" content="summary_large_image"> 

  

6.Optimizing Website Load Speed 

I have added this  ( <link rel="preload" href="path/to/font.woff2" as="font" type="font/woff2" crossorigin="anonymous"> ) tag to optimize load times enhancing user experience and SEO performance as Page speed is a ranking factor, and slow websites tend to have higher bounce rates. 

  

7.Image Optimization 

  

For the website to be more optimized, I have used alt=”” and made my image captions more descriptive and providing of more context to increase accessibility and to make make users to understand what every picture is used for. 

  

Example: 

  

 <a href="Home Page.html" target="_blank"><img id="logoHeader" src="../Assets/CFA.png" alt="It is the Company's Logo"></a> 

  

  

References (updated, referencing all assets used) 

 

Website Logo 

 

     Obtained from: Decent jobs for the youth 

 

      Link: https://www.decentjobsforyouth.org/partner/174 

 

      Author: Code For All 

 

      Author profile/website: https://codeforall.org 

Home Page Background 

 

      Obtained from : shutter shock 

   

       Link: https://www.shutterstock.com/video/clip-1054345952-motion-abstract-technology-concept-background-digital-line 

 

Author: PhetcharatBiRTH 

 

  Author profile: https://www.shutterstock.com/g/AroonPhetcharat/video 

 

 

Projects 

 

Project 1 

 

            Obtained from: Insights 

            

Link: https://www.greatplacetowork.com/resources/blog/how-synchrony-is-using-data-to-increase-workplace-diversity  [12 September 2022] 

            

Author: Ted Kitterman 

            

Author Profile: https://www.greatplacetowork.com/authors/ted-kitterman 

 

Project 2 

 

           Obtained from: Nikann 

           Link: https://nikanntranscriptiontyping.co.za/formatting/ [2023] 

           Author: Nikann Solutions 

           Author Profile: https://nikanntranscriptiontyping.co.za/ 

 

Project 3 

   

             Obtained from: joywallet 

            Link: https://joywallet.com/article/what-is-growth-investing/ 

            Author: Brent Ervin-Eickhoff  

            Author Profile: https://joywallet.com/author/brent-ervin-eickhoff/ 

 

Project 4 

          

                Obtained from: Twitter / X 

                Link: https://x.com/MDSNZ/status/1833369844164760039/photo/1 

               Author: Media Design School 

           Author Profile: https://x.com/MDSNZ 

 

 

Social Media Photos 

 

Twitter (X) Logo 

 

 

Obtained from: Twitter / X 

 

Link: https://x.com/TechlusiveOFCL/status/1838058104769872208 

 

Author: Techlusive 

 

Author Profile: https://x.com/TechlusiveOFCL/status/1838058104769872208 

 

 

Instagram Logo 

 

Obtained from: Dribble 

 

Link: https://dribbble.com/shots/18192084-Instagram-logo 

 

Author: Sania Malik 

 

Author Profile: https://dribbble.com/saniamalik_0000 

 

LinkedIn Logo 

 

Obtained from: raw pixel 

 

Link: https://www.rawpixel.com/search/linkedin%20icon%20png?page=1&path=_topics&sort=curated 

 

 

 

Banner photo (About Page) 

 

Obtained from: Thompsons Travel 

 

Link: https://blog.thompsonstravel.co.za/tag/meetings/ 

 

 

 

Missions 

 

Peer Learning 

 

Obtained from: LinkedIn 

 

Link: https://www.linkedin.com/pulse/back-school-transformational-design-ifunanya-ifeacho 

 

Author: Ifunanya Ifeacho 

 

Author Profile: https://uk.linkedin.com/in/ifunanya-ifeacho-69587b3 

 

Redeploying-tools 

 

Obtained from: LinkedIn 

 

Link: https://www.linkedin.com/pulse/industry-use-cases-jenkins-apurv-waghma 

 

Author: Apurv Waghmare 

 

Author Profile: https://in.linkedin.com/in/apurv-waghmare-b9a920124 

 

 

Co-Creation 

 

Obtained from: Shuttershock 

 

Link: https://www.shutterstock.com/image-vector/include-outsiders-ideation-word-concepts-banner-1922121191 

 

Author: bsd Studio 

 

Author Profile: https://www.shutterstock.com/g/bsdvector 

 

Capacity Building 

 

Obtained from: shuttershock 

 

Link: https://www.shutterstock.com/image-photo/capacity-building-improvement-individual-organizations-facility-2301876207 

 

Author: dizain 

 

Author Profile: https://www.shutterstock.com/g/diza 

 

 

 

 

 
 

 

 

 

 

 

 

 

 

 

 

 
