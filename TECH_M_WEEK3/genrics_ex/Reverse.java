package genrics_ex;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Reverse {
	public <T> List<T> reverselist(List<T>inputlist) {
		List<T>revrsedlist=new ArrayList<>(inputlist);
		Collections.reverse(revrsedlist);
		return revrsedlist;
		
	}
	public static void main(String[] args) {
	Reverse objlist=new Reverse();
	List<Integer> number=List.of(12,12,3,45,67);
	
	System.out.println(objlist.reverselist(number));
	}

}
