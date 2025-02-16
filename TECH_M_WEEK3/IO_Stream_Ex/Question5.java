package IO_Stream_Ex;

import java.io.File;

public class Question5 {
	public static void main(String[] args) {
		String path="D:\\Project\\kesari.srt";
		File Directory=new File(path);
		if(Directory.exists()) {
			if(Directory.isFile()) {
				System.out.println(path+" "+" --> "+"is a file");
			}else if(Directory.isDirectory()) {
				System.out.println(path+" "+"--> "+"is a directory");
			}
			
		}
		
	}

}
