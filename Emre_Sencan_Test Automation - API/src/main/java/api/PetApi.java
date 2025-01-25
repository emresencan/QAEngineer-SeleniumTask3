package api;
import io.restassured.response.Response;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class PetApi extends BaseApi{

    private static final String PET_ENDPOINT = "/pet";

    public PetApi() {
        this.client = HttpClient.newBuilder()
                .followRedirects(HttpClient.Redirect.NORMAL)
                .build();
    }

    public Response createPet(int id, String name, String status) {
        String requestBody = String.format("{\"id\": %d, \"name\": \"%s\", \"status\": \"%s\"}", id, name, status);
        return postRequest(PET_ENDPOINT, requestBody);
    }

    public Response getPetById(int petId) {
        return getRequest(PET_ENDPOINT + "/" + petId);
    }

    public HttpResponse<String> getPetById2(int petId) {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(new URI(BASE_URL + "/" + petId))
                    .header("Accept", "application/json")
                    .GET()
                    .build();

            return client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public Response updatePet(int id, String name, String status) {
        String requestBody = String.format("{\"id\": %d, \"name\": \"%s\", \"status\": \"%s\"}", id, name, status);
        return putRequest(PET_ENDPOINT, requestBody);
    }

    public Response updatePetWithFormData(int id, String name, String status) {
        return postRequest(id,name,status);
    }

    public Response deletePet(int petId) {
        return deleteRequest(PET_ENDPOINT + "/" + petId);
    }

    private final HttpClient client;
    public HttpResponse<String> deletePet2(int petId) {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(new URI(BASE_URL + "/" + petId))
                    .header("Accept", "application/json")
                    .DELETE()
                    .build();

            return client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
