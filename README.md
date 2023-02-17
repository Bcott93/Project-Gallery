# Project-Gallery - Founders & Coders

As part of my application to join the Founders & Coders apprenticeship, I have built a gallery to show the projects I have been working on.

## The Goal

The goal was to create a gallery showcasing the skills I have which make me a viable candidate for the apprenticeship. I have included projects from both this application, and my previous bootcamp. 

## Requirements

The requirements for the page were:

    - Have a section or card for each project
    - Each card should have a title, an image of your project, and a description
    - Use flexbox to arrange the cards on the page,
    - Resize cards based on screen width,
    - Adapt the layout of the gallery when the browser window resizes
    - Display the cards in a single column on mobile devices
    - Have a clickable button on each card that opens and closes the description text.
    - 1 

## How did I make the site?

### Planning

Initially I looked into manipulating flexboxes to meet the responsiveness of the challenge, as the majority of the technical requirements are to do with how the boxes interact with display resolution. 

Once I was confident I knew how to do that, the rest was using my GitHub repo to import the data required to create a polished final product.

### Building & Debugging

I started by adding a title, a placement nav bar (I will consider dynamically adding the Nav Bar for each project, so that I can add to the code at a later date), a hero image and placement text for the projects. 

I then tested the CSS Flexbox (credits to resources below) to ensure that it worked. Once I was happy that with the placement of the cards, I started adding data and images from my GitHub. I confirmed the responsiveness once the information was added. 

I added button elements for individual links to the repo and deployment of each project, I also considered adding the buttons using JavaScript, but I didn't seem worthwhile as there was no need for dynically created elements.  

I completed added a Show More button to the bottom of each card, and used a JavaScript loop to hide all the information until the button is pressed. Once its pressed, the data shows in "block" format and button text changes to Show Less. The loop added this to all the projects. As it is dynamic, more projects can be added without the need for code amendments. 



## Usage

To view the project, please follow the links below:

https://bcott93.github.io/Project-Gallery/




![Sample of the Application]()

## License

Please see the License in the Repo.

## Credits
https://github.com/Bcott93?tab=repositories
https://learn.foundersandcoders.com/course/syllabus/application/project-gallery/project/ 
https://blog.logrocket.com/responsive-image-gallery-css-flexbox/
https://www.w3schools.com/css/css_dropdowns.asp
https://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery

