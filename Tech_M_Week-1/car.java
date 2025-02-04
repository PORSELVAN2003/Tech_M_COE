
class Car {
   private String model;
   private String carmake;
   private int year;


   public void setmodel(String model) {
      this.model = model;
     
   }

   public String getmodel() {

      return model;
   }

   public void setcarmake(String carmake) {
      this.carmake = carmake;
   }

   public String getcarmake() {
      return carmake;
   }

   public void setYear(int year) {
      this.year = year;
   }

   public int getYear() {
      return year;
   }

   public static String StartEngibe() {
      System.out.println("start engine");
      return "";
   }


   public void start_engine() {
      System.out.println("Engine started........");

   }

   public static void main(String[] args) {

      Car car_obj = new Car();
      car_obj.setmodel("730d");
      car_obj.setcarmake("BMW");

      car_obj.setYear(2003);


      System.out.println("Car Model" + " " + car_obj.getmodel());
      System.out.println("Car Make" + " " + car_obj.getcarmake());
      System.out.println("car_manufacture_Date" + " " + car_obj.getYear());

      car_obj.start_engine();

   }

}
