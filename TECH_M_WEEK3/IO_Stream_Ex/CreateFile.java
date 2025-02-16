package IO_Stream_Ex;

import java.io.*;

public class CreateFile {
    public static void main(String[] args) {
        String filePath = "D:\\Project\\Testio.txt";
        String readFilePath = "D:\\Project\\Testio.txt";

        // Writing to file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filePath))) {
            writer.write("hiiii");
            writer.newLine();
            writer.write("it's ok bro");
            writer.newLine();
            writer.write("1.40-1.50");
            System.out.println("File written successfully.");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Reading from file
        File file = new File(readFilePath);
        
        if (file.exists()) {
            try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println(line);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            System.out.println("File not found: " + readFilePath);
        }
    }
}
