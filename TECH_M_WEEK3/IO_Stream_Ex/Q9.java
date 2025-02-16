package IO_Stream_Ex;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Arrays;

public class Q9 {
	public static void main(String[] args) {
		String path="D:\\Project\\kesari.srt";
		File Directory=new File(path);
		try {
			if(Directory.exists()) {
				byte[] bytearr=Files.readAllBytes(Directory.toPath());
				System.out.println("the byte arr"+ Arrays.toString(bytearr));
				
			}
			
		}catch(IOException e) {
			e.printStackTrace();
		}
		
	}

}
