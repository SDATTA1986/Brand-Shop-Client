# Brand-Shop

## [ Live Link for Client Side](https://brand-shop-client-79297.web.app)
Click here for the Live Link for Client Side: [https://brand-shop-client-79297.web.app](https://brand-shop-client-79297.web.app)

# Questions
## _Q1. Add at least 5 Project features & functionalities_
Ans: This project has got the following features- 

- This project is all about Brand-Shop. The MainLayout of this website consits of fixed Navbar component which consists of 1 no. of Logo component & 4 nos. of Navlink components namely, (i) Home, (ii) Add Product, (iii) My Cart, (iv) LOGIN.

- The Home component is a children component of the MainLayout component. The Home component consists of a Navbar, Banner, Our Brands section (which consists of 6 popular brands), Our Services section, Contact Us section and Footer. 


- each of the 5 out of the 6 Brands has 4 types of Products section  and 3 common advertisement slider. There are two buttons View Details and UPDATE PRODUCT in each product. By clicking VIEW DETAILS, user can see the details of the particular product. But, user has to login before watching the `VIEW DETAILS` section. Once, the user is logged in,he/she will get `Add to Cart` button. Once clicked this button, the product will be added to `My Cart` section.

- The `My Cart` section is a private route and user can only access if he/she is logged in.In this section , all the product that are added will be shown. User can also delete a product from cart by clicking `DELETE` button.

- User can also add new product in the `ADD PRODUCT` section in the Navbar which is a protected route. User can also modify an already added product by clicking in the `UPDATE PRODUCT` button. This is also a private route.

- In the `LOGIN NOW` button, user will be guided to either login for existing users and if there is a new user, he has to register first and then he can login. During registration,  user has to give his name, photo,emailid and password and except password, all details will be seen in the Navbar as long as the user is Logged in. User will get a Log Out option to log out from this site.

- There is also another way of login i.e. through Google. User needs to select his particular gmail id and need to give password. After that, the user will be automatically logged in. 
