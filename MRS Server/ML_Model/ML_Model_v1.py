
#get_ipython().run_line_magic('matplotlib', 'inline')
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity
from nltk.stem.snowball import SnowballStemmer
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.corpus import wordnet
from surprise import Reader, Dataset, SVD, evaluate
import json
import warnings; warnings.simplefilter('ignore')
import tmdbsimple as tmdb
tmdb.API_KEY = '52e1a7b21533b5e1f51c02c04d14b6b4'

md = pd.read_csv('input/movies_metadata.csv')




links_small = pd.read_csv('input/links_small.csv')
links_small = links_small[links_small['tmdbId'].notnull()]['tmdbId'].astype('int')


md = md.drop([19730, 29503, 35587])

md['id'] = md['id'].astype('int')



smd = md[md['id'].isin(links_small)]
smd.shape




smd['tagline'] = smd['tagline'].fillna('')
smd['description'] = smd['overview'] + smd['tagline']
smd['description'] = smd['description'].fillna('')



tf = TfidfVectorizer(analyzer='word',ngram_range=(1, 2),min_df=0, stop_words='english')
tfidf_matrix = tf.fit_transform(smd['description'])



tfidf_matrix.shape



cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)


cosine_sim[0]


smd = smd.reset_index()
titles = smd['title']
indices = pd.Series(smd.index, index=smd['title'])



def get_recommendations(title):
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:31]
    movie_indices = [i[0] for i in sim_scores]
    return titles.iloc[movie_indices]


s = get_recommendations('Forrest Gump').head(10)


def poster(ids):
    response = tmdb.Movies(ids).info()
    print(response['poster_path'])

# convert to json
a = s.to_json(orient='records')
y = json.loads(a)

def a():
    return y


