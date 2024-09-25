package io.nology.backend.employee;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotBlank;

public class CreateEmployeeDTO {
    @NotBlank
    @Length(min = 1, max = 60)
    private String firstName;

    @Length(max = 255)
    private String middleNames;

    @NotBlank
    @Length(min = 1, max = 60)
    private String lastName;

    // @Length(max = 60)
    // private String pronouns;

    @NotBlank
    private String email;

    @NotBlank
    private String mobile;

    @NotBlank
    private String address;

    private String contractType;

    // @Temporal(TemporalType.DATE)
    private String startDate;

    // @Temporal(TemporalType.DATE)
    private String endDate;

    private Boolean currentEmployee;

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

    // public String getPronouns() {
    // return pronouns;
    // }

    // public void setPronouns(String pronouns) {
    // this.pronouns = pronouns;
    // }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
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
