import api.PetApi;
import io.restassured.response.Response;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import static org.hamcrest.Matchers.equalTo;
import static org.testng.Assert.assertEquals;

import java.net.http.HttpResponse;

public class PetApiTests {

    private static PetApi petApi;
    private static final int testPetId = 12345;

    @BeforeMethod
    public static void setup() {
        petApi = new PetApi();
    }

    @Test(enabled = true, description = "Case1: Create Pet Positive Test")
    public void Case1_CreatePetPositiveTest() {
        Response response = petApi.createPet(testPetId, "Ophelia", "available");
        response.then().statusCode(200).body("id", equalTo(testPetId)).body("name", equalTo("TestPet"));
    }

    @Test(enabled = true, description = "Case2: Get Pet By Id Positive Test")
    public void Case2_GetPetByIdPositiveTest() {
        petApi.createPet(testPetId, "Ophelia", "available");
        Response response = petApi.getPetById(testPetId);
        response.then().statusCode(200).body("id", equalTo(testPetId));
    }

    @Test(enabled = true, description = "Case3: Get Pet By Id Negative Test")
    public void Case3_GetPetByIdNegativeTest() {
        HttpResponse<String> response = petApi.getPetById2(99999);
        assertEquals(response.statusCode(), 404);
    }

    @Test(enabled = true, description = "Case4: Update Pet Positive Test")
    public void Case4_UpdatePetPositiveTest() {
        petApi.createPet(testPetId, "Ophelia", "available");
        Response response = petApi.updatePet(testPetId, "UpdatedTestPet", "sold");
        response.then().statusCode(200).body("name", equalTo("UpdatedTestPet"));
    }

    @Test(enabled = true, description = "Case5: Update Pet Negative Test")
    public void Case5_UpdatePetNegativeTest() {
        Response response = petApi.updatePetWithFormData(888887, "UnknownPet", "sold");
        response.then().statusCode(404);
    }

    @Test(enabled = true, description = "Case6: Delete Pet Positive Test")
    public void Case6_DeletePetPositiveTest() {
        petApi.createPet(testPetId, "Ophelia", "available");
        Response response = petApi.deletePet(testPetId);
        response.then().statusCode(200);
        }

    @Test(enabled = true, description = "Case7: Delete Pet Negative Test")
    public void Case7_DeletePetNegativeTest() {
        HttpResponse<String> response = petApi.deletePet2(88888);
        assertEquals(response.statusCode(), 404);
    }
}
