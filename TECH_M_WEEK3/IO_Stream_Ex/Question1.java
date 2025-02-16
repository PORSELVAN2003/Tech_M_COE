package IO_Stream_Ex;

import java.io.File;
import java.util.Arrays;

public class Question1 {
    public static void main(String[] args) {
        String filepath = "D:\\Project";

        File directory = new File(filepath);

        if (directory.exists() && directory.isDirectory()) {
            String[] filelist = directory.list();

            System.out.println("The path: " + directory + " " + Arrays.toString(filelist));
        }
    }
}
