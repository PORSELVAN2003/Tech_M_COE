package IO_Stream_Ex;

import java.io.File;
import java.util.Arrays;

public class Question2 {
	public static void main(String[] args) {
		String filepath = "D:\\Project";
		File Directory=new File(filepath);
		
		if(Directory.exists() && Directory!=null) {
			String[] path=Directory.list();
			System.out.println("file path"+" "+ Arrays.toString(path));
			
		}
		
	}

}
