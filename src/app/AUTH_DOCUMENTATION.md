
based on the documentation on @https://supabase.com/dashboard/project/nrytydhtxrciyenhuqkq/api?page=users-management 

1) create an auth folder in app with functions for the following: 
- user sign up 
- user Log in with Email/Password
- Log in with Magic Link via Email
- Password recovery
- Update User - with option to change the password
- user Log out
- get User

2) Create a page for sign up
- once the user sign up, redirect him to the login page
3) Create a page for password recovery. This ends the user a log in link via email. Once logged in you should direct the user to a new password form. And use "Update User" below to save the new password.
4) Use  on the login page @page.tsx the created function for logging in 
- once the user logs in, navigate him to the user profile page
- create the user profile page with his username (=login), email address and the option to change password
- to change the password, user needs to click a button, then a modal appears where he puts the new password and saves it OR cancels the action and comes back to the user profile page
 
Write first tests for the above, then run the tests and then update the project accordingly to the tests. 

 