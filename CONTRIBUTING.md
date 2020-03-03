## JavaScript & TypeScript  

1.  Use only Fat Arrow Syntax for all functions.   
2.  Redux props must be PascalCase.   
3.  React props must be camelCase.   
4.  Constants must be all caps separated with underscore.   
5.  Action Constants are always PascalCase.
6.  No consoles strictly.
7.  Avoid setTimeout, setInterval.   
8.  Avoid use `any` data type.  
9.  TSLINT must give no errors or warnings.  
10. Keep the react state and redux store clean. 
11. No HARD CODE data.
12. Private variables or methods must start with underscore.  
13. Public props or methods must be camelCase.  
14. Action Constants are always PascalCase.  
15. Methods or Variables must clearly say what they are doing or what they have.  
16. Any interface that is imported in more than one place must be in interfaces folder.  
17. React state internal values must be camelCase.  
18. React state values from API must be PascalCase.  
19. All values in state are optional.   
20. Don't add type for constructor param props.  (React 16+)



## CSS   

1. All class names must be in small case and seperated with '-' only.  
2. No styles should be written on HTML elements.   
3. No styles should be written in hierarchy (ex: div > label) (Why ? Because HTMl structure will change as required. so you cannot rely on it). 
4. Generic names should be written for commonly used classes.   
5. Class names must be appropriate to that component or must be generic.

## React 

1. Clear console logs before commitng the code.
2. Routes should be declared and imported from page constants.
3. Action types should be declared and imported from Action constants.
4. Avoid hardcoding the api urls.( should be declared in api_urls.ts file).
5. Reusable components should be implemented in componets/generic folder.
