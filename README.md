# ![Green Logo](src/components/Images/headerlogo.png)   Greenr App  


## Brief Description
For a start, here are a list of useful links.
1. [Front end as deployed on Netlify](https://greenr-frontend.netlify.app/)
2. [Back end which is deployed on Railway.app]()
3. [Figma Designs](https://www.figma.com/file/SZEEqh7tZ0w0Y2nN2Ky7hp/greenr?node-id=0%3A3)

Greenr is an application whereby the carbon emmitters can purchase carbon credits .The carbon credits allows them to emit a certain percentage of Carbon Dioxide or other green-house gases to the environment.The ultimate goal is to reduce emission of the carbon Dioxide and green-house gases to the environment.


| **Username** | **Password** |
|:------------:|:------------:|
|  seller1     |   123        |
|  seller2     |   123        |
|  buyer1      |   123        |
|  buyer2      |   123        |
|  Admin       |   123        |

## App Features

### Sign up
To sign up, you will be required to enter your user name,email, password, and role. Some of these information are required before the form is submitted in the first place.Onc you have signed up, you will be taken to the home page.

![Signup page](https://user-images.githubusercontent.com/109534662/213363996-97efb97a-3134-4a9a-89ee-437e50ca1954.png)


### Sign in
You can sign in with your username and password. Once you sign in, your will be taken to the home page where you can see a list of available carbon credits if you are a buyer or a list of available carbon credits that are yet to be purchased if you are a seller.

![Login ](https://user-images.githubusercontent.com/109534662/213364297-75b1bece-c046-4b0b-a8f7-a5f2fe1463f1.png)

### Buy Carbon Credits
You can buy carbon credits when you have an a buyer account. The buyer should have some amount of money for them to purchase  the carbon credits.Once you purchase the carbon credits it will not be availble for sale anymore and will be removed from the sellers page.

![buy credits](https://user-images.githubusercontent.com/109534662/213364897-eda9111f-61b2-441e-89d1-0801de2f61a2.png)

### Sell Carbon Credits
A seller can be able to register new carbon credits . Once they have registered the Admin approves it and it is available for the buyers to purchase. The admin verifies the carbon credits then approves it.

![MY Carbon Credits](https://user-images.githubusercontent.com/109534662/213364975-c12730be-f6bf-4b7d-9394-d3d0efd5163b.png)

### Log out
Both the buyer and the seller can log out of their accounts .

## Setup Requirments
Incase you want to run it in your local machine, you will need the following;
- ruby and rails 
- sql server
-   React

Run the following commands to set up the front end
1.  `git clone git@github.com:MICHAELMUNAVU83/greenr-frontend.git`
2.  `cd greenr-frontend.git`
3.  `npm install`
4.  `npm start`

To set up the back end, run the following commands
1.  `git clone git@github.com:MICHAELMUNAVU83/greenr-backend.git`
2.  `cd greenr-backend`
3.  `bundle install`
4.  `rails db:create db:migrate db:seed`
4.  `rails s`


