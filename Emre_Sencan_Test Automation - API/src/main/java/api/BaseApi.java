package api;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class BaseApi {

    protected static final String BASE_URL = "https://petstore.swagger.io/v2";

    static {
        RestAssured.baseURI = BASE_URL;
    }

    public Response getRequest(String endpoint) {
        return given()
                .when()
                .get(endpoint);
    }

    public Response postRequest(String endpoint, Object body) {
        return given()
                .contentType(ContentType.JSON)
                .body(body)
                .when()
                .post(endpoint);
    }

    public Response putRequest(String endpoint, Object body) {
        return RestAssured.given()
                .baseUri(BASE_URL)
                .contentType("application/json")
                .header("Accept", "application/json")
                .body(body)
                .when()
                .put(endpoint);
    }

    public Response postRequest(int id,String name, String status) {
        return RestAssured.given()
                .baseUri(BASE_URL)
                .contentType("application/x-www-form-urlencoded")
                .header("Accept", "application/json")
                .formParam("name", name)
                .formParam("status", status)
                .when()
                .post("/" + id);
    }

    public Response deleteRequest(String endpoint) {
        return given()
                .contentType(ContentType.JSON)
                .when()
                .delete(endpoint);
    }
}
