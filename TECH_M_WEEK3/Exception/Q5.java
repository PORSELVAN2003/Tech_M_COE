package Exception;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class Q5 {
    public static void main(String[] args) {
        String path = "D:\\Project\\kesari.srt";
        File file = new File(path); 

        if (!file.exists()) { 
            System.out.println("File not found: " + path);
            return; 
        }

        if (file.length() == 0) { 
            System.out.println("The file is empty: " + path);
        } else {
            try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
                String content;
                while ((content = reader.readLine()) != null) {
                    System.out.println(content);
                }
            } catch (IOException e) { 
                e.printStackTrace();
            }
        }
    }
}
