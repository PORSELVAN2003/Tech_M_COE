final class Test_Final {   // As the class is final so no subclass can inherit
    final int age=10;

    final static int area(){    // final method to find the area
        final int length=10;
        final int height=20;
        final int  Area=length*height;
        return Area;
    }

    public static void main(String[] args) {
        Test_Final obj=new Test_Final() ;
        System.out.println(obj.age);
//        System.out.println(obj.age=10);    final variable when assigned with new value throws error

        System.out.println(obj.area());
    }
}
