# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Aidan Murphy

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not make a unit test for the "message" feature as there are many components that makes up a message and it is quite broad. This unit test would not test simply one 'unit', it would test the message feature itself, network communication between users, and backend logic. Unit tests are best for small isolated units of code, and this feature is neither small nor isolated.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

I would use a unit test to test the "max message length" feature of a messaging application, because creating the test itself would be quite simple, but it would also keep the specifications of the program in line. In a messaging application, the message itself is the key part of the application, so you want to make sure everything is taken care of in regards to that feature. Max message length is a well defined component and can easily be tested.