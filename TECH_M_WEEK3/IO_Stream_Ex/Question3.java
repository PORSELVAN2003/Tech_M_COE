package IO_Stream_Ex;

import java.io.File;

public class Question3 {
	public static void main(String[] args) {
		String path= "D:\\Project\\kesari.srt";
		
		File Directory=new File(path);
		if(Directory.exists()) {
			System.out.println("yes the path exist");
		}
		
	}

}
