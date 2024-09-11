package io.nology.backend.employee;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.nology.backend.common.ValidationErrors;
import jakarta.validation.Valid;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    public List<Employee> findAll() {
        return this.repo.findAll();
    }

    public Optional<Employee> findById(Long id) {
        return this.repo.findById(id);
    }

    public Employee createEmployee(@Valid CreateEmployeeDTO data) throws Exception {
        ValidationErrors errors = new ValidationErrors();
        Employee newEmployee = new Employee();
        newEmployee.setFirstName(capitaliseAndTrimString(data.getFirstName()));
        if (data.getMiddleNames() != null) {
            newEmployee.setMiddleNames(capitaliseAndTrimString(data.getMiddleNames()));
        }
        newEmployee.setLastName(capitaliseAndTrimString(data.getLastName()));

        newEmployee.setEmail(data.getEmail().toLowerCase().trim());
        newEmployee.setMobileNumber(data.getMobile().trim());
        newEmployee.setAddress(data.getAddress().trim());

        newEmployee.setContractType(data.getContractType());
        newEmployee.setStartDate(data.getStartDate());
        newEmployee.setCurrentEmployee(data.getCurrentEmployee());
        return this.repo.save(newEmployee);
    }

    // updateEmployeeById

    public String capitaliseAndTrimString(String string) {
        String lowerString = string.toLowerCase();
        String capString = Stream.of(lowerString.trim().split("\\s"))
                .filter(word -> word.length() > 0)
                .map(word -> word.substring(0, 1).toUpperCase() + word.substring(1))
                .collect(Collectors.joining(" "));

        return capString.trim();
    }

}
