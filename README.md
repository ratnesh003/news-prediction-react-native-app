
# News Prediction App 📰

The News Prediction React native App with the Classification ML model deployed on Flask App **Hosted Live 🌐** on pythonanywhere platform.
## Sections of Project

- Machine Learning Model ⚙️
- React Native App (**_Front-End_**) 📱
- Flask App (**_Back-End_**) 🛢️
## Tech Stack

**Client:** React-Native, Expo-Router, StyleSheets, Lucid-react \
**Server:** Flask App \
**Model:** Google Collab, Sickit-learn, NLTK 

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
- In Google Collab navigate Runtime in above menu bar and select Run all