package io.nology.backend.employee;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "employees")
public class Employee {

    public Employee() {
    }

    // First name
    // Middle name(s)
    // Last name
    // Preferred pronouns
    // email
    // mobile
    // residential address
    // contract type (casual/contract/perm)
    // Start date
    // Finish date
    // Current employee (if yes, no finish date)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @NotBlank
    @Column
    private String firstName;

    @Column
    private String middleNames;

    @NotBlank
    @Column
    private String lastName;

    @Column
    private String email;

    @Column
    private String mobileNumber;

    @Column
    private String address;

    @Column
    private String contractType;

    @Column
    private String startDate;

    @Column
    private String endDate;

    @Column
    private Boolean currentEmployee;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleNames() {
        return middleNames;
    }

    public void setMiddleNames(String middleNames) {
        this.middleNames = middleNames;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContractType() {
        return contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public Boolean getCurrentEmployee() {
        return currentEmployee;
    }

    public void setCurrentEmployee(Boolean currentEmployee) {
        this.currentEmployee = currentEmployee;
    }

}
