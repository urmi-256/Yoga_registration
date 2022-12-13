# Yoga Classes Registration portal

This is a small portal to register for monthly yoga classes under various batches.

### Deployment
One can view the deployed site on netlify. Click here [link](https://statuesque-cendol-a602d5.netlify.app/)

### what are the features?
It include a registration page for user to register and login along with a dashboard to view user details and join monthly yoga classes.

### How does it work?
* User can register on the portal using their name, email, password.
* User can login using email and password with secured JWT Token.
* Once registered user will be redirected to dashboard where newly joined can join any batch.
* ALready registered once can join a batch monthly on any date of the month with a fees of 500/- Rs INR.
* User should be between 18-65 to join any batch.

### What Algorithm used?
* Single user using any email id i.e. only unique user id and user.
* User between age 18-65 are only allowed to fill the form to join any batch.
* New User can join any batch any time of month.
* Already joined are checked by comparing thier date of joining with current month.
* If not joined in the currently going month are made to join.

### Database Tables
* user_data (data for registration)
- userid,email,password,name as attributes with unique email and id as primary key
* detail (table to store user data)
- userid, email,date,name,batch,age with userid as primary key
- email is unique.

### Er diagram 
[ER diagram](https://drive.google.com/file/d/1yfgZx1iN8w1YgwCCCxIqfAtEtNybFSTx/view?usp=sharing)

### various pages
[Register](https://drive.google.com/file/d/17R7wFZit2PfkxmBzzjs6KMK2IFlLn-qT/view?usp=sharing)
[dashboard](https://drive.google.com/file/d/1HwBUZGIMBV6nkeHS8ouBbyRmnFDGbA28/view?usp=sharing)
[form](https://drive.google.com/file/d/1w3NIzwPBCbJdb1X3iTSyDV-3A6HaxH8X/view?usp=sharing)
