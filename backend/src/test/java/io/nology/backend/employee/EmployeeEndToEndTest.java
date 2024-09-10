package io.nology.backend.employee;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.hasItems;
import static org.hamcrest.Matchers.hasSize;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.ActiveProfiles;

import io.restassured.RestAssured;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class EmployeeEndToEndTest {
    @LocalServerPort
    private int port;

    @Autowired
    private EmployeeRepository employeeRepository;

    @BeforeEach
    public void setup() {
        RestAssured.port = port;

        Employee employee1 = new Employee();
        employee1.setFirstName("Samplefirst");
        employee1.setLastName("Samplelast");
        // employee1.setEmail("test@example.com");
        // employee1.setMobileNumber("0412345678");
        // employee1.setAddress("42 Wallaby Way Sydney NSW 2000");
        employeeRepository.save(employee1);

        Employee employee2 = new Employee();
        employee2.setFirstName("Secondsamplefirst");
        employee2.setLastName("Secondsamplelast");
        employeeRepository.save(employee2);
    }

    @Test
    public void getAllEmployees() {
        given()
                .when().get("/employees")
                .then()
                .statusCode(HttpStatus.OK.value())
                .body("$", hasSize(2))
                .body("firstName", hasItems("Samplefirst", "Secondsamplefirst"));
    }
}
