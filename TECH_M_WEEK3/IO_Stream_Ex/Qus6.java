package IO_Stream_Ex;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Qus6 {
	public static void main(String[] args) {
		String path="D:\\Project\\kesari.srt";
		File Directory=new File(path);
		if(Directory.exists()) {
			 long lastModified = Directory.lastModified();

	        
	            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	            String formattedDate = sdf.format(new Date(lastModified));
	            System.out.println(formattedDate);

		}
		
	}

}
