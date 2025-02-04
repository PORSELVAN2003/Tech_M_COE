public class User {


    public String getName() {
        return name;
    }

    public void setname(String name) {
        this.name = name;
    }

    private String name;

    public int getage() {
        return age;
    }

    public void setAge1(int age) {
        this.age = age;
    }

    private int age;

    User(String name,int age){
        this.name=name;
        this.age=age;
    }

    public String toString() {
        return this.name + " " + this.age ;
    }


}


