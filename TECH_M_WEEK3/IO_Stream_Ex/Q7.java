package IO_Stream_Ex;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Q7 {
	public static void main(String[] args) {
		try {
			BufferedReader reader=new BufferedReader(new FileReader("D:\\Project\\kesari.srt"));
			String content;
			 while ((content = reader.readLine()) != null) { 
	                System.out.println(content);
	            }
			reader.close();
		}catch(IOException e){
			e.printStackTrace();
			
		}
		
	}

}
