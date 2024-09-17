package io.nology.backend.employee;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.nology.backend.common.exceptions.NotFoundException;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@Valid @RequestBody CreateEmployeeDTO data) throws Exception {
        Employee newEmployee = this.employeeService.createEmployee(data);
        return new ResponseEntity<Employee>(newEmployee, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employeeList = this.employeeService.findAll();
        return new ResponseEntity<>(employeeList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) throws NotFoundException {
        Optional<Employee> result = this.employeeService.findById(id);
        if (result.isEmpty()) {
            throw new NotFoundException("Could not find employee with id " + id);
        }
        Employee foundEmployee = result.get();
        return new ResponseEntity<Employee>(foundEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> deleteEmployeeById(@PathVariable Long id) throws NotFoundException {
        Optional<Employee> result = this.employeeService.deleteById(id);
        if (result.isEmpty()) {
            throw new NotFoundException("Could not find employee with id " + id);
        }
        Employee foundEmployee = result.get();
        return new ResponseEntity<Employee>(foundEmployee, HttpStatus.OK);
    }

}
