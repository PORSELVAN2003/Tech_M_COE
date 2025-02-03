import java.util.Scanner;

public class DivideNum {
    public static void main(String[] args) {
        Scanner divide=new Scanner((System.in));
        int input=divide.nextInt();
        int divisor=divide.nextInt();
        int remainder=input;
        int quotient=0;


        while(remainder>=divisor){
            remainder-=divisor;
            quotient++;
        }

        System.out.println(remainder);
        System.out.println(quotient);
    }
}
