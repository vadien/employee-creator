package io.nology.backend.employee;

import java.util.List;

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

    public Employee createEmployee(@Valid CreateEmployeeDTO data) throws Exception {
    }

}
