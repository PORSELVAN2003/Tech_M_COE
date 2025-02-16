package IO_Stream_Ex;

import java.io.File;

public class Question4 {
	public static void main(String[] args) {
		String path="D:\\Project\\kesari.srt";
		File Directory=new File(path);
		if(Directory.exists()) {
			System.out.println("can file read"+" "+ Directory.canRead());
			System.out.println("can file write"+" "+  Directory.canWrite());
			System.out.println("is it a file"+ " "+ Directory.isFile());
			
		}
	}

}
