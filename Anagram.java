package java_full_stack;

public class Anagram {
	
	public  boolean ischeckanagran(String str1,String str2) {
		
		int [] count=new int[26];
	
		
		for(char c :str1.toCharArray()) {
			count[c-'a']++;
		}
		
		for(char c:str2.toCharArray()) {
			count[c-'a']--;
		}
		
		for(int i=0;i<26;i++) {
			if(count[i]!=0) {
				return false;
			}
		}
		return true;
		
		
		
	}
	
	public static void main(String[] args) {
		String str1="abc";
		String str2="abcd";
		Anagram isanagram=new Anagram();
		boolean result=isanagram.ischeckanagran(str1, str2);
		System.out.println("The Strings are  Anagram " + "=="+" "+ result);
		
	}

}


