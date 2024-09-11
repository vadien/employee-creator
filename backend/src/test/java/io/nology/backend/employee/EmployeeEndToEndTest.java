package io.nology.backend.employee;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.ActiveProfiles;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

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
        employee1.setEmail("test@example.com");
        employee1.setMobileNumber("0412345678");
        employee1.setAddress("42 Wallaby Way Sydney NSW 2000");
        employeeRepository.save(employee1);

        Employee employee2 = new Employee();
        employee2.setFirstName("Secondsamplefirst");
        employee2.setLastName("Secondsamplelast");
        employee1.setEmail("example@test.com");
        employee1.setMobileNumber("0487654321");
        employee1.setAddress("742 Evergreen Terrace Sydney NSW 2000");
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

    @Test
    public void createEmployee_success() {
        CreateEmployeeDTO data = new CreateEmployeeDTO();
        data.setFirstName("created");
        data.setLastName("employee");
        data.setEmail("created@employee.com");
        data.setMobile("0400000000");
        data.setAddress("123 Fake Street Sydney NSW 2000");
        given()
                .contentType(ContentType.JSON).body(data)
                .when().post("/employees")
                .then()
                .statusCode(HttpStatus.CREATED.value())
                .body("firstName", equalTo("Created"))
                .body("lastName", equalTo("Employee"))
                .body("email", equalTo("created@employee.com"))
                .body("mobileNumber", equalTo("0400000000"))
                .body("address", equalTo("123 Fake Street Sydney NSW 2000"));

        given()
                .when().get("/employees")
                .then().statusCode(HttpStatus.OK.value())
                .body("$", hasSize(3));
    }
}
