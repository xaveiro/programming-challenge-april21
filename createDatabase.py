import sys
import mysql.connector as msql
from mysql.connector import Error

if(len(sys.argv) != 5):
		print("Error! This program should run like this:")
		print("python3 populateDatabase.py <host> <user> <password> <database>")
		sys.exit(1)

try:
    host = sys.argv[1]
    user = sys.argv[2]
    password = sys.argv[3]
    database = sys.argv[4]
    conn = msql.connect(host=host,user=user,  
                        password=password)
    if conn.is_connected():
        cursor = conn.cursor()
        cursor.execute('DROP DATABASE IF EXISTS ' +  database + ';')
        cursor.execute("CREATE DATABASE " + database)
        print("Database is created")
except Error as e:
    print("Error while connecting to MySQL", e)

