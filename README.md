# NetFlix GPT

- npm create vite@latest
- configure tailwind css in our app
- Routing
- Created Sign In form
- Creates Sign up now
- Form validation
- Firebase setup
- Used Firebase for auth and deployment
- Install firebase CLI 'npm install -g firebase-tools'
- firebase login
- firebase init
- firebase build (npm run build)
- firebase deploy
- Create Sign up user account
  -firebase documenttation https://firebase.google.com/docs/auth/web/password-auth?hl=en&_gl=1*1q5dnur*_up*MQ..&gclid=Cj0KCQjwh5vFBhCyARIsAHBx2wz9fqjWJRvsQwE5bTzGtsv05aI7yTLE_w0k2SgKkP4CuO7GKju0YBQaAp0PEALw_wcB&gclsrc=aw.ds&gbraid=0AAAAADpUDOjE3ANM0q8V4aOKYzEAezFUO
  // password 1234Abc@50
  // email priyanka3@gmail.com
  //User@1234, user@gmail.com
  - Implement sign in/ sign up user api
  - created Redux store with userSlice
  - Sign out
  - auth
  - navigation
  - bugfix of signup user displayName and profile update
  - Bugfix - if the user is not login redirect to login page/ - if login redirect to browse page
  - unsubscribe to the onAuthStateChanged callback
  - register for TMDB api and create an app and get access token
  - Get Data from TMDB now playing movies list api
  - Custom Hook
  - Planning for MainContainer and secondaryContainer
  - Update the store with TrailerVideo
  - Added Iframe

# Features

- Login/ Sign Up
  - Sign In/ Sign Up form
  - Redirect to Browse Page
- Browse (After authentication)
  - Header
  - Main Movie
    -Trailer in Background
    -Title and discription
    - Movie suggestion
      - Movie List
- NetflixGPT
  - Search Bar
  - Movie suggestion
