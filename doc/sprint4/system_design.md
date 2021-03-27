# MCSS Website System Design Document

![MCSS Transparent Logo](https://user-images.githubusercontent.com/56453666/107679203-441cbf80-6c6a-11eb-8573-5f18d0b20ba1.png)


## Table of Contents
- CRC Cards
- MVC Architecture


### CRC Cards
**Class name: AboutUs**  
Parent class: React.Component  
Responsibilities:  
- Display basic information about what the MCSS is about and what they can provide to students

Collaborators:  
- Alex Quach


**Class name: footer**  
Parent class: React.Component  
Responsibilities:  
- Footer section of the website, it is available at the bottom of every page of the MCSS website. Mainly serves as a quick way to get to other social platforms that the MCSS is active on. An icon is shown besides for easy identification and easier navigation.

Collaborators:  
- Zechuan Liu 
- Alex Quach

**Class name: siderbar**  
Parent class: React.Component  
Responsibilities:  
- Link to other social platform of MCSS.
- Display a small box in the right side of the web to redirect users to MCSS's shopify website (future proofing).

Collaborators:  
- Zechuan Liu 
- Lang Qin

**Class name: post**  
Parent class: React.Component  
Responsibilities:  
- Post section of MCSS and it can display information for user and executive team will be able to edit.

Collaborators:  
- Zechuan Liu 

**Class name: header**  
Parent class: React.Component  
Responsibilities:  
- head section of MCSS and it has multiple section for user to access.
- Have switch to let user switch between light and drak mode for all the pages.
- Drawer for navigation to all the pages

Collaborators:  
- Zechuan Liu 
- Lang Qin

**Class name: Programs**  
Parent class: React.Component  
Responsibilities:  
- Display suggestions and recommended courses of all the MCS programs at each year level.

Collaborators:
- Youan Cong
- Lang Qin

**Class name: UsefulInformation**  
Parent class: React.Component  
Responsibilities:  
- Offer links for all kinds of information

Collaborators:
- Yichun Liu

**Class name: MCSSTeam**  
Parent class: React.Component  
Responsibilities:  
- Create a webpage which shows all the MCSS team members with their positions

Collaborators:
- Wentao Zhou

**Class name: developer**  
Parent class: React.Component  
Responsibilities:  
- Provide developers' github homepage and email address

Collaborators:
- Yichun Liu

**Class name:AcademicResources**
Parent class: React.Component
Responsibilities:
- Display introduction and link for useful academic resources

Collaborators:
- Yiling Li

**Class name: calendar**  
Parent class: React.Component  
Responsibilities:  
- Displays all events in a time frame

Collaborators:
- Yichun Liu

**Class name: EventsPage**  
Parent class: React.Component  
Responsibilities:  
- Display all events posted by a MCSS executive, order from newest to oldest.
- Users can click on an event to see more detail about it in an individual event page

Collaborators:  
- Alex Quach
- Zechuan Liu

### MVC Architecture
The project will mainly be completed using ReactJS, which utilizes JavaScript as its main language and is supplemented with HTML and CSS.
- Model
  - React components and MongoDB
- View
  - React's composable user interface
- Controller
  - Actions and data fetching
![1200px-MVC-Process svg](https://user-images.githubusercontent.com/56453666/107681990-c8bd0d00-6c6d-11eb-9e65-aa186ee81944.png)

