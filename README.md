# Base React application with Redux  
## 1. Basic setup  
1.1. Install Node.js.  
	- Run: `node -v`  
	- Run: `npm -v`  

1.2. Create a React application using create-react-app:  
	- Run: `npx create-react-app base-react-redux-app`  
	

1.3. Install React Router, Redux, React Redux, Redux Thunk and Axios:  
	- Run: `cd base-react-redux-app`  
	- Run: `npm install --save react-router redux react-redux redux-thunk axios`  
	

1.4. Install Material-UI from https://material-ui.com/ (optional):  
	- Run: `npm install --save @material-ui/core @material-ui/icons`  
	

1.5. Make sure everything is fine:  
	- Run: `npm start`  
	- Try: http://localhost:3000  
	
## 2. Using Redux  
2.1. Define actions types in src/actions/actionsTypes.js.  
2.2. Create your actions inside src/actions folder.  
2.3. Create your reducers inside src/reducers folder.  
2.4. Create a store in src/store/store.js using Redux `combineReducers`, `applyMiddleware` and `createStore`.  
2.5. Add the store to your application using Redux `Provider` in index.js.  
2.6. Create your containers inside src/containers folder and connect them to Redux using `connect`, `mapStateToProps` and `mapDispatchToProps`.  
