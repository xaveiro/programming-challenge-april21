import pandas as pd
import sys
import mysql.connector as msql
from mysql.connector import Error
import math

treatingMovies = pd.read_csv('treatingMovie.csv')
treatingRatings = pd.read_csv('treatingRating.csv')


if(len(sys.argv) != 5):
		print("Error! This program should run like this:")
		print("python3 populateDatabase.py <host> <user> <password> <database>")
		sys.exit(1)

try:
    host = sys.argv[1]
    user = sys.argv[2]
    password = sys.argv[3]
    database = sys.argv[4]
    conn = msql.connect(host=host,database=database,user=user,password=password)
    if conn.is_connected():
        cursor = conn.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("You're connected to database: ", record)

        cursor.execute('DROP TABLE IF EXISTS movies;')
        print('Creating movies table....')
        cursor.execute("CREATE TABLE movies(title varchar(255),movieId varchar(255),genre varchar(255),year varchar(255))")
        print("Table is created....")
        sql = "INSERT INTO " + database + ".movies (title,movieId,genre,year) VALUES (%s,%s,%s,%s)"
        for i,row in treatingMovies.iterrows():
            if((type(row.title) != float) and (not(math.isnan(row.year)))):
                cursor.execute(sql, tuple(row)[1:])
                conn.commit()
        print('Movies table created')
        print('\n')

        cursor.execute('DROP TABLE IF EXISTS ratings;')
        print('Creating rating movies table....')
        cursor.execute("CREATE TABLE ratings(movieId varchar(255), avgRating float)")
        print("Table is created....")
        sql = "INSERT INTO " + database + ".ratings (movieId,avgRating) VALUES (%s,%s)"
        for i,row in treatingRatings.iterrows():
            cursor.execute(sql, tuple(row)[1:])
            conn.commit()
        print('Ratings table created')

except Error as e:
    print("Error while connecting to MySQL", e)