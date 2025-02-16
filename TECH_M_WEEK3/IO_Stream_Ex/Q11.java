package IO_Stream_Ex;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Q11 {
	public static void main(String[] args) {
		String path = "D:\\Project\\kesari.srt";
		
		try(BufferedReader reader = new BufferedReader(new FileReader(path))) {
			String content;
			while((content=reader.readLine())!=null) {
				System.out.println("The read content"+content);
		}
		}catch(IOException e) {
			e.printStackTrace();
		}
	}

}
