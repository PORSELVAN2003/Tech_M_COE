package Task2;

import java.util.Scanner;

public class Employee {
    private int empId;
    private String empName;
    private double sal;
    private int yearsOfExperience;

    public Employee(int empId, String empName, double sal, int yearsOfExperience) {
        this.empId = empId;
        this.empName = empName;
        this.sal = sal;
        this.yearsOfExperience = yearsOfExperience;
    }

    public void getDetails() {
      
        System.out.println("Emp ID: " + empId);
        System.out.println("Emp Name: " + empName);
        System.out.println("Emp Salary: " + sal);
        System.out.println("Years of Experience: " + yearsOfExperience);
    }

    public void getLoanEligibility() {
        if (yearsOfExperience < 5) {
            System.out.println(empName + " is not eligible for a loan Requires 5 years of experience");
            return;
        }

        double annualSal = sal * 12;
        double loanAmount = 0;

        if (annualSal >= 1500000) {
            loanAmount = 700000;
        } else if (annualSal >= 1000000) {
            loanAmount = 5_00_000;
        } else if (annualSal >= 600000) {
            loanAmount = 200000;
        }

        if (loanAmount > 0) {
            System.out.println(empName + " is eligible for a loan of Rs. " + loanAmount);
        } else {
            System.out.println(empName + " is not eligible for a loan.");
        }
    }



    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Employee ID: ");
        int empId = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Enter Employee Name: ");
        String empName = scanner.nextLine();

        System.out.print("Enter Monthly Salary: ");
        double salary = scanner.nextDouble();

        System.out.print("Enter Years of Experience: ");
        int yearsOfExperience = scanner.nextInt();

        Employee emp = new Employee(empId, empName, salary, yearsOfExperience);

        emp.getDetails();
        emp.getLoanEligibility();

        scanner.close();
    }
    
    
    
    
    
    
}

