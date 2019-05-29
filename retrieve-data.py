import numpy as np
import pandas as pd
import csv
from concurrent.futures import ThreadPoolExecutor
import threading
import tweepy
from tweepy import OAuthHandler
import json
import pyrebase
import copy
import datetime
import firebase_admin
from firebase_admin import credentials, db
import re
import os
import psutil
import ast
import numpy as np

def main():
    cred = credentials.Certificate("firebase-cred.json")
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://hive-258ce.firebaseio.com/'
    })

    ref = db.reference()
    retrieveData()

def retrieveData():
    ref = db.reference('Tweets-Real')
    result = ref.get()
    data = pd.DataFrame(columns=['Date', 'Tweet','Tweet latitude', 'Tweet longitude', 'User','User location', 'Retweets', 'Replies', 'Liked', 'User', 'Handle', 'Followers', 'Total Tweets by user'])
    for i,key in enumerate(result.keys()):
        data.loc[i] = (result[key]['Date'] if 'Date' in result[key] else np.NaN,
        result[key]['Tweet'] if 'Tweet' in result[key] else np.NaN,
        result[key]['Tweet latitude'] if 'Tweet latitude' in result[key] else np.NaN,
        result[key]['Tweet longitude'] if 'Tweet longitude' in result[key] else np.NaN,
        result[key]['User'] if 'User' in result[key] else np.NaN,
        result[key]['User location'] if 'User location' in result[key] else np.NaN,
        result[key]['Retweets'] if 'Retweets' in result[key] else np.NaN,
        result[key]['Replies'] if 'Replies' in result[key] else np.NaN,
        result[key]['Liked'] if 'Liked' in result[key] else np.NaN,
        result[key]['User'] if 'User' in result[key] else np.NaN,
        result[key]['Handle'] if 'Handle' in result[key] else np.NaN,
        result[key]['Followers'] if 'Followers' in result[key] else np.NaN,
        result[key]['Total Tweets by user'] if 'Total Tweets by user' in result[key] else np.NaN)
    print(data[data['Followers'] == data['Followers'].max()])

if __name__ == '__main__':
    main()