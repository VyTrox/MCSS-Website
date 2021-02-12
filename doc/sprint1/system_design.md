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
- Footer section of the website and it contains description and siderbar(social link of MCSS).

Collaborators:  
- Zechuan Liu 

**Class name: siderbar** 
Parent class: React.Component  
Responsibilities:  
- Link to other social platform of MCSS.

Collaborators:  
- Zechuan Liu 

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

Collaborators:  
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

