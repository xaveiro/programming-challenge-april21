import pandas as pd
import re

# #Movies

df_title = pd.read_csv('movies.csv')

df_title['title'] = df_title['title'].apply(lambda x: x.strip())
df_treated_title = df_title.copy()
df_treated_title['title'] = df_title['title'].apply(lambda x: x.split('(')[0])

def get_year(row):
    pattern = re.compile(r"\((\d+)\)")             
    year = pattern.findall(row)

    if(year):
        return year[0]
    else:
        return None

df_treated_title['year'] = df_title['title'].apply(get_year)

def generate_df_genres(df):
    df_copy = df.copy()
    movie_title = []
    movie_ids = []
    movie_genres = []
    movie_year = []

    for i in range(df_copy.shape[0]):
        mv_title = df_copy['title'].iloc[i]
        mv_id = df_copy['movieId'].iloc[i]
        mv_genres = df_copy['genres'].iloc[i].strip().split('|')
        mv_year = df_copy['year'].iloc[i]

        for genre in mv_genres:
            movie_title.append(mv_title)
            movie_ids.append(mv_id)
            movie_genres.append(genre)
            movie_year.append(mv_year)

    df_genre = pd.DataFrame({'title' : movie_title, 'movieId' : movie_ids, 'genre' : movie_genres, 'year': movie_year})

    return df_genre

df_movies = generate_df_genres(df_treated_title)
df_movies.to_csv('treatingMovie.csv')

#Ratings
df_rating = pd.read_csv('ratings.csv')

movies = df_rating['movieId'].unique()

list_movies = []
list_avg = []

for movie in movies:
    avg = df_rating[df_rating['movieId'] == movie]['rating'].mean()

    list_movies.append(movie)
    list_avg.append(round(avg,2))

df_rating_avg = pd.DataFrame({'movieId': list_movies, 'avgRating': list_avg})

df_rating_avg.to_csv('treatingRating.csv')

