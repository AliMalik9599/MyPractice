package main.java.hw3;

import com.google.gson.Gson;
import main.java.hw3.model.Author;
import main.java.hw3.model.Book;
import org.sql2o.Connection;
import org.sql2o.Sql2o;
import org.sqlite.SQLiteConfig;
import org.sqlite.SQLiteDataSource;
import main.java.hw3.persistence.Sql2oAuthorDao;
import main.java.hw3.persistence.Sql2oBookDao;
import static spark.Spark.*;

public class Server {

    private static Sql2o getSql2o() {
        // set on foreign keys
        SQLiteConfig config = new SQLiteConfig();
        config.enforceForeignKeys(true);
        config.setPragma(SQLiteConfig.Pragma.FOREIGN_KEYS, "ON");

        // create data source
        SQLiteDataSource ds = new SQLiteDataSource(config);
        ds.setUrl("jdbc:sqlite:MyBooksApp.db");

        return new Sql2o(ds);
    }

    public static void main(String[] args)  {
        // set port number
        final int PORT_NUM = 7000;
        port(PORT_NUM);

        // root route; show a simple message!
        get("/", (req, res) -> "Welcome to MyBooksApp");

        // authors route; return list of authors as JSON
        get("/authors", (req, res) -> {
            Sql2oAuthorDao sql2oAuthor = new Sql2oAuthorDao(getSql2o());
            String results = new Gson().toJson(sql2oAuthor.listAll());
            res.type("application/json");
            res.status(200);
            res.body(results);
            return results;
        });

        //addauthor route; add a new author
        post("/addauthor", (req, res) -> {
            String name = req.queryParams("name");
            int numOfBooks = Integer.parseInt(req.queryParams("numOfBooks"));
            String nationality = req.queryParams("nationality");
            Author a = new Author(name, numOfBooks, nationality);
            new Sql2oAuthorDao(getSql2o()).add(a);
            res.status(201);
            res.type("application/json");
            return new Gson().toJson(a.toString());
        });

         //delauthor route; delete an author
         post("/delauthor", (req, res) -> {
            String name = req.queryParams("name");
            //post request may only contain name so we will set numOfBooks and nationality to 0/null
            int numOfBooks = 0;
            String nationality = null;
            Author a = new Author(name, numOfBooks, nationality);
            new Sql2oAuthorDao(getSql2o()).delete(a);
            res.status(201);
            res.type("application/json");
            return new Gson().toJson(a.toString());
        });

        // TODO: add your new endpoints here
        // book route; return list of books as JSON
        get("/books", (req, res) -> {
            Sql2oBookDao sql2oBook = new Sql2oBookDao(getSql2o());
            String results = new Gson().toJson(sql2oBook.listAll());
            res.type("application/json");
            res.status(200);
            res.body(results);
            return results;
        });

        //addbook route; add a new book
        post("/addbook", (req, res) -> {
            String title = req.queryParams("title");
            String isbn = req.queryParams("isbn");
            String publisher = req.queryParams("publisher");
            int year = Integer.parseInt(req.queryParams("year"));
            int authorId = Integer.parseInt(req.queryParams("authorId"));
            Book b = new Book(title, isbn, publisher, year, authorId);
            new Sql2oBookDao(getSql2o()).add(b);
            res.status(201);
            res.type("application/json");
            return new Gson().toJson(b.toString());
        });

        //delbook route; delete a book
        post("/delbook", (req, res) -> {
            String isbn = req.queryParams("isbn");
            //give title, publisher, year, and authorId null values
            String title = null;
            String publisher = null;
            int year = 0;
            int authorId = 0;
            Book b = new Book(title, isbn, publisher, year, authorId);
            new Sql2oBookDao(getSql2o()).delete(b);
            res.status(203);
            res.type("application/json");
            return new Gson().toJson(b.toString());
        });

        get("/newTables", (req, res) -> {
            new Sql2oBookDao(getSql2o()).clear();
            new Sql2oAuthorDao(getSql2o()).clear();
            res.type("application/json");
            res.status(200);
            return 0;
        });
    }
}
