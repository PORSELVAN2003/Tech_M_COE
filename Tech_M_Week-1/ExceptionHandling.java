package java_full_stack;

import java.util.Scanner;

public class ExceptionHandling {
    public static void processInput() {
        Scanner obj = new Scanner(System.in);
        try {
            System.out.print("Enter a number: ");
            double num = obj.nextDouble();

            if (num == 0) {
                throw new ArithmeticException("cannot divide by zero");
            }

            double reciprocal = 1 / num;
            System.out.println("The reciprocal of " +" is " + reciprocal);
  
        } catch (Exception e) {
            System.err.println("give valid input");
        } finally {
            obj.close();
        }
    }

    public static void main(String[] args) {
        processInput();
    }
}
