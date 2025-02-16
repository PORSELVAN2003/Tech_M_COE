package IO_Stream_Ex;

import java.io.File;

public class Q8 {
    public static void main(String[] args) {
        String path = "D:\\Project\\kesari.srt";
        File file = new File(path);

        if (file.exists() && file.isFile()) {
            long fileSizeBytes = file.length();
            double fileSizeKB = fileSizeBytes / 1024.0;
            double fileSizeMB = fileSizeKB / 1024.0;

            System.out.println("File Size in Bytes: " + fileSizeBytes + " B");
            System.out.println("File Size in KB: " + String.format("%.2f", fileSizeKB) + " KB");
            System.out.println("File Size in MB: " + String.format("%.2f", fileSizeMB) + " MB");
        } else {
            System.out.println("File does not exist or is not a valid file.");
        }
    }
}
