import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Q4 {
    public static void main(String[] args) {
        String filePath = "D:\\Project\\numbers.txt"; 
        boolean foundPositive = false;

        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                int num = Integer.parseInt(line.trim());
                if (num > 0) {
                    System.out.println("Positive number found: " + num);
                    foundPositive = true;
                }
            }
            
            if (!foundPositive) {
                System.out.println("All numbers are negative or zero.");
            }

        } catch (IOException e) {
            System.out.println("Exception: " + e.getMessage());
        } catch (NumberFormatException e) {
            System.out.println("Invalid number format in file.");
        }
    }
}
