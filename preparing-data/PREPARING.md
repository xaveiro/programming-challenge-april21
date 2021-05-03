# Preparing the Data

### Dependencies

- pandas (pip3 install pandas)
- mysql (pip3 install mysql-connector-python)

### Preparing

 - You must first download the [publicly available dataset](http://files.grouplens.org/datasets/movielens/ml-25m.zip)

 - Extract the downloaded file and copy the files ```movies.csv``` and ```ratings.csv``` to the ```preparing-data``` folder

 - Execute 
 > python3 treatingData.py

After the treatmentData has finished running

- Execute

> python3 createdDatabase.py your_host user_name password database_name

After the createdDatabase has finished running

- Execute

> python3 populateDatabase.py your_host user_name password database_name

