public class Dog extends Animal{


    @Override
    public void makeSound() {
        System.out.println("Dog is Barking....");
    }

    public static void main(String[] args) {
        Animal animalobj=new Dog();
        animalobj.makeSound();
    }
}
