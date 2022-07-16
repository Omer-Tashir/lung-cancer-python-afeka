# Load libraries
import pandas as pd
import numpy as np
from sklearn import preprocessing
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier  # Import Decision Tree Classifier
# Import train_test_split function
from sklearn.model_selection import train_test_split
# Import scikit-learn metrics module for accuracy calculation
from sklearn import metrics
import matplotlib.pylab as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn import linear_model
from sklearn.feature_selection import RFE
from sklearn.ensemble import RandomForestClassifier
import matplotlib.pyplot as plt
from sklearn.tree import plot_tree
from sklearn import tree
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import roc_curve
from sklearn.metrics import roc_auc_score
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas

from io import BytesIO
import base64

from flask_cors import CORS, cross_origin
from flask import Flask, request, jsonify
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

df = pd.read_csv('LC14.csv')
df

#droping sub columns
df = df.drop('HOW_LONG_SMOKING', axis='columns')
df = df.drop('CIGARETTES', axis='columns')
df = df.drop('FAMILY_LUNG_CANCER_HISTORY', axis='columns')
df = df.drop('FAMILY_MEMBER_AGE_DISEASE', axis='columns')
df = df.drop('FAMILY_MEMBER_SMOKING', axis='columns')
df = df.drop('CRISIS_TYPE', axis='columns')
df = df.drop('SLEEP_DISORDERS', axis='columns')
df = df.drop('SLEEPING_PILL', axis='columns')
df = df.drop('COUGHING_LONGTIME', axis='columns')
df = df.drop('WAKEUP_COUGHING', axis='columns')
df = df.drop('COUGHING_FREQUENCY', axis='columns')
df = df.drop('RICKETY_SPOT', axis='columns')
df = df.drop('SYMPTOMS_DURATION', axis='columns')
df = df.drop('COMORBID', axis='columns')
df = df.drop('LUNG_CANCER_LEVEL_DISEASE', axis='columns')
df = df.drop('DIAGNOSIS_MANNER', axis='columns')
df = df.drop('NOTES', axis='columns')
df

"""RUN 1 """

#split dataset in features and target variable
#RUN1= 28 colums
feature_cols = ['SEX', 'AGE', 'MARITAL_STATUS', 'RELIGION', 'CITY',
                'LIVING_SPACE_TYPE', 'LIVING_ENVIOROMENT_TYPE', 'BASEMENT', 'WORK_ENVIORMENT', 'EDUCATION_LEVEL',
                'SMOKING', 'PASSIVE_SMOKING', 'FAMILY_CANCER_HISTORY', 'LOST', 'CRISIS',
                'SADNESS', 'STRESS', 'HAPINESS', 'PHYSICHAL_ACTIVITY', 'SLEEPING_HOURS', 'DIET', 'COUGHING', 'WEIGHT_LOSS', 'PHYSICHAL_ACTIVITY_DIFFICULTY',
                'RICKETY_BONES', 'DIFFICULTY_SWALLOWING', 'BLOOD_MUCUS', 'FATIGUE']

X = df[feature_cols]  # Features
y = df["LUNG_CANCER"]  # Target variable

# Encode single column
#RUN1
labelEncoder = preprocessing.LabelEncoder()
X.SEX = labelEncoder.fit_transform(X.SEX)
X.MARITAL_STATUS = labelEncoder.fit_transform(X.MARITAL_STATUS)
X.RELIGION = labelEncoder.fit_transform(X.RELIGION)
X.CITY = labelEncoder.fit_transform(X.CITY)
X.LIVING_SPACE_TYPE = labelEncoder.fit_transform(X.LIVING_SPACE_TYPE)
X.LIVING_ENVIOROMENT_TYPE = labelEncoder.fit_transform(
    X.LIVING_ENVIOROMENT_TYPE)
