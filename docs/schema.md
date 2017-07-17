# Schema Information 

### users 

| column name   | data type     | details|
| ------------- |:-------------:| -----:|
| id     | integer | not null, primary key |
| username      | string     |   not null, indexed, unique |
| email | string      |    not null, indexed, unique |