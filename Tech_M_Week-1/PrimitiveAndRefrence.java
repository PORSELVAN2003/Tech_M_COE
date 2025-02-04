import java.util.Arrays;

public class PrimitiveAndRefrence {
    public static void main(String[] args) {


        int num = 20;
        int [] arr = {10, 20, 30};

        System.out.println(num);  //primitive variable
        System.out.println(Arrays.toString(arr));

        altered(num,arr);

        System.out.println(num);
        System.out.println(Arrays.toString(arr));  // refrence variable
    }

    public static void altered(int num,int []arr){
        num=30;
        for(int i=0;i<arr.length;i++){
            arr[i]*=20;
        }

        System.out.println(num);
        System.out.println(Arrays.toString(arr));


    }
}