X.BASEMENT = labelEncoder.fit_transform(X.BASEMENT)
X.WORK_ENVIORMENT = labelEncoder.fit_transform(X.WORK_ENVIORMENT)
X.EDUCATION_LEVEL = labelEncoder.fit_transform(X.EDUCATION_LEVEL)
X.SMOKING = labelEncoder.fit_transform(X.SMOKING)
X.PASSIVE_SMOKING = labelEncoder.fit_transform(X.PASSIVE_SMOKING)
X.FAMILY_CANCER_HISTORY = labelEncoder.fit_transform(X.FAMILY_CANCER_HISTORY)
X.LOST = labelEncoder.fit_transform(X.LOST)
X.CRISIS = labelEncoder.fit_transform(X.CRISIS)
X.SADNESS = labelEncoder.fit_transform(X.SADNESS)
X.STRESS = labelEncoder.fit_transform(X.STRESS)
X.HAPINESS = labelEncoder.fit_transform(X.HAPINESS)
X.PHYSICHAL_ACTIVITY = labelEncoder.fit_transform(X.PHYSICHAL_ACTIVITY)
X.SLEEPING_HOURS = labelEncoder.fit_transform(X.SLEEPING_HOURS)
X.DIET = labelEncoder.fit_transform(X.DIET)
X.COUGHING = labelEncoder.fit_transform(X.COUGHING)
X.WEIGHT_LOSS = labelEncoder.fit_transform(X.WEIGHT_LOSS)
X.PHYSICHAL_ACTIVITY_DIFFICULTY = labelEncoder.fit_transform(
    X.PHYSICHAL_ACTIVITY_DIFFICULTY)
X.RICKETY_BONES = labelEncoder.fit_transform(X.RICKETY_BONES)
X.DIFFICULTY_SWALLOWING = labelEncoder.fit_transform(X.DIFFICULTY_SWALLOWING)
X.PHYSICHAL_ACTIVITY = labelEncoder.fit_transform(X.PHYSICHAL_ACTIVITY)
X.BLOOD_MUCUS = labelEncoder.fit_transform(X.BLOOD_MUCUS)
X.FATIGUE = labelEncoder.fit_transform(X.FATIGUE)

y_encoder = labelEncoder.fit_transform(y)
y_encoder

#define train and test' train = 0.6 test = 0.4
x_train, x_test, y_train, y_test = train_test_split(
    X, y_encoder, test_size=0.4)
x_test.shape

"""RUN 1 - RANDOM FOREST"""

Rf = RandomForestClassifier(
    n_estimators=1000, max_depth=2)  # , max_features=3)
Rf.fit(x_train, y_train)

Rf_pred = Rf.predict(x_test)
print("Accuracy Random Forest Classifier",
      metrics.accuracy_score(y_test, Rf_pred))

rf_probs = Rf.predict_proba(x_test)
rf_probs[:10, :]
rf_probs = rf_probs[:, 1]
rf_auc = roc_auc_score(y_test, rf_probs)
rffpr, rftpr, rf_thresholds = roc_curve(y_test, rf_probs)


def plot_roc_curve(fpr, tpr):
    plt.plot(fpr, tpr, color='orange', label='ROC')
    plt.plot([0, 1], [0, 1], color='darkblue', linestyle='--')
    plt.xlabel('False Positive Rate')
    plt.ylabel('True Positive Rate')
    plt.title('Receiver Operating Characteristic (ROC) Curve')
    plt.legend()
    plt.show()


plt.figure(dpi=150)
plt.plot(rffpr, rftpr, color='g', label='RF ROC')
#plt.plot(knnfpr, knntpr, color='b', label='Knn ROC')
#plt.plot(svmfpr, svmtpr, color='orange', label='SVM ROC')
plt.plot([0, 1], [0, 1], color='r', linestyle='--')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('Receiver Operating Characteristic (ROC) Curve')
plt.legend()

@app.route("/hello")
def hello():
    return "Hello"

@app.route('/form1Probabillity', methods=["GET"])
def getForm1Probabillity():
    args = request.args
    feature_cols3 = ['AGE', 'CITY', 'PASSIVE_SMOKING', 'SADNESS',
                    'COUGHING', 'PHYSICHAL_ACTIVITY_DIFFICULTY', 'RICKETY_BONES']

    X3 = df[feature_cols3]  # Features
    y = df["LUNG_CANCER"]  # Target variable

    X3.AGE = args['AGE']
    X3.CITY = args['CITY']
    X3.PASSIVE_SMOKING = args['PASSIVE_SMOKING']
    X3.SADNESS = args['SADNESS']
    X3.COUGHING = args['COUGHING']
    X3.PHYSICHAL_ACTIVITY_DIFFICULTY = args['PHYSICHAL_ACTIVITY_DIFFICULTY']
    X3.RICKETY_BONES = args['RICKETY_BONES']
    
    labelEncoder = preprocessing.LabelEncoder()
    X3.AGE = labelEncoder.fit_transform(X3.AGE)
    X3.CITY = labelEncoder.fit_transform(X3.CITY)
    X3.PASSIVE_SMOKING = labelEncoder.fit_transform(X3.PASSIVE_SMOKING)
    X3.SADNESS = labelEncoder.fit_transform(X3.SADNESS)
    X3.COUGHING = labelEncoder.fit_transform(X3.COUGHING)
    X3.PHYSICHAL_ACTIVITY_DIFFICULTY = labelEncoder.fit_transform(
        X3.PHYSICHAL_ACTIVITY_DIFFICULTY)
    X3.RICKETY_BONES = labelEncoder.fit_transform(X3.RICKETY_BONES)

    y_encoder = labelEncoder.fit_transform(y)

    #define train and test' train = 0.6 test = 0.4
    x3_train, x3_test, y_train, y_test = train_test_split(
        X3, y_encoder, test_size=0.4)
    x3_test.shape

    Rf3 = RandomForestClassifier(
        n_estimators=1000, max_depth=2)  # , max_features=5)
    Rf3.fit(x3_train, y_train)

    proba = Rf3.predict_proba(x3_test)
    
    return jsonify(dict(response=proba[-1, 0]))

