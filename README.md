
# News Prediction App 📰

The News Prediction React native App with the Classification ML model deployed on Flask App **Hosted Live 🌐** on pythonanywhere platform.
## Sections of Project

- Machine Learning Model ⚙️
- React Native App (**_Front-End_**) 📱
- Flask App (**_Back-End_**) 🛢️
## Tech Stack

**Client:** React-Native, Expo-Router, StyleSheets, Lucid-react, Axios \
**Server:** Flask App \
**ML Model:** Google Collab, Sickit-learn, NLTK 

## Setup the project

To setup the project running need to setup frontend and backend and need to generate pickel file of the desired ML Model and Configure all these things among each other to set the App running.

### 1. Download the project

```
git clone https://github.com/ratnesh003/news-prediction-react-native-app.git 
```
you will get three Folders as Downloaded
- flask_app
- news_prediction_app
- python_script

### 2. Install dependencies of frontend

```
cd .\news_prediction_app\
```
this will navigate you in fronend folder of the app
```
npm install
```
after running above command all the frontend dependencies will be downloaded in the folder i.e. the node modules

### 3. Training ML Model

- Upload the file Fake_News_Perdiction.ipynb on Google Collab form the python_script folder downloaded previously
- Downloaded the train.csv from the link given in the 1st text tab of the Fake_News_Perdiction.ipynb file
- Create ML folder in MyDrive on Google Drive Upload the train.csv in ML folder
- In Google Collab navigate Runtime in above menubar and select Run all option
- navigate files section in the sidebar of the Google Collab and Download lg_model.pkl (**_Logistic Regression model_**) from the files section

### 4. Setting up backend

- Create the account on [**PythonAnyWhere**](https://www.pythonanywhere.com/)
- In above menubar navigate to web section and Create your one free web app based on flask framework
- In above menubar navigate to files section and select mysite in Directories section
- In Files click on Upload a file and upload lg_model.pkl
- click on flask_app.py file in Files section and replace the code of the file from the code present in flask_app.py which is present in flask_app folder downloaded previously
- Return to from above menubar navigate back to web section and click reload

### 5. Install dependencies of backend

- On PythonAnyWhere in above menubar navigate to console section
- In ' Start a new console: ' section in other option select select Bash and run
```
pipX.Y install flask-cors
```
in the above code the X.Y represents the python version selected while creating the web app based on flask framework replace it accordingly

### 6. Running the App

- Now come back to the frontend flies again and in news_prediction_app > app > action > prediction.js replace the model_url value with your PythonAnyWhere web app domain name string which will look like
```
  https://<username>.pythonanywhere.com/prediction
```
just need to replace the <username> with your PythonAnyWhere username

🚩 Finally to run the app open the news_prediction_app folder in terminal and run the below command
```
npx expo start
```
scan the generated QR with Expo Go App (available on PlayStore) make sure the machine running the frontend code and the mobile used to scan are connected to the same router
