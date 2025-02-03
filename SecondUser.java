public class SecondUser {


    SecondUser(String name,int age){
        this.name=name;
        this.age=age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private String name;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    private int age;

    public String toString() {
        return this.name + " " + this.age ;
    }

    public static void main(String[] args) {

        User userobj=new User("sam",22);
        SecondUser seconduserobj=new SecondUser("sam",22);

        System.out.println(userobj);
        System.out.println(seconduserobj);

        System.out.println(userobj.equals(seconduserobj));

    }


}