@app.route('/form2Probabillity', methods=["GET"])
def getForm2Probabillity():
    args = request.args
    feature_cols2 = ['AGE', 'MARITAL_STATUS', 'CITY', 'BASEMENT',
                 'SMOKING', 'PASSIVE_SMOKING', 'FAMILY_CANCER_HISTORY', 'LOST',
                 'SADNESS', 'HAPINESS', 'PHYSICHAL_ACTIVITY', 'COUGHING', 'PHYSICHAL_ACTIVITY_DIFFICULTY', 'RICKETY_BONES']

    X2 = df[feature_cols2]  # Features
    y = df["LUNG_CANCER"]  # Target variable

    X2.MARITAL_STATUS = args['MARITAL_STATUS']
    X2.CITY = args['CITY']
    X2.BASEMENT = args['BASEMENT']
    X2.SMOKING = args['SMOKING']
    X2.PASSIVE_SMOKING = args['PASSIVE_SMOKING']
    X2.FAMILY_CANCER_HISTORY = args['FAMILY_CANCER_HISTORY']
    X2.LOST = args['LOST']
    X2.SADNESS = args['SADNESS']
    X2.HAPINESS = args['HAPINESS']
    X2.PHYSICHAL_ACTIVITY = args['PHYSICHAL_ACTIVITY']
    X2.COUGHING = args['COUGHING']
    X2.PHYSICHAL_ACTIVITY_DIFFICULTY = args['PHYSICHAL_ACTIVITY_DIFFICULTY']
    X2.RICKETY_BONES = args['RICKETY_BONES']
    
    labelEncoder = preprocessing.LabelEncoder()
    X2.MARITAL_STATUS = labelEncoder.fit_transform(X2.MARITAL_STATUS)
    X2.CITY = labelEncoder.fit_transform(X2.CITY)
    X2.BASEMENT = labelEncoder.fit_transform(X2.BASEMENT)
    X2.SMOKING = labelEncoder.fit_transform(X2.SMOKING)
    X2.PASSIVE_SMOKING = labelEncoder.fit_transform(X2.PASSIVE_SMOKING)
    X2.FAMILY_CANCER_HISTORY = labelEncoder.fit_transform(X2.FAMILY_CANCER_HISTORY)
    X2.LOST = labelEncoder.fit_transform(X2.LOST)
    X2.SADNESS = labelEncoder.fit_transform(X2.SADNESS)
    X2.HAPINESS = labelEncoder.fit_transform(X2.HAPINESS)
    X2.PHYSICHAL_ACTIVITY = labelEncoder.fit_transform(X2.PHYSICHAL_ACTIVITY)
    X2.COUGHING = labelEncoder.fit_transform(X2.COUGHING)
    X2.PHYSICHAL_ACTIVITY_DIFFICULTY = labelEncoder.fit_transform(X2.PHYSICHAL_ACTIVITY_DIFFICULTY)
    X2.RICKETY_BONES = labelEncoder.fit_transform(X2.RICKETY_BONES)

    y_encoder = labelEncoder.fit_transform(y)

    x2_train,x2_test,y_train,y_test = train_test_split(X2,y_encoder, test_size=0.4)
    x2_test.shape

    Rf2 = RandomForestClassifier(n_estimators=1000)
    Rf2.fit(x2_train, y_train)
    proba = Rf2.predict_proba(x2_test)

    return jsonify(dict(response=proba[-1, 0]))