
# Architech Library Management

For the for SA coding exercise, I built a Spring Boot backend with a Postgres Database. The frontend is built in Angular with the Apollo Client.

**Getting Started**

Both projects are contained in this repository:
 - library-management-server
 - library-management-ui

To run the application in Docker, run this command from the root of the repository:

	docker-compose up
	
** OR **

If you'd rather launch the application in your IDE or locaally, you can use the section below.  

Some prerequisites required:
 - java jdk
 - maven
 - node
 - npm
 - angular-cli
 - docker

To launch the application, start the postgres server with the following command:

	docker run --name mypostgres -e POSTGRES_PASSWORD=zaq12wsx -p 5432:5432 -d postgres

Then start the library-management-server either by executing the LibraryManagementServerApplication class in your IDE, or by running the maven command from the library-management-server folder:

    mvn spring-boot:run
To launch the UI, run this command from the library-management-ui folder:

    npm start

 **Using the App**
 
 To access the application, open the following URL in your browser:
 
    http://localhost:4200	
To login, there is a built-in account with the username **architech** and the password **architech**.

To explore the GraphQL Schema, GraphiQL is installed and running here:

    http://localhost:8080/graphiql?path=/graphql

There is also static documentation for the GraphQL API in the **doc/schema/** folder of the root of this repository.

Please don't hesistate to contact me with any questions or concerns.

