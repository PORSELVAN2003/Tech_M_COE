package Task1;

import java.util.Scanner;

public class Ques4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter a string: ");  
        String input = scanner.nextLine();
        scanner.close();  
        
        StringBuilder result = new StringBuilder();
        
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (i % 2 == 0) {
                result.append(Character.toUpperCase(ch)); 
            } else {
                result.append(Character.toLowerCase(ch)); 
            }
        }
        
        System.out.println("Output: " + result.toString());  
    }
}
